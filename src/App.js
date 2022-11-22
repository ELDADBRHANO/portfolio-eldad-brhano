import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/features/Header/Header";
import Routing from "./Routing";
import Home from "./components/pages/Home/Home";
import About from './components/pages/About/About';
import Projects from './components/features/Projects/Projects';
import Contact from './components/pages/Contact/Contact';
import Particle from "./components/features/particels-background/particels";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Particle/>
        <Header/>
        {/* <Home/>
        <About/>
        <Projects/>
        <Contact/> */}
        {/* <Routing/> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
