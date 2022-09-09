import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Ecomermes } from "./Components/Ecomermes";
import { Concatenacion } from "./pages/Concatenacion";
import { Pagination } from "./pages/Pagination";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagination />}  />
          <Route path="/concatenation" element={<Concatenacion />}  />
          <Route path="/ecomerme" element={<Ecomermes />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
