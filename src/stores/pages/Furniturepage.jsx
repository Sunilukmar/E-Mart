import React, { useState } from "react";
import { furnitureData } from "../data/furniture";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Furniturepage() {
  const [selectedproduct, setSelectedproduct] = useState([]);

  const companyHandler = (brand) => {
    if (selectedproduct.includes(brand)) {
      setSelectedproduct(selectedproduct.filter(item => item !== brand));
    } else {
      setSelectedproduct([...selectedproduct, brand]);
    }
  };

  // Filter furniture products based on selected brands
  const filterproduct =
    selectedproduct.length === 0
      ? furnitureData
      : furnitureData.filter(item => selectedproduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">

        {/* Filter Checkboxes */}
        <div className="pro-selected">
          {furnitureData.map((item) => (
            <div className="pro-input" key={item.brand}>
              <input
                type="checkbox"
                checked={selectedproduct.includes(item.brand)}
                onChange={() => companyHandler(item.brand)}
              />
              {item.brand}
            </div>
          ))}
        </div>

        {/* Filtered Product Cards */}
        <div className="pagesection">
          {filterproduct.map((item) => (
            <div key={item.id} className="pagecard">
              <Link to={`/Fur/${item.id-1}`}> {/* Pass the product id */}
                <div className="pageimg">
                  <img src={item.image} alt={`${item.brand} ${item.model}`} />
                  <div className="imgtext">
                    <h3>{item.brand}, {item.model}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Furniturepage;
