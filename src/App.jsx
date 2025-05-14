import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav brandName="Ciccio pasty"></MyNav>
      <Welcome alertColor="info" alertContent="Ciaooooo!" textContent="Come stai?" />
      <Welcome alertColor="success" />
      <Footer />
    </>
  );
}

export default App;
