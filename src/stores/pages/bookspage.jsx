import React, { useState } from "react";
import { booksData } from "../data/books";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Bookspage() {

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
        ? booksData : booksData.filter((j)=> selectedproduct.includes(j.author))
  return (
    <>
      <Navbar />
      <div className="fullpage">
      <div className="pro-selected">
                {booksData.map((phone) => (
                  <div  className="pro-input"key={phone.author}>
                    <input 
                      type="checkbox"
                      checked={selectedproduct.includes(phone.author)}
                      onChange={() => companyHandler(phone.author)}
                    />
                    {phone.author}
                  </div>
                ))}
       </div>
      <div className="pagesection">
        {filterproduct.map((item) => (
          <div key={item.id} className="pagecard">
            <Link to={`/books/${item.id-1}`}>
              <div className="pageimg">
                <img src={item.image} alt={`Cover of the book by ${item.author}`} />
                <div className="imgtext">
                  <h3 style={{ color: "white" }}>A book by {item.author}</h3>
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

export default Bookspage;
