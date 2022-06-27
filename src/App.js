import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages
import Home from "./pages/Home"
import News from './pages/News'
import Divisions from "./pages/Divisions"
import Schedule from './pages/Schedule'
import Login from './pages/Login';
import Signup from './pages/Signup';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// hooks
import { useAuthContext } from './hooks/useAuthContext';

// styles
import './App.css';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />            
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/schedule" element={<Schedule />} />        
            <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />            
            <Route path="/signup" element={<Signup />} />  
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
