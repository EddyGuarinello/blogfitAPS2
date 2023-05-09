import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/inicio';
import Artigo from './pages/artigo';
import Criar from './pages/criar';

export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path="/artigo/:slug" element={<Artigo/>}></Route>
                {/* <Route path='/logar' element={<Logar />}></Route> */}
                 <Route path='/criar' element={<Criar />}></Route>
                {/* <Route path='/contato' element={<Contato />}></Route> */}
                {/* <Route path='/contato' element={<Contato />}></Route> */}
            </Routes>
        </Router>
    );
}