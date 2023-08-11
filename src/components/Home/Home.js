import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard.js";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { getProduct,clearErrors} from "../../actions/productActions.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js"
import {useAlert} from "react-alert"
function Home() {
  const alert = useAlert();
  const { loading, products, error} = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if(error){
      return alert.error(error);
      // dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch,error,alert]);
  return (
    loading?<Loader/>:<>
    <MetaData title="ECOMMERCE" />
    <div className="banner">
      <p>Welcome to Ecommerce</p>
      <h1>FIND AMAZING PRODUCTS BELOW</h1>

      <a href="#container">
        <button>
          Scroll
          <CgMouse />
        </button>
      </a>
    </div>
    <h2 className="homeHeading">Featured Products</h2>
    <div className="container" id="container">
      {products &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  </>
  );
}

export default Home;
