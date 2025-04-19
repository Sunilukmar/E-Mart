import React, { useState } from "react";
import { acData } from "../data/ac";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Acpage() {
  const [selectedproduct, setSelectedproduct] = useState([]);

  // Handle checkbox toggle
  const companyHandler = (company) => {
    if (selectedproduct.includes(company)) {
      setSelectedproduct(selectedproduct.filter(item => item !== company));
    } else {
      setSelectedproduct([...selectedproduct, company]);
    }
  };

  // Extract unique company names to avoid repeated checkboxes
  const uniqueCompanies = [...new Set(acData.map(ac => ac.company))];

  // Filter products based on selected companies
  const filterproduct =
    selectedproduct.length === 0
      ? acData
      : acData.filter(ac => selectedproduct.includes(ac.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">

        {/* Filter Checkboxes */}
        <div className="pro-selected">
          {uniqueCompanies.map((company) => (
            <div className="pro-input" key={company}>
              <input
                type="checkbox"
                checked={selectedproduct.includes(company)}
                onChange={() => companyHandler(company)}
              />
              {company}
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="pagesection">
          {filterproduct.map((item) => (
            <div key={item.id} className="pagecard">
              <Link to={`/Ac/${item.id - 1}`}>
                <div className="pageimg">
                  <img
                    src={item.image}
                    alt={`${item.company} ${item.model}`}
                  />
                  <div className="imgtext">
                    <h3>{item.company}, {item.model}</h3>
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

export default Acpage;
