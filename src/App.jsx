import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav brandName="Ciccio pasty"></MyNav>
      <Welcome />
      <Footer alertColor="success" />
    </>
  );
}

export default App;
