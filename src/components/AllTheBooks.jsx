import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import scifi from "../data/scifi.json";
import { Col, Container, Row } from "react-bootstrap";

function AllTheBooks() {
  return (
    <Container>
      <h2> Libri Disponibili </h2>
      <Row xs={1} sm={2} md={3} lg={4} xxl={6}>
        {scifi.map((book) => (
          <Col key={book.asin}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}$</Card.Text>
                <Button variant="primary">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
