import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donor from "./pages/Donor";
import Receiver from "./pages/Receiver";
import MapView from "./pages/MapView";

<Route path="/map" element={<MapView />} />


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/receiver" element={<Receiver />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
