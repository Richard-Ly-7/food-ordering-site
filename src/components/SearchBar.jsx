import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SearchBar(){
    return (
        <Form>
            <Form.Label className="d-flex m-auto w-50 mb-5">
                <Form.Control type="text" className="me-3" />
                <Button variant="outline-primary" type="submit" size="lg" className="ms-3">Search</Button>
            </Form.Label>
        </Form>
    )
}