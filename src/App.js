import Login from "./pages/Login";
import Index from "./pages/Index";
import Room from "./pages/Room";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/" element={<Index />}></Route>
        <Route path="rooms/:url" element={<Room />} />
        <Route path="register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
