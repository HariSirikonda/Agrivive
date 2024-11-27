import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/aboutus';
import Contacts from './components/contacts';
import Services from './components/services';
import Careers from './components/careers';
import Shop from './components/shop';
import Login from './components/login';
import ForgotPassword from './components/forgotPassword';
import Register from './components/register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login/forgotPassword" element={<ForgotPassword/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
