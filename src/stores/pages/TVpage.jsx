import React, { useState } from "react";
import { tvData } from "../data/tv";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Tvpage() {

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
          ? tvData : tvData.filter((j)=> selectedproduct.includes(j.brand))
  return (
    <>
    <Navbar />

    <div className="fullpage">
    <div className="pro-selected">
                  {tvData.map((phone) => (
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
        <div key={item.id} className="pagecard">

          <Link to={`/Tv/${item.id-1}`}>
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

export default Tvpage;
