import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import About from './pages/About';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route element={<MainLayout />}>
//           <Route path="/" element={<Welcome />} />
//           <Route path="/Home" element={<Homepage />} />
//       </Route>
//     </Routes>
//   )
// );

function App() {
  return(
    <Routes>
    <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />}/>
    </Route>
  </Routes>
  ); 


}

export default App;
