import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductsList from "./components/productsList/ProductsList";
function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductsList />
    </div>
  );
}

export default App;
