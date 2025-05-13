import { Alert } from "react-bootstrap";
import "./App.css";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <div className="container">
        <Alert variant="success">Yayy</Alert>
      </div>
    </>
  );
}

export default App;
