import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyNav brandName="Ciccio pasty"></MyNav>
      <Footer alertColor="success" />
    </>
  );
}

export default App;
