import CloseButton from 'react-bootstrap/CloseButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CartItems({dish}){
    return (
        <Col xs={12} sm={12} className="mb-5">
            <Row className="d-flex justify-content-between">
                <CloseButton className="m-auto"/>
                <Col xs={10} sm={10} className= "d-flex flex-row justify-content-between shadow-sm rounded p-0 dish-container">
                    <img src={dish.base64} className="img-responsive dish-image" />
                    <div className="d-flex flex-column justify-content-center align-items-end m-auto">
                        <p className="h2 mb-0">{dish.name}</p>
                        <p className="h6">{dish.restaurant}</p>
                        <p>${dish.price}</p>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}