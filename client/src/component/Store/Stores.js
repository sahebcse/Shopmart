import React, { useEffect, useState } from "react";
import { getAllStores } from "../../api/index";
import StoreTile from "./StoreTile";

export default function Stores() {
  const [stores, setStores] = useState([]);
  useEffect(async () => {
    const { data } = await getAllStores();
    console.log(data);
    setStores(data);
  }, []);
  return (
    <div className="grid md:grid-cols-7">
      <div></div>
      <div className="col-span-5 grid md:grid-cols-2 gap-3 shadow-xl margin-2">
        {stores.map((store) => (
          <StoreTile
            id={store._id}
            storeName={store.storeName}
            logo={store.logo}
            name={store.name}
          />
        ))}
      </div>
    </div>
  );
}
