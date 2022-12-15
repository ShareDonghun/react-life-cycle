import React, { useState, useEffect } from "react";
import RefactoredClassChild from "./RefactoredClassChild";

const RefactoredClassParent = () => {
  const [color, setColor] = useState("white");
  const [isChild, setIsChild] = useState("true");

  useEffect(() => {
    console.log("componentDidMount Parent");

    return () => {
      console.log("componentWillUnmount Parent");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate Parent");
  }, [color]);

  const consoleRender = () => {
    console.log("render Parent");
  };

  return (
    <div style={{ backgroundColor: color }}>
      <button
        onClick={() => {
          setColor((prev) => (prev === "white" ? "red" : "white"));
        }}
      >
        Parent의 state 변경
      </button>
      <button
        onClick={() => {
          setIsChild((prev) => !prev);
        }}
      >
        Child 지우기
      </button>
      Parent
      {isChild && <RefactoredClassChild />}
      {consoleRender()}
    </div>
  );
};

export default RefactoredClassParent;
