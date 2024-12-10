import Login from "./pages/Login";
import Index from "./pages/Index";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/" element={<Index />}></Route>
        <Route path="rooms/:url" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
