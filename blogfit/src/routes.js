import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/inicio';

export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                {/* <Route path='/logar' element={<Logar />}></Route> */}
                {/* <Route path='/criar' element={<Criar />}></Route> */}
                {/* <Route path='/contato' element={<Contato />}></Route> */}
                {/* <Route path='/contato' element={<Contato />}></Route> */}
            </Routes>
        </Router>
    );
}