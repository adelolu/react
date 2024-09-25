import React from "react";
import { useParams } from "react-router-dom";

const Number = () => {
  //   let temi = useParams();
  //   console.log(temi.num);
  //     const { num } = temi;

  const { num } = useParams();

  return <div>Number: {num} </div>;
};

export default Number;
