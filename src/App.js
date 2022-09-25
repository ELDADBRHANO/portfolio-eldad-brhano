import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/features/Header/Header";
import Routing from "./Routing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
