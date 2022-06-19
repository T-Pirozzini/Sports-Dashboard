import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from "./pages/Home"
import Divisions from "./pages/Divisions"

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />            
          <Route path="/divisions" element={<Divisions />} />
          {/* <Route path="/login"> */}
            {/* <Login /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
