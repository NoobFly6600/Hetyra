import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import InHomeService from '../../../Photos/InHomeServices.png';
import BeYourOwnBoss from '../../../Photos/BeYourOwnBoss.png';

export default function LandingPage(props) {
    return (
        <div style={{backgroundColor: 'white', minHeight: 'calc(100vh - 200px)'}}>
            <Container fluid={true} style={{padding: '40px 20px'}}>
                <Row className="text-center mb-5">
                    <Col>
                        <h1 style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            marginBottom: '30px'
                        }}>
                            Relax anywhere, anytime with Hetyra
                        </h1>
                        
                        <h4 style={{
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}>
                            A platform that connects you with massage therapists and bodyworkers
                        </h4>
                    </Col>
                </Row>

                {/* First Card */}
                <Row className="mb-5">
                    <Col>
                        <Card style={{ border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <Row className="g-0 align-items-center">
                                <Col md={6}>
                                    <Card.Img
                                        src={InHomeService}
                                        alt="In-Home Massage Service"
                                        style={{
                                            borderRadius: '10px 0 0 10px',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="p-5">
                                        <Card.Title as="h2" className="mb-4">In-Home Services</Card.Title>
                                        <Card.Text style={{
                                            fontSize: '18px',
                                            lineHeight: '1.6',
                                            marginBottom: '30px'
                                        }}>
                                            Bring relaxation and rejuvenation straight to your doorstep! 
                                            With Hetyra, you can easily book skilled massage therapists and 
                                            bodyworkers at a time and place that fits your schedule.
                                        </Card.Text>
                                        <Link to="/in-home-services">
                                            <Button 
                                                size="lg"
                                                style={{
                                                    backgroundColor: 'black',
                                                    border: 'none',
                                                    padding: '12px 30px',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                Get Started
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                {/* Second Card */}
                <Row>
                    <Col>
                        <Card style={{ border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <Row className="g-0 align-items-center">
                                <Col md={6}>
                                    <Card.Body className="p-5">
                                        <Card.Title as="h2" className="mb-4">Be your own boss</Card.Title>
                                        <Card.Text style={{
                                            fontSize: '18px',
                                            lineHeight: '1.6',
                                            marginBottom: '30px'
                                        }}>
                                            Join Hetyra and take control of your business. Set your availability, 
                                            define your service areas, manage appointments, and maximize your earning 
                                            potential—all with ease through the Hetyra Provider App.
                                        </Card.Text>
                                        <Link to="/providers">
                                            <Button 
                                                size="lg"
                                                style={{
                                                    backgroundColor: 'black',
                                                    border: 'none',
                                                    padding: '12px 30px',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                Become a Provider
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Col>
                                <Col md={6}>
                                    <Card.Img
                                        src={BeYourOwnBoss}
                                        alt="Be Your Own Boss"
                                        style={{
                                            borderRadius: '0 10px 10px 0',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}