import "./styles/reset.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Company from "./components/company/Company";

function App() {
  return (
    <div className="App">
      <Header />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
