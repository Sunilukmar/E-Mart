import React, { useState } from "react";
import { watchData } from "../data/watch";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Watchpage() {

  const [selectedproduct,setSelectedproduct]= useState([])
    
     const companyHandler =(i)=>{
      if(selectedproduct.includes(i))
      {
        setSelectedproduct(selectedproduct.filter(item=>item!==i));
      }
      else{
        setSelectedproduct([...selectedproduct,i])
      }
     }
    
          const filterproduct = selectedproduct.length===0
          ? watchData : watchData.filter((j)=> selectedproduct.includes(j.brand))
  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="pro-selected">
                  {watchData.map((phone) => (
                    <div  className="pro-input"key={phone.brand}>
                      <input 
                        type="checkbox"
                        checked={selectedproduct.includes(phone.brand)}
                        onChange={() => companyHandler(phone.brand)}
                      />
                      {phone.brand}
                    </div>
                  ))}
              </div>
    <div className="pagesection">
      {filterproduct.map((item) => (
        <div key={item} className="pagecard">
          
          <Link to={`/Watches/${item.id-1}`}>
              <div className="pageimg">
                <img src={item.image} alt={`${item.company} ${item.model}`} />
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

export default Watchpage;
