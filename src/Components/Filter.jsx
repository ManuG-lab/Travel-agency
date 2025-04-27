import React from "react";
import { useState } from "react";

function Filter({destinations, setFilteredDestinations}){
    const [maxPrice, setMaxPrice] = useState("");

    const handlePriceChange = (e) => {
      const value = e.target.value;
      setMaxPrice(value);
  
      if (value === "") {
        setFilteredDestinations(destinations); 
      } else {
        setFilteredDestinations(
          destinations.filter((dest) => dest.price <= Number(value))
        );
      }
    };
    return(
    <div className="flex justify-center mb-6">
        <input
          type="number"
          value={maxPrice}
          onChange={handlePriceChange}
          placeholder="Enter maximum price"
          className="p-2 border rounded w-64"
        />
    </div>
    )
}

export default Filter;