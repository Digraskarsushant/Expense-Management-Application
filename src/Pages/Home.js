import React from 'react'
import { Container,Row,Col,Button,Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap'
import img1 from '../Images/asset1.png'
import img2 from '../Images/asset2.png'
import img3 from '../Images/asset3.png'
import img4 from '../Images/asset4.png'
import img5 from '../Images/button.jpg'
import img6 from '../Images/diamond.png'
import FlightTakeoff from '@mui/icons-material/FlightTakeoff'
import House from '@mui/icons-material/House'
import HeartBrokenSharp from  '@mui/icons-material/HeartBrokenSharp'
import Star from '@mui/icons-material/Star'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() 
{
  return (
    <div>
      <section className='Banner'>
        <Container>
          <Row className='py-4 text-center'>
             <Col className='font'>
              <h1 className='text'>Less Stress when sharing expences</h1>
              <h1 className='text text-success'>with anyone</h1>
              <FlightTakeoff style={{fontSize: "50px", color:"green"}}/>
              <House style={{fontSize: "50px", color:"purple"}}/>
              <HeartBrokenSharp style={{fontSize: "50px", color:"red"}}/>
              <Star style={{fontSize: "50px", color:"grey"}}/>
              <br></br>
              <h3 className='text'>Keep track of your shared expenses and balances with</h3>
              <h3 className='text'>housemates, trips, groups, friends, and family.</h3>
              <br></br>
              <Link to="/signup"><Button variant='secondary'>Sign up</Button></Link>
             </Col>
          </Row>
        </Container>
      </section>

      <section  className='Coupons'>
       <Container>
        <Row className='py-4 text-center '>
          <Col className='black' md={6} >
            <br></br><br></br>
            <h4 style={{color:'white'}}><b>Track balances</b></h4>
            <br></br>
            <h4 style={{color:'white'}}>Keep track of shared expenses,</h4>
            <h4 style={{color:'white'}}>balances, and who owes who.</h4>
            <br></br><br></br>
            <img src={img1} style={{width:'350px'}}></img>    
          </Col>
          <Col className='green' md={6}>
            <br></br><br></br>
            <h4 style={{color:'white'}}><b>Organize expenses</b></h4>
            <br></br>
            <h4 style={{color:'white'}}>Split expenses with any group: trips,</h4>
            <h4 style={{color:'white'}}>housemates, friends, and family.</h4>
            <br></br><br></br>
            <img src={img2} style={{width:'350px'}}></img>    
          </Col>
          <Col className='orange' md={6} >
            <br></br><br></br>
            <h4 style={{color:'white'}}><b>Add expenses easily</b></h4>
            <br></br>
            <h4 style={{color:'white'}}>Quickly add expenses on the go before</h4>
            <h4 style={{color:'white'}}>you forget who paid.</h4>
            <br></br><br></br>
            <img src={img3} style={{width:'350px'}}></img>    
          </Col>
          <Col className='black' md={6}>
            <br></br><br></br>
            <h4 style={{color:'white'}}><b>Pay friends back</b></h4>
            <br></br>
            <h4 style={{color:'white'}}>Settle up with a friend and record any</h4>
            <h4 style={{color:'white'}}>cash or online payment.</h4>
            <br></br><br></br>
            <img src={img4} style={{width:'350px'}}></img>    
          </Col>
        </Row>
      </Container>
    </section>
    <br></br><br></br>
    <section>
      <Container>
        <Row className='py-4'>
          <h1 style={{textAlign:'center'}}><b>The whole nine yards</b></h1>
          <Col className='justify' md={4}>
            <br></br>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img> Add groups and friends</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img> Split expenses, record debts</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img> Equal or unequal splits</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img> Split by % or shares</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img> Split by % or shares</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img> Suggested repayments</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img> Simplify debts</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img> Recurring expenses</h5> 
          </Col>
          <Col className='justify' md={4}>
            <br></br>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img>Offline mode</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img>Cloud sync</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img>Spending totals</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img>Categorize expenses</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img>Easy CSV exports</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img>7+ languages</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img>100+ currencies</h5>
            <h5><img src={img5} style={{height:'30px',width:'30px'}}></img>Payment integrations</h5> 
          </Col>
          <Col className='justify' md={4}>
            <br></br>
            <h5><img src={img6} style={{height:'30px',width:'30px'}}></img>A totally ad-free experience</h5>
            <h5><img src={img6} style={{height:'30px',width:'30px'}}></img>Currency conversion</h5>
            <h5><img src={img6} style={{height:'30px',width:'30px'}}></img>Receipt scanning</h5>
            <h5><img src={img6} style={{height:'30px',width:'30px'}}></img>Itemization</h5>
            <h5><img src={img6} style={{height:'30px',width:'30px'}}></img>Charts and graphs</h5>
            <h5><img src={img6} style={{height:'30px',width:'30px'}}></img>Expense search</h5>
            <h5><img src={img6} style={{height:'30px',width:'30px'}}></img>Save default splits</h5>
            <h5><img src={img6} style={{height:'30px',width:'30px'}}></img>Early access to new features</h5> 
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Home