import { Alert } from "react-bootstrap";
import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyNav brandName="Ciccio pasty"></MyNav>
      <div className="container">
        <Alert variant="success">Yayy</Alert>
      </div>
      <Footer />
    </>
  );
}

export default App;
