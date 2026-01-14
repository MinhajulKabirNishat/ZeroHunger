import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donor from "./pages/Donor";
import Receiver from "./pages/Receiver";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/receiver" element={<Receiver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
