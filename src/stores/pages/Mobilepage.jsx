import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Mobilepage() {
  const [selectedproduct, setSelectedproduct] = useState([]);

  // Handle checkbox selection
  const companyHandler = (company) => {
    if (selectedproduct.includes(company)) {
      setSelectedproduct(selectedproduct.filter(item => item !== company));
    } else {
      setSelectedproduct([...selectedproduct, company]);
    }
  };

  // Get unique companies to avoid repeated checkboxes
  const uniqueCompanies = [...new Set(mobileData.map(phone => phone.company))];

  // Filter products based on selected companies
  const filterproduct =
    selectedproduct.length === 0
      ? mobileData
      : mobileData.filter((phone) => selectedproduct.includes(phone.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">

        {/* Filter checkboxes */}
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

        {/* Display products */}
        <div className="pagesection">
          {filterproduct.map((item) => (
            <div key={item.id} className="pagecard">
              <Link to={`/mobiles/${item.id - 1}`}>
                <div className="pageimg">
                  <img
                    src={item.image}
                    alt={`${item.company} ${item.model}`}
                  />
                  <div className="imgtext">
                    <h3>
                      {item.company}, {item.model}
                    </h3>
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

export default Mobilepage;
