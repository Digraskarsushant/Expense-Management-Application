import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import aboutimg from '../Images/logo-faceted.svg'
import img1 from '../Images/ios1.png'
import img2 from '../Images/ios2.png'
import img3 from '../Images/ios3.png'
import img4 from '../Images/ios4.png'
import img5 from '../Images/ios5.png'
import img6 from '../Images/and1.png'
import img7 from '../Images/and2.png'
import img8 from '../Images/and3.png'
import img9 from '../Images/and4.png'
import img10 from '../Images/and5.png'
import '../styles/about.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
       <section className='About'>
        <Container>
          <Row className='background'>
            <Col md={6}>
              <h1><b>What is Splitwise?</b></h1>
              <br></br>
              <h6 style={{textAlign:'justify'}}>
              Splitwise is a Providence, RI-based company that makes it easy to split bills with friends and family.
              We organize all your shared expenses and IOUs in one place, so that everyone can see who they owe.
              Whether you are sharing a ski vacation, splitting rent with roommates, or paying someone back for lunch,
              Splitwise makes life easier. We store your data in the cloud so that you can access it anywhere: on iPhone,
              Android, or on your computer.
              </h6>
              <h6><b>We focus on fairness</b></h6>
              <h6 style={{textAlign:'justify'}}>
                Most people want to be fair to each other, but sometimes they forget, or can’t
                decide on what fair is. In addition to helping people honor their debts,
                we provide mediation advice about fairness issues through our “fairness calculators.”
                These calculators turn our crowdsourced data into a neutral fairness opinion about your personal situation.
              </h6>
            </Col>
            <Col md={6}>
              <img src={aboutimg} style={{height:'80%',width:'70%'}}></img>
            </Col>
          </Row>
          <br></br><br></br>
          <Row>
           <h3><b>iOS screenshots</b></h3>
           <br></br><br></br><br></br>
           <Col md={2.4}>
            <img src={img1} style={{height:'90%', width:'20%'}}></img>
            <img src={img2} style={{height:'90%', width:'20%'}}></img>
            <img src={img3} style={{height:'90%', width:'20%'}}></img>
            <img src={img4} style={{height:'90%', width:'20%'}}></img>
            <img src={img5} style={{height:'90%', width:'20%'}}></img>
           </Col>
          </Row>
          <Row className='py-4 text-center'>
            <Link to="https://splitwise.s3.amazonaws.com/press_assets/iphone/iphone.zip"><Button variant='success'>Download iPhone Screenshots</Button></Link>
          </Row>
          <br></br>
          <Row>
           <h3><b>Android screenshots</b></h3>
           <br></br><br></br><br></br>
           <Col md={2.4}>
            <img src={img6} style={{height:'90%', width:'20%'}}></img>
            <img src={img7} style={{height:'90%', width:'20%'}}></img>
            <img src={img8} style={{height:'90%', width:'20%'}}></img>
            <img src={img9} style={{height:'90%', width:'20%'}}></img>
            <img src={img10} style={{height:'90%', width:'20%'}}></img>
           </Col>
          </Row>
          <Row className='py-4 text-center'>
            <Link to="https://splitwise.s3.amazonaws.com/press_assets/android/android.zip"><Button variant='success'>Download Android Screenshots</Button></Link>
          </Row>
        </Container>
       </section>
    </div>
  )
}

export default About