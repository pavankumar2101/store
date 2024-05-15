import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Groceries from "./Pages/Goods/Groceries"
import Electronics from "./Pages/Electronics/Electronics";
import Fashion from "./Pages/Fashion/Fashion"
import { CartProvider } from "./Context/CartContext";
import UserCart from "./Pages/UserCart";
import Eslider from "./Pages/Sliders/Eslider"
import Fslider from "./Pages/Sliders/Fslider"
import Gslider from "./Pages/Sliders/Gslider";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <>
   
    <div className="App">
    
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Groceries" element={<Groceries />} />
            <Route path="/Electronics" element={<Electronics />} />
            <Route path="/Fashion" element={<Fashion />} />
            <Route path="/cart" element={<UserCart/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </CartProvider>
      </Router>
    </div>
   
    </>
  );
}

export default App;

// import React from 'react'
//  import Groceries from './Pages/Sliders/Groceries'
// import Eslider from "./Pages/Sliders/Eslider"
// import Fslider from "./Pages/Sliders/Fslider"
// const App = () => {
//   return (
//     <><div>
//       <Eslider/>
//       <Groceries/>
//       <Fslider/>
//       </div></>
    
//   )
// }

// export default App



