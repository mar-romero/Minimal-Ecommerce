import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
