import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Transition from "./components/transition/Transition";
import Contact from "./components/contact/Contact";
import ProjectList from "./components/projectList/ProjectList";
function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Transition />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
