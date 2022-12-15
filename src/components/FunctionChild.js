import React, { useState, useEffect } from "react";

const FunctionChild = () => {
  const [color, setColor] = useState("white");

  useEffect(() => {
    console.log("componentDidMount Child");

    return () => {
      console.log("componentWillUnmount Child");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate Child");
    return () => {
      console.log("componentWillUnmount Child");
    };
  }, [color]);

  const consoleRender = () => {
    console.log("render Child");
  };

  return (
    <div style={{ backgroundColor: color }}>
      {consoleRender()}
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Child의 State 변경
      </button>
      Child
    </div>
  );
};

export default FunctionChild;
