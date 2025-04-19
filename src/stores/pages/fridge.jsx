import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Fridgepage() {
  const [selectedproduct, setSelectedproduct] = useState([]);

  const companyHandler = (brand) => {
    if (selectedproduct.includes(brand)) {
      setSelectedproduct(selectedproduct.filter(item => item !== brand));
    } else {
      setSelectedproduct([...selectedproduct, brand]);
    }
  };

  // Get unique brands for checkboxes
  const uniqueBrands = [...new Set(fridgeData.map(fridge => fridge.brand))];

  // Filter products based on selected brands
  const filterproduct =
    selectedproduct.length === 0
      ? fridgeData
      : fridgeData.filter(item => selectedproduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">

        {/* Filter Checkboxes */}
        <div className="pro-selected">
          {uniqueBrands.map((brand) => (
            <div className="pro-input" key={brand}>
              <input
                type="checkbox"
                checked={selectedproduct.includes(brand)}
                onChange={() => companyHandler(brand)}
              />
              {brand}
            </div>
          ))}
        </div>

        {/* Filtered Product Cards */}
        <div className="pagesection">
          {filterproduct.map((item) => (
            <div key={item.id} className="pagecard">
              <Link to={`/Fridge/${item.id-1}`}>
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

export default Fridgepage;
