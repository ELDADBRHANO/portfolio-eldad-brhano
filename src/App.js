import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/features/Header/Header";
import Footer from "./components/features/Footer/Footer";
import Routing from "./Routing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routing/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
