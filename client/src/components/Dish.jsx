import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function Dish({dish}){
    return (
        <Col xs={3} sm={3} className= "d-flex flex-row justify-content-between shadow-sm rounded p-0 dish-container">
            <img src={dish.base64} className="img-responsive dish-image" />
            <div className="d-flex flex-column justify-content-center align-items-end m-auto">
                <Button variant="outline-primary" type="submit" size="sm" className="mb-3">Add to Cart</Button>
                <p className="h2 mb-0">{dish.name}</p>
                <p className="h6">{dish.restaurant}</p>
                <p>${dish.price}</p>
            </div>
        </Col>
    )
}