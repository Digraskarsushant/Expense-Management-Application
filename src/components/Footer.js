import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/footer.css'
import TwitterIcon  from "@mui/icons-material/Twitter";
import { Link } from 'react-router-dom';

function Footer()
{
    return(
        <div>
            <section className="footer">
                <Container>
                    <Row className="text-center py-5">
                        <Col sm={3}>
                            <h4 className="text text-success">Splitwise</h4>
                            <ul>
                                <Link to="/about"><li>About</li></Link>
                                <a href="#"><li>Press</li></a>
                                <a href="#"><li>Blog</li></a>
                                <a href="#"><li>Jobs</li></a>
                                <a href="#"><li>Calculators</li></a>
                                <a href="#"><li>API</li></a>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4 className="text text-danger">Account</h4>
                            <ul>
                                <Link to="/login"><li>Log in</li></Link>
                                <Link to="/signup"><li>Sign up</li></Link>
                                <a href="#"><li>Splitwise Pro</li></a>
                                <a href="#"><li>Splitwise Pay</li></a>
                                <Link to="/login"><li>Settings</li></Link>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>More</h4>
                            <ul>
                                <a href="#"><li>Contact us</li></a>
                                <a href="#"><li>FAQ</li></a>
                                <a href="#"><li>Terms of Service</li></a>
                                <a href="#"><li>Privacy Policy</li></a>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>Social Media</h4>
                            <ul>
                                <a href="#"><FacebookIcon/></a>
                                <a href="#"><InstagramIcon/></a>
                                <a href="#"><TwitterIcon/></a>
                            </ul>
                        </Col>
                    </Row>
                    <div className="footer1">
                        <hr style={{color: 'white',border:'1px solid white'}}/>
                        <h6 style={{textAlign:'center', color:'black'}}>Copyright Reserved @2024 Sushant</h6>
                    </div>
                </Container>
                
            </section>
        </div>
    )
}
export default Footer;