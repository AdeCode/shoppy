import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
