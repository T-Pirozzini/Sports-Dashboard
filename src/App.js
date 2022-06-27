import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages
import Home from "./pages/Home"
import Divisions from "./pages/Divisions"
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
            <Route path="/divisions" element={<Divisions />} />           
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
