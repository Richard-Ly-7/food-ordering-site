import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Register(){
    return (
        <Container fluid="md" className="wrapper shadow-sm">
            <p className="h1 text-center mb-5">Welcome Back!</p>

            <Row className="justify-content-center">
                <Col xs={7} sm={7}>
                    <Form>
                        <Form.Group className="mb-4">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label>I am a:</Form.Label>
                            <Form.Select>
                                <option>Buyer</option>
                                <option>Restaurant</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button variant="outline-primary" type="submit" size="lg">Register</Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}