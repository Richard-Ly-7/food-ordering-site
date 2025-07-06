import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login(){
    return (
        <Container fluid="md" className="wrapper shadow-sm">

            <p className="h1 text-center mb-5">Post a Restaurant or Dish!</p>

            <Row className="justify-content-center">
                <Col xs={7} sm={7}>
                    <Form>
                        <Form.Group className="mb-5">
                            <Form.Label>What are you posting?</Form.Label>
                            <Form.Select>
                                <option>Dish</option>
                                <option>Restaurant</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Dish Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label>Upload An Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button variant="outline-primary" type="submit" size="lg">Post</Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}