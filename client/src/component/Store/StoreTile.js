import React from "react";
import { useNavigate } from "react-router";

export default function StoreTile({ name, storeName, logo, id }) {
  const navigate = useNavigate();
  const openStore = () => {
    navigate(`/store/${id}`);
  };
  return (
    <div className="grid grid-cols-2 hover:shadow-2xl shadow-lg m-5">
      <div onClick={openStore} className="cursor-pointer">
        <h1 className="text-lg font-bold">{storeName}</h1>
        <h2 className="text-lg font-semibold">owned by {name}</h2>
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  );
}
