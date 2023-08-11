import './App.css';
import React from "react"
import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/Footer/Footer.js'
import Home from './components/Home/Home.js'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom" 
import WebFont from "webfontloader"
import ProductDetails from "./components/Product/ProductDetails.js";
import Products from "./components/Product/Products.js";
import Search from "./components/Product/Search.js";

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    },[])
  })
  return (
    <Router>
      {/* we have to wrap it in browser router cause it is mandatory */}
      <Header/>  
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/product/:id" element={<ProductDetails/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:keyword" element={<Products/>} />

        <Route exact path="/Search" element={<Search/>}/>


      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
