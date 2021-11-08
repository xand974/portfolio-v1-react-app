import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductsList from "./components/productsList/ProductsList";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductsList />
      <Contact />
    </div>
  );
}

export default App;
