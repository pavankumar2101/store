import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import "./GroceriesSlider.css";
//import Navbar from "../../Components/Navbar/Navbar";
// import "./Groceries.css";
//import { useCart } from "../../Context/CartContext";

const Eslider = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  //const { addToCart, cartItem } = useCart();
  // const cartItemCount = cartItem;
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const jsonData = await response.json();
        const dataArray = Object.entries(jsonData).map(([key, value]) => ({
          key,
          value,
        }));
        setData(dataArray[0].value[number]);
        console.log(dataArray[0].value[number]); 
      } catch (error) {
        console.error(error);
        setData([]);
      }
    };
    fetchData();
  }, [number]);
  //   console.log(data)
  Object.entries(data).map(([key, value]) => {
    Object.entries(value).map(([key, value]) => {
      console.log(value);
    });
  });

return(
  <div className="page">
  {Object.entries(data).map(([key, value]) => (
    <div style={{ width: "90vw"}}>
                    <h1>{key == "cat_name" && value}</h1>
      <Slider {...settings}>
        {Object.entries(value).map(
          ([key, value]) =>
            value.products &&
            value.products.map((item) => (
              <div
                className="slider"
                style={{
                  width: "100%",
                  display: "flex",
                  maxHeight: "100%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    src={item.catImg}
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))
        )}
      </Slider>
    </div>
  ))}
  </div>
)
};

export default Eslider;
