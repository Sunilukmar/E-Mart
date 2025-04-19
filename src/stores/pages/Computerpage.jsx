import React, { useState } from "react";
import { computerData } from "../data/computers";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Computerpage() {
  const [selectedproduct, setSelectedproduct] = useState([]);

  const companyHandler = (company) => {
    if (selectedproduct.includes(company)) {
      setSelectedproduct(selectedproduct.filter(item => item !== company));
    } else {
      setSelectedproduct([...selectedproduct, company]);
    }
  };

  // Get unique company names to show checkboxes
  const uniqueCompanies = [...new Set(computerData.map(item => item.company))];

  const filterproduct =
    selectedproduct.length === 0
      ? computerData
      : computerData.filter(item => selectedproduct.includes(item.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">

        {/* Checkboxes for filtering */}
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
              <Link to={`/computers/${item.id-1}`}>
                <div className="pageimg">
                  <img src={item.image} alt={`${item.company} ${item.model}`} />
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

export default Computerpage;
