import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home.jsx';
import Footer from './Components/Footer/Footer';
import DentalSpecialties from '../src/Pages/DentalSpecialties/DentalSpecialties.jsx'
import Us from './Pages/Us/Us.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DentalSpecialties' element={<DentalSpecialties/>}/>
        <Route path='/Us' element={<Us/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;