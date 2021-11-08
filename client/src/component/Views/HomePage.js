import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../api/index";
import ProductTile from "../Product/ProductTile";

export default function HomePage() {
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

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-8 flex justify-between items-center w-11/12">
        <div className="lg:w-1/3 w-1/5 h-1 bg-black animate-pulse"></div>
        <h1 className="uppercase lg:text-3xl text-xl font-bold font-serif">
          New Arrivals
        </h1>
        <div className="lg:w-1/3 w-1/5 h-1 bg-black animate-pulse"></div>
      </div>
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
