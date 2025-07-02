import Container from 'react-bootstrap/Container';

export default function Dish({dish}){
    return (
        <Container className="d-flex flex-row justify-content-between col-3 shadow-sm rounded p-0 dish-container">
            <img src={dish.base64} className="img-responsive dish-image" />
            <div className="d-flex flex-column justify-content-center align-items-end m-auto">
                <button className="btn btn-sm btn-outline-primary mb-3">Add to Cart</button>
                <p className="h2 mb-0">{dish.name}</p>
                <p className="h6">{dish.restaurant}</p>
                <p>${dish.price}</p>
            </div>
        </Container>
    )
}