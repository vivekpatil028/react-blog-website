import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
