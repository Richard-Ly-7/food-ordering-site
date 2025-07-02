import Restaurant from '../components/Restaurant';
import SearchBar from '../components/SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Restaurants () {
    return (
      <Container fluid="md" className="wrapper shadow-sm">
              
        <p className="h1 text-center mb-5">Best Nearby Restaurants</p>
        <SearchBar />

        <Row className="justify-content-evenly pb-5">
          <Restaurant restaurant={{base64: "https://picsum.photos/seed/picsum/200/300", name: "Olive Garden", address: "20080 Langley Bypass, Langley, BC V3A 9J7", description: "An Italian restaurant best known for their pastas and salads"}}/>
          
        </Row>
        <div className="m-auto row pb-5">
        </div>
        <div className="m-auto row pb-5">
        </div>
      </Container>
    )
}