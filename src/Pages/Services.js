import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, Spinner } from 'react-bootstrap';
import axios from 'axios';
import '../styles/Menu.css';


function Services() {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [payer, setPayer] = useState('');
  const [peoplePaidFor, setPeoplePaidFor] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/currentuser')
      .then(response => setUserName(response.data.name))
      .catch(error => console.error(error));

    axios.get('http://localhost:8000/api/users')
      .then(response => {
        setUserList(response.data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const handleAddExpense = () => {
    if (!description || !cost || isNaN(cost) || !payer || peoplePaidFor.length === 0) {
      alert('Please enter valid values for description, cost, paid by, and people paid for.');
      return;
    }
  
    const expenseData = {
      description: description,
      amount: parseFloat(cost),
      payer: payer,
      peoplePaidFor: peoplePaidFor,
    };
  
    axios.post('http://localhost:8000/api/add-expense', expenseData)
      .then(response => {
        setExpenses(prevExpenses => [...prevExpenses, response.data]);
        setDescription('');
        setCost('');
        setPayer('');
        setPeoplePaidFor([]);
      })
      .catch(error => console.error(error));
  };
  


  return (
    <div>
      <section className="services">
        <Container>
          <Row className='py-2'>
            <Col md={12}>
              <h4>Welcome {userName}</h4>
            </Col>
          </Row>
          <Row className='py-4'>
            <Col md={2}></Col>
            <Col md={4}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="expense"
                  placeholder='Add Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="cost"
                  placeholder='0.00'
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </div>
            </Col>
            <Row className='text-center'>
              <Col md={4}></Col>
              <Col md={2}>
                <div className="mb-3">
                  <select
                    className="form-control"
                    value={payer}
                    onChange={(e) => setPayer(e.target.value)}
                  >
                    <option value="" disabled>Select Payer</option>
                    {userList.map((user, index) => (
                      <option key={index} value={user}>{user}</option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col md={2}>
                <div className="mb-3">
                  <select
                    multiple
                    className="form-control"
                    value={peoplePaidFor}
                    onChange={(e) => setPeoplePaidFor(Array.from(e.target.selectedOptions, (option) => option.value))}
                  >
                    <option value="" disabled>Select People Paid For</option>
                    {userList.map((user, index) => (
                      <option key={index} value={user}>{user}</option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col md={4}></Col>
            </Row>
            <Col md={10}></Col>
            <Col md={2}>
              <Button variant='danger' onClick={handleAddExpense}>Add Expense</Button>
            </Col>
          </Row>
          <Row className='py-4'>
            <Col md={6}>
              <h5>All Users</h5>
              {loading ? (
                <Spinner animation="border" role="status" />
              ) : (
                <ListGroup>
                  {userList.map((user, userIndex) => {
                    const userShare = expenses.reduce((total, expense) => {
                      if (expense.peoplePaidFor && expense.peoplePaidFor.includes(user)) {
                        const extraShare = expense.peoplePaidFor.includes('Sakshi') ? (expense.share / expense.peoplePaidFor.length) * 0.05 : 0;
                        return total + (expense.share / expense.peoplePaidFor.length) + extraShare;
                      }
                      return total;
                    }, 0);

                    return (
                      <ListGroup.Item key={userIndex}>
                        {user} - Total Lend: {userShare ? userShare.toFixed(2) : 'N/A'}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>

              )}
            </Col>
          </Row>

          {expenses.length > 0 && (
            <Row className='py-4'>
              <Col md={12}>
                <h5>Added Expenses</h5>
                <ListGroup>
                  {expenses.map((expense, index) => (
                    <ListGroup.Item key={index}>
                      {expense.description} - {expense.share} from {expense.user} to {expense.peoplePaidFor.join(', ')}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
            
          )}
        </Container>
      </section>
    </div>
  );
}

export default Services;
