import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { searchProducts } from "../../api";

export default function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  useEffect(async () => {
    const { data } = await searchProducts(query);
    setResults(data);
  }, [query]);

  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid md:grid-cols-7">
      <div></div>
      <div className="col-span-5 grid  gap-3">
        {results.map((result) => (
          <div
            onClick={() => handleClick(result._id)}
            className="shadow-xl cursor-pointer m-2 p-2 grid grid-cols-3"
          >
            <div className="">
              <img src={result.image} />
            </div>
            <div className="col-span-2 ml-3 mt-3 lg:mt-14">
              <p className="font-semibold text-lg">{result.name}</p>
              <h2 className="text-lg text-gray-400 cursor-pointer">
                {result.brand}
              </h2>
              <p>₹{result.price}</p>
              <p className="font-thin">{result.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
