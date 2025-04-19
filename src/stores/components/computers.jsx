

import React from "react";

import { computerData } from "../data/computers";

function Computer (){
    const fivecomputer=computerData.slice(0,5)

    return(
     <>
      <h2 className="heading">Computers</h2>
      <div  className="mobilesec">
        { fivecomputer.map((item)=>{
                return(
                    <div className="imagebox">
                        <img  className="image"  src={item.image} alt="" />
                    </div>
                );
           })
        }
    </div>
     </>
    );

}
export default Computer