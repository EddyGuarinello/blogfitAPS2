import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Artigo from "./pages/artigo";
import Criar from "./pages/criar";
import Login from "./pages/login";
import Register from "./pages/register";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/artigo/:slug" element={<Artigo />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/criar" element={<Criar />}></Route>
        {/* <Route path='/contato' element={<Contato />}></Route> */}
      </Routes>
    </Router>
  );
}
