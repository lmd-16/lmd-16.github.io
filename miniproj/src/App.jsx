import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Insp from './pages/Insp';

function App() {
  return(
    <Routes>
    <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Insp" element={<Projects />}/>

    </Route>
  </Routes>
  ); 


}

export default App;
