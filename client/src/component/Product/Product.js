import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import star from "../../star.png";
import { useNavigate } from "react-router";

import * as toxicity from "@tensorflow-models/toxicity";
import "@tensorflow/tfjs";
import { addReview } from "../../api/index";
import { getAProduct, addToCart } from "../../api";

function Product() {
  const navigate = useNavigate();
  const params = useParams();
  const products = useSelector((state) => state.Products);
  const data=products.find((item)=>item._id==params.id)
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log("this is user", user);
  const [reviewTitle, setReviewTitle] = useState("");
  const [comment, setComment] = useState("");
  const [model, setModel] = useState(null);

  const commentChange = (e) => {
    setComment(e.target.value);
  };

  const reviewTitleChange = (e) => {
    setReviewTitle(e.target.value);
  };

  const submitReview = async (e) => {
    e.preventDefault();
    console.log(comment);
    if (comment) {
      if (model) {
        await model.classify(comment).then((predictions) => {
          console.log(predictions);
          var result = 0;
          for (let i = 0; i < predictions.length; i++) {
            if (predictions[i].results[0].match === true) {
              result += 1;
            }
          }
          console.log(result);
          if (result === 0) {
            const rdata = {
              title: reviewTitle,
              content: comment,
              rating: 3,
              userId: user.result._id,
              productId: params.id,
            };
            const { data } = addReview(rdata);
            alert("Review added successfully, please refresh to see");
            console.log("Comment added");
          } else if (result === 1) {
            const rdata = {
              title: reviewTitle,
              content: comment,
              rating: 3,
              user: user.result._id,
            };
            alert("Please refrain from being toxic the next time");
            const { data } = addReview(rdata);
          } else {
            alert("Comment has been removed due to being toxic");
          }
        });
      }
    }
  };

  useEffect(() => {
    toxicity.load(0.8).then((mod) => setModel(mod));
    const temp = products.find((product) => product._id == params.id);
    if (temp) {
      setData(temp);
    } else {
      fillOne();
    }
  }, []);

  const fillOne = async () => {
    try {
      const res = await getAProduct(params.id);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDirectBuy = () => {
    navigate("/checkout", {
      state: { shoppingCart: [data], total: data?.price , isCart:false},
    });
  };

  const handleAddToCart = () => {
    addToCart({ id: data?._id, userId: user?.result?._id });
  };

  return (
    <div className="flex justify-start flex-col items-start w-screen md:h-screen md:flex-row">
      <div className="w-full h-full flex justify-center items-center flex-col md:w-2/5">
        <img className="w-full h-5/6 object-contain" src={data?.image}></img>
        <div className="w-full flex justify-center items-center">
          {user ? (
            <div>
              <button
                onClick={handleDirectBuy}
                className="bg-yellow-700 px-6 py-2 rounded-sm text-white m-3 hover:bg-yellow-900"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 px-6 py-2 rounded-sm m-3 text-white hover:bg-blue-800"
              >
                Add To Cart
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/signIn")}
              className="bg-yellow-600 px-6 py-2 rounded-sm m-3 text-white hover:bg-yellow-800"
            >
              Login to Continue
            </button>
          )}
        </div>
      </div>
      <div className="md:w-3/5 w-full md:h-full mt-10 overflow-hidden overflow-x-hidden md:overflow-x-hidden md:overflow-scroll ">
        <div className="p-8 border shadow-md w-full">
          <h1 className="text-sm opacity-70">{data?.category}</h1>
          <h1 className="text-3xl">{data?.name}</h1>
          <h1>{data?.brand}</h1>
          <p className="mt-6 flex justify-items-start items-center">
            <img src={star} className="my-1 mr-1" width="20px" /> Rating:{" "}
            {data?.rating}
            /5
          </p>
          <p className="text-xl font-semibold mt-2">
            Price: <span>{data?.price}</span>
          </p>
          <h1 className="mt-6">{data?.description}</h1>
          <h1 className="text-sm mt-2 text-green-500">
            {data?.stock} left in stock
          </h1>
        </div>

        <div className="p-8 border shadow-md w-full mt-5">
          <h1 className="mb-3 text-2xl font-bold">Reviews</h1>
          <textarea
            onChange={reviewTitleChange}
            className="min-w-full border-black border p-1 mt-5 h-11"
            placeholder="Title"
          ></textarea>
          <textarea
            onChange={commentChange}
            className="min-w-full border-black border p-1 mt-5"
            placeholder="Content"
          ></textarea>
          {user && (
            <button
              onClick={submitReview}
              className="mt-3 bg-blue-600 hover:bg-blue-900 px-6 py-2 rounded-sm text-white"
            >
              Submit
            </button>
          )}

          {data?.reviews &&
            data?.reviews.map((item) => {
              return (
                <div className="review mt-8">
                  <h1 className="text-sm font-normal opacity-70">
                    {item.user}
                  </h1>
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <h1 className="flex justify-start items-center">
                    {" "}
                    <img src={star} className="my-1 mr-1" width="20px" />{" "}
                    Rating: {item.rating}/5
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

/*
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
  }; */
