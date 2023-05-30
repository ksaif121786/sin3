import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './component/layout/Header';
import Index from './component/Index';
import CategoryMenu from './component/CategoryMenu'
import Footer from './component/layout/Footer';
import ProductDetail from './component/ProductDetail';
import AboutPage from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Login from './component/Login';
import OtpVerify from './component/OtpVerify';
import ProfileSetup from './component/ProfileSetup';
import Success from './component/Success'




function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='category-menu' element={<CategoryMenu />} />
          <Route path='product-detail' element={<ProductDetail />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='otp-verify' element={<OtpVerify />} />
          <Route path='profile-setup' element={<ProfileSetup />} />
          <Route path='success' element={<Success />} />
        </Routes>
        <Footer />
      </BrowserRouter >

    </div>
  );
}

export default App;
