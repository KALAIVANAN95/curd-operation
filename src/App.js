import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curd from "./CURD/Curd";

function App() {
  return (
    <div className="main">
      <h2>CURD Operation</h2>
      <Curd />
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
