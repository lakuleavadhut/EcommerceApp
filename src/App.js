import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/confirm' element={<Checkout/>}/>
      </Routes>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </Router>
  </div>;
};

export default App;
