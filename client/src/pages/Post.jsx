import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login(){

    const [fields, setFields] = useState({
        selectValue: "Dish",
        dishName: "",
        price: 0,
        restaurant: "",
        restaurantName: "",
        address: "",
        description: ""
    });

    const changeField = (e) => {

        setFields({
            selectValue: e.target.value,
            dishName: "",
            price: 0,
            restaurant: "",
            restaurantName: "",
            address: "",
            description: ""
        });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://localhost:4000/${fields.selectValue === "Dish" ? "dishes" : "restaurants"}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fields.selectValue === "Dish" ? {name: fields.dishName, price: fields.price, restaurant: fields.restaurant, base64: "test"} : {name: fields.restaurantName, address: fields.address, description: fields.description, base64: "test"}),
        });

    };

    return (
        <Container fluid="md" className="wrapper shadow-sm">

            <p className="h2 text-center mb-5">Post a Restaurant or Dish!</p>

            <Row className="justify-content-center">
                <Col xs={7} sm={7}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-5">
                            <Form.Label>What are you posting?</Form.Label>
                            <Form.Select onChange={changeField}>
                                <option>Dish</option>
                                <option>Restaurant</option>
                            </Form.Select>
                        </Form.Group>

                        {
                            fields.selectValue === "Dish" ?

                            <Form.Group className="mb-4">
                            <Form.Label>Dish Name</Form.Label>
                            <Form.Control type="text" value={fields.dishName} onChange={(e) => setFields({...fields, dishName: e.target.value})} required />
                            </Form.Group>

                            :

                            <Form.Group className="mb-4">
                            <Form.Label>Restaurant Name</Form.Label>
                            <Form.Control type="text"  value={fields.restaurantName} onChange={(e) => setFields({...fields, restaurantName: e.target.value})} required />
                            </Form.Group>

                        }
                        
                        {
                            fields.selectValue === "Dish" ?

                            <Form.Group className="mb-4">
                            <Form.Label>Restaurant</Form.Label>
                            <Form.Control type="text" value={fields.restaurant} onChange={(e) => setFields({...fields, restaurant: e.target.value})} required />
                            </Form.Group>

                            :

                            <Form.Group className="mb-4">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text"  value={fields.address} onChange={(e) => setFields({...fields, address: e.target.value})} required />
                            </Form.Group>

                        }

                        {
                            fields.selectValue === "Dish" ?

                            <Form.Group className="mb-4">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" value={fields.price} onChange={(e) => setFields({...fields, price: e.target.value})} required />
                            </Form.Group>

                            :

                            <Form.Group className="mb-4">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text"  value={fields.description} onChange={(e) => setFields({...fields, description: e.target.value})} required />
                            </Form.Group>

                        }

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