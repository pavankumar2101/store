import React from 'react'
import "./HomeStyle.css";
import Navbar from '../../Components/Navbar/Navbar';
import Gslider from '../Sliders/Gslider';
import Eslider from "../Sliders/Eslider"
import Fslider from '../Sliders/Fslider';
//import LandingPage from './LandingPage';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Gslider/>
        <Eslider/>
        <Fslider/>   
      

        {/* <LandingPage/> */}
    </div>
  )
}

export default Home