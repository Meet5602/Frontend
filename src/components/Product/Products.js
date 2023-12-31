import React, { useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getProduct } from "../../actions/productActions.js";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard.js";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import {useAlert} from 'react-alert';
import MetaData from "../layout/MetaData.js";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

function Products() {
  const dispatch = useDispatch();
  const keyword = useParams().keyword;

  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings,setRatings] = useState(0);
  const {
    products,
    error,
    loading,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    console.log(e);
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price,category,ratings));
  }, [dispatch, keyword, currentPage, price,category,ratings,error]);

  let count = filteredProductsCount;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <MetaData title="PRODUCTS -- ECOMMERCE"/>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend">Rating Above</Typography>
              <Slider
                value={ratings}
                onChange={(e,newRating)=>{
                  console.log(newRating)
                  setRatings(newRating);
                }}
                aria-labelledby="continuos-slider"
                min={0}
                max={5}
                valueLabelDisplay="auto"
              />
            </fieldset>
          </div>

          <div className="paginationBox">
            {resultPerPage < count && (
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Products;
