import React from "react";
import { useNavigate } from "react-router";
import { CursorClickIcon } from "@heroicons/react/outline";

export default function ProductTile({ name, image, brand, price, id }) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="shadow-sm grid transition-all duration-500 justify-items-center hover:shadow-2xl bg-gray">
      <img onClick={handleClick} className="h-64 w-64" src={image} />
      <h2
        onClick={handleClick}
        className="text-lg text-gray-400 cursor-pointer"
      >
        {brand}
      </h2>
      <h3 onClick={handleClick} className="cursor-pointer">
        {name}
      </h3>
      <p className="text-2xl ">₹{price}</p>
      <CursorClickIcon className="h-6 w-6 cursor-pointer font-light" />
    </div>
  );
}
