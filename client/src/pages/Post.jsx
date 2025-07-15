import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Post({ user }){

    const [fields, setFields] = useState({
        dishName: "",
        price: 0,
        base64: ""
    });

    const convertToBase64 = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setFields({...fields, base64: reader.result});
        };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:4000/restaurants/findRestaurant/${user.email}`);
        const restaurant = await res.json();

        if(res.ok) {
            await fetch('http://localhost:4000/dishes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name: fields.dishName, price: fields.price, base64: fields.base64, restaurant: restaurant.name, restaurantId: restaurant.id}),
            });
        }

    };

    return (
        <Container fluid="md" className="wrapper shadow-sm">

            <p className="h2 text-center mb-5">Post a Dish!</p>

            <Row className="justify-content-center">
                <Col xs={7} sm={7}>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-4">
                        <Form.Label>Dish Name</Form.Label>
                        <Form.Control type="text" value={fields.dishName} onChange={(e) => setFields({...fields, dishName: e.target.value})} required />
                        </Form.Group>

                        <Form.Group className="mb-4">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" value={fields.price} onChange={(e) => setFields({...fields, price: e.target.value})} required />
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label>Upload An Image</Form.Label>
                            <Form.Control type="file" accept="image/jpg, image/jpeg, image/png" onChange={convertToBase64} />
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