import React, { useState } from "react";
import { speakerData } from "../data/speaker";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Spekarpage() {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandToggle = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(item => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const uniqueBrands = [...new Set(speakerData.map(item => item.brand))];

  const filteredProducts = selectedBrands.length === 0
    ? speakerData
    : speakerData.filter(product => selectedBrands.includes(product.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {uniqueBrands.map((brand) => (
            <div className="pro-input" key={brand}>
              <input 
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
              />
              {brand}
            </div>
          ))}
        </div>
        
        <div className="pagesection">
          {filteredProducts.map(({ id, brand, model, image }) => (
            <div key={id} className="pagecard">
              <Link to={`/spekar/${id - 1}`}>
                <div className="pageimg">
                  <img src={image} alt={`${brand} ${model}`} />
                  <div className="imgtext">
                    <h3>{brand}, {model}</h3>
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

export default Spekarpage;
