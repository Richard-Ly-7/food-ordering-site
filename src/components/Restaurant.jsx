import Container from 'react-bootstrap/Container';

export default function Restaurant({restaurant}){
    return (
        <Container className="d-flex flex-row justify-content-between col-7 shadow-sm rounded p-0 restaurant-container">
            <img src={restaurant.base64} className="restaurant-image ms-2 my-auto rounded" />
            <div className="d-flex flex-column justify-content-center my-auto me-5 text-end">
                <div>
                    <p className="h2 mb-0">{restaurant.name}</p>
                    <p className="h6">{restaurant.address}</p>
                </div>
                <p className="h6 fw-light fst-italic">{restaurant.description}</p>
            </div>
        </Container>
    )
}