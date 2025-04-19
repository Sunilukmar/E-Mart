
import './App.css'

import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Landingpage from './stores/pages/Landingpage'
import Mobilepage from './stores/pages/Mobilepage'
import Computerpage from './stores/pages/Computerpage'
import Watchpage from './stores/pages/Watchpage'
import Menfashionpage from './stores/pages/MenFashion'
import Womenfashionpage from './stores/pages/Womenfashonpage'
import Furniturepage from './stores/pages/Furniturepage'
import Acpage from './stores/pages/Acpage'
import Tvpage from './stores/pages/TVpage'
import Spekarpage from './stores/pages/Spekarspage'
import Kitchenpage from './stores/pages/Kitchenpage'
import Fridgepage from './stores/pages/fridge'
import Bookspage from './stores/pages/bookspage'
import Mobilesinglepage from './stores/Singles/Mobilesingle'
import Computersinglepage from './stores/Singles/computersingle'
import Booksinglepage from './stores/Singles/Booksinglepage'
import Watchsinglepage from './stores/Singles/Watchsinglepage'
import Mensinglepage from './stores/Singles/Mensinglefashionpage'
import Womwnsinglepage from './stores/Singles/Womensinglepage'
import Acsinglepage from './stores/Singles/Acsinglepage'
import Furnituresinglepage from './stores/Singles/Furnituresinglepage'
import Fridgesinglepage from './stores/Singles/Fridgesinglepage'
import Kitchensinglepage from './stores/Singles/Kitchensinglepage'
import Spekarsinglepage from './stores/Singles/spekarsinglepage'
import Tvsinglepage from './stores/Singles/Tvsinglepage'
import UserCart from './stores/UserCart'


function App() {
      return(<>
                  <Routes>
                        <Route path='/' element={<Landingpage />} />
                        <Route path='/mobiles' element={<Mobilepage />} />
                        <Route path='/Computers' element={<Computerpage />} />
                        <Route path='/Watches' element={<Watchpage />} />
                        <Route path='/Men Fashion' element={<Menfashionpage />} />
                        <Route path='/Women Fashion' element={<Womenfashionpage />} />
                        <Route path='/Furniture' element={<Furniturepage />} />
                        <Route path='/Air Conditionar' element={<Acpage />} />
                        <Route path='/Books' element={<Bookspage />} />
                        <Route path='/Fridges' element={<Fridgepage />} />
                        <Route path='/Kitchen' element={<Kitchenpage />} />
                        <Route path='/Spekers' element={<Spekarpage />} />
                        <Route path='/Telivision' element={<Tvpage />} />
                        <Route path='/mobiles/:id' element={<Mobilesinglepage />} />
                        <Route path='/computers/:id' element={<Computersinglepage />} />
                        <Route path='/Books/:id' element={<Booksinglepage />} />
                        <Route path='/Watches/:id' element={<Watchsinglepage />} />
                        <Route path='/Men/:id' element={<Mensinglepage />} />
                        <Route path='/Women/:id' element={<Womwnsinglepage />} />
                        <Route path='/Ac/:id' element={<Acsinglepage />} />
                        <Route path='/Fur/:id' element={<Furnituresinglepage />} />
                        <Route path='/Fridge/:id' element={<Fridgesinglepage />} />
                        <Route path='/kitchen/:id' element={<Kitchensinglepage />} />
                        <Route path='/spekar/:id' element={<Spekarsinglepage />} />
                        <Route path='/Tv/:id' element={<Tvsinglepage />} />

                        <Route path='/cart' element={<UserCart/>} />
                        <Route path='/E-Mart' element={<Landingpage/>} />

                  
                  </Routes>
      </>)
}

export default App
