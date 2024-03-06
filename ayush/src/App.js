import './index.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Project' element={<Project/>}/>
    </Routes>
    </>
  );
}

export default App;
