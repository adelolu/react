import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);

        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch("https://fakestoreapi.com/products")
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   console.log("fetch:" + data);
    //   //set products into state
    //   // setProducts(data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  return (
    <>
      <h1>Fetching from an api</h1>
      {products.length === 0 ? (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      ) : (
        <div>
          {products.map((item, index) => (
            <div className="card" key={index}>
              <h1>Title:{item.title}</h1>
              <h3>Description:{item.description}</h3>
              <img
                style={{ height: "200px", width: "200px" }}
                src={item.image}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;

// import React, { useEffect, useState } from "react";

// const Product = () => {
//   const [show, SetShow] = useState(false);
//   const [input, setInput] = useState("");
//   //    useEffect( function, dependency)

//   useEffect(() => {
//     console.log("useeffect show");
//     alert(show);
//     console.log(localStorage.getItem("name"));
//     let detail = localStorage.getItem("name");
//   }, [show]);

//   useEffect(() => {
//     // console.log("useeffect input");
//     // alert(input);
//   }, [input]);

//   console.log("component has rendered");

//   function handleClick() {
//     console.log("button clicked");
//     localStorage.setItem("name", input);
//     SetShow(!show);
//   }

//   return (
//     <>
//       <h1>UseEffect</h1>
//       <button onClick={handleClick}> submit </button>
//       <input
//         value={input}
//         onChange={(e) => {
//           setInput(e.target.value);
//         }}
//         type="text"
//       />
//     </>
//   );
// };

// export default Product;
