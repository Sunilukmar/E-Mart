
import React from "react";

import {Link} from 'react-router-dom'

function Navbar (){
    return(
     <>
            <div className="navmain">
                <Link to="/E-Mart"><div className="main"><h2>E-Mart</h2></div> </Link>
                <div className="serchbox">
                    <input type="text" placeholder="Search...." />
                </div>
                <div className="user">
                    <div className="userdetails">SIGNUP/SIGNIN</div>
                    <Link to="/cart"> <div className="cart">Cart</div> </Link>
                </div>
            </div>

            <div className="submenu">
                <ul>
                    <Link to="/mobiles"><li>Mobiles</li></Link> 
                    <Link to="/Computers"><li> Computers</li> </Link>
                    <Link to="/Watches"><li> Watches</li> </Link>
                    <Link to="/Men Fashion"><li>Men Fashion</li></Link>
                    <Link to="/Women Fashion"><li> Women Fashion</li> </Link>
                    <Link to="/Furniture"><li> Furniture</li> </Link>
                    <Link to="/Air Conditionar"><li> Air Conditionar</li></Link>
                    <Link to="/Books"><li>Books</li> </Link>
                    <Link to="/Fridges"><li>Fridges</li> </Link>
                    <Link to="/Kitchen"><li>Kitchen</li> </Link>
                    <Link to="/Spekers"><li>Spekers</li> </Link>
                    <Link to="/Telivision"><li>Telivision</li> </Link>
                    
                </ul>
            </div>
    </>   
    );

}

export default Navbar;