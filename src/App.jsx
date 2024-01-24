import "./styles/reset.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Company from "./components/company/Company";
import Product from "./components/product/Product";
import Top from "./components/top-section/Top";
import About from "./components/about-section/About";
import News from "./components/news-section/News";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Company />
      <Product />
      <About />
      <News />
      <Footer />
    </div>
  );
}

export default App;
