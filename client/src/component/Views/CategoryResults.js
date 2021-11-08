import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../api/index";
import ProductTile from "../Product/ProductTile";

export default function CategoryResults() {
  const products = useSelector((state) => state.Products);
  console.log(products);

  /*return (
        <div className="grid md:grid-cols-7">
            <div></div>
            <div className="col-span-5 grid md:grid-cols-3 lg:grid-cols-4 gap-3 shadow-xl margin-2">
                {
                    products.map((product)=>(
                        <ProductTile name={product.name} price={product.price} brand={product.brand} image={product.image} id={product._id}/>
                    ))
                }
            </div>
            <div></div>
        </div>
    )*/

  if (products.length === 0) {
    return <div className="p-8">Nothing Here! Try another categories.</div>;
  } else {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="col-span-5 grid md:grid-cols-3 lg:grid-cols-4 gap-3 margin-2">
          {products.map((product) => (
            <ProductTile
              name={product.name}
              price={product.price}
              brand={product.brand}
              image={product.image}
              id={product._id}
            />
          ))}
        </div>
        <div></div>
      </div>
    );
  }
}
