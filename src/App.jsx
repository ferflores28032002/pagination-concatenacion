import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Concatenacion } from "./pages/Concatenacion";
import { Pagination } from "./pages/Pagination";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagination />}  />
          <Route path="/concatenation" element={<Concatenacion />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
