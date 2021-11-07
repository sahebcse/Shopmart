import React, { useState } from "react";
import star from "../star.png";

function Product() {
  const data = {
    name: "Redmi Note 7s",
    image: "https://m.media-amazon.com/images/I/31+L+LdZefL._SY300_SX300_.jpg",
    brand: "Redmi",
    category: "SmartPhone",
    price: 15000,
    description: "Slimmest & Lightest 5G Smartphone of 2021",
    rating: 3,
    stock: 10,
    reviews: [
      {
        user: "Some1",
        title: "Good Phone",
        content:
          "Something kjsdh ksjad sjkch skdjc kjsd ckj djvbdj bkj dkjfv dkjfv kjdb .  jksf kjsdh kjsd ckjs v.",
        rating: 3,
      },
      {
        user: "Some2",
        title: "Bad Phone",
        content:
          "Something kjsdh ksjad sjkch skdjc kjsd ckj djvbdj bkj dkjfv dkjfv kjdb .  jksf kjsdh kjsd ckjs v.",
        rating: 2,
      },
    ],
  };

  return (
    <div className="flex justify-start items-start w-screen h-screen">
      <div className="w-2/5 h-full flex justify-center items-center flex-col">
        <img className="w-full h-5/6" src={data.image}></img>
        <div className="w-full flex justify-center items-center">
          <button className="bg-yellow-700 px-6 py-2 rounded-sm text-white m-3 hover:bg-yellow-900">
            Buy Now
          </button>
          <button className="bg-blue-600 px-6 py-2 rounded-sm m-3 text-white hover:bg-blue-800">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="w-3/5 h-full mt-10 overflow-scroll overflow-x-hidden">
        <div className="p-8 border shadow-md w-full">
          <h1 className="text-sm opacity-70">{data.category}</h1>
          <h1 className="text-3xl">{data.name}</h1>
          <h1>{data.brand}</h1>
          <p className="mt-6 flex justify-items-start items-center">
            <img src={star} className="my-1 mr-1" width="20px" /> Rating:{" "}
            {data.rating}
            /5
          </p>
          <p className="text-xl font-semibold mt-2">
            Price: <span>{data.price}</span>
          </p>
          <h1 className="mt-6">{data.description}</h1>
          <h1 className="text-sm mt-2 text-green-500">
            {data.stock} left in stock
          </h1>
        </div>

        <div className="p-8 border shadow-md w-full mt-5">
          <h1 className="mb-3 text-2xl font-bold">Reviews</h1>
          <textarea
            className="min-w-full border-black border p-1 mt-5 h-11"
            placeholder="Title"
          ></textarea>
          <textarea
            className="min-w-full border-black border p-1 mt-5"
            placeholder="Content"
          ></textarea>
          <button className="mt-3 bg-blue-600 hover:bg-blue-900 px-6 py-2 rounded-sm text-white">
            Submit
          </button>

          {data.reviews.map((item) => {
            return (
              <div className="review mt-8">
                <h1 className="text-sm font-normal opacity-70">{item.user}</h1>
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <h1 className="flex justify-start items-center">
                  {" "}
                  <img
                    src={star}
                    className="my-1 mr-1"
                    width="20px"
                  /> Rating: {item.rating}/5
                </h1>
                <h1>{item.content}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
