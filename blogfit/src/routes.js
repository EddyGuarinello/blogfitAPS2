import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/inicio';

export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
            </Routes>
        </Router>
    );
}