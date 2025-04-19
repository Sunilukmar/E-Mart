import React from "react";

import Mobiles from "./Mobile.jsx";

import Computer from "./computers.jsx";
import Watch from "./Watches.jsx";
import Menproduct from "./men.jsx";
import WomenProduct from "./women.jsx";
import Furniture from "./furniture.jsx";
import AC from "./AC.jsx";
import Books from "./books.jsx";
import Fridges from "./fridge.jsx";
import Kitchen from "./Kitchen.jsx";
import Spekars from "./spekars.jsx";
import Tv from "./tvs.jsx";


function Product (){
    return(
        <div>
            <Mobiles />
            <Computer />
            <Watch />
            <Menproduct />
            <WomenProduct />
            <Furniture />
            <AC />
            <Books />
            <Fridges />
            <Kitchen />
            <Spekars />
            <Tv />
        </div>
    )
}

export default Product