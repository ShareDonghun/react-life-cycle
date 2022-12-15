import React, { useState, useEffect } from "react";

const RefactoredClassChild = () => {
  const [color, setColor] = useState("white");

  const consoleRender = () => {
    console.log("render Child");
  };

  useEffect(() => {
    console.log("componentDidMount Child");

    return () => {
      console.log("componentWillUnmount Child");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate Child");
  }, [color]);

  return (
    <div style={{ backgroundColor: color }}>
      {consoleRender()}
      <button
        onClick={() => {
          setColor((prev) => (prev === "white" ? "red" : "white"));
        }}
      >
        Child의 State 변경
      </button>
      Child
    </div>
  );
};

export default RefactoredClassChild;
