import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);

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
        //console.log(dataArray[0]) // array[0] means data of products and 1 for reviews
        // console.log(dataArray[0].value[number]) // number indicates ProductList(G,E,F)
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
      // Value gives the data list of "G"
      //value.cat_name gives the only list of "G"
    });
  });
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          {/* <h1>{key == "cat_name" && value}</h1> */}
          {/* <img src={key == "image" && value} alt="" /> */}
          {Object.entries(value).map(([key, value]) => (
            <>
              {/* <h4>{value.cart_name}</h4> */}
              {value.products &&
                value.products.map((item) => (
                  <div>
                    {/* <h2>{item.productName}</h2> */}
                    <img src={item.catImg} alt="" />
                    {/* <h3>{item.description}</h3> */}
                  </div>
                ))}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LandingPage;


 