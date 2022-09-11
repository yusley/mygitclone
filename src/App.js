import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Repositories from './Pages/Repositories';
import Profile from './Pages/Profile';
import MenuBar from './Components/MenuBar';


function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      <MenuBar/>

      <Routes>
        <Route exact path='/repositories' element={<Repositories/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
