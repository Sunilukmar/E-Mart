

import React from "react";
import { booksData } from "../data/books";

function Books (){
    const fivemobiles=booksData.slice(0,5)

    return(
        <>
        <h2 className="heading">Books</h2>
        <div  className="mobilesec">
        { fivemobiles.map((item)=>{
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
export default Books