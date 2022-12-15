import React, { useEffect, useState } from "react";
import Child from "./ClassChild";

const FunctionParent = () => {
  const [color, setColor] = useState("white");
  const [isChild, setIsChild] = useState(true);

  useEffect(() => {
    console.log("componentDidMount Parent");
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
          setColor("red");
        }}
      >
        Parent의 state 변경
      </button>
      <button
        onClick={() => {
          setIsChild(false);
        }}
      >
        Child 지우기
      </button>
      Parent
      {isChild && <Child />}
      {consoleRender()}
    </div>
  );
};

export default FunctionParent;
