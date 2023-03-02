import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import Detail from "./render/Detail";
import AddProduct from "./render/AddProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new" element={<AddProduct />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
