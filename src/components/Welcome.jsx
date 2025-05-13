import { Alert, Container } from "react-bootstrap";

function Welcome(props) {
  return (
    <>
      <Container>
        <Alert variant={props.alertColor}>Yayy</Alert>
      </Container>
    </>
  );
}
export default Welcome;
