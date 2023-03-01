import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import Detail from "./render/Detail";
import AddProduct from "./render/AddProduct";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new" element={<AddProduct />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
