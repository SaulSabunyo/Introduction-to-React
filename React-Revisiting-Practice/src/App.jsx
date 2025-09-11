import Day1 from './pages/day1page'
import Day2 from './pages/page2'
import './App.css';
import Page2 from './pages/page2';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Navbar';
function App(){
  let Myname = "Sabunyo Saul"
  return (
    
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Day1/>}/>
        <Route path='/page2' element={<Page2/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}
export default App;