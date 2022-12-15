import React from "react";
import ClassChild from "./ClassChild";

class ClassParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      isChild: true,
    };
    console.log("constructor Parent");
  }

  componentDidMount() {
    console.log("componentDidMount Parent");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.color !== this.state.color) {
      console.log("componentDidUpdate Parent");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Parent");
  }

  consoleRender() {
    console.log("render Parent");
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <button
          onClick={() => {
            this.setState((prev) => {
              return { color: prev.color === "white" ? "red" : "white" };
            });
          }}
        >
          Parent의 state 변경
        </button>
        <button
          onClick={() => {
            this.setState((prev) => {
              return { isChild: !prev.isChild };
            });
          }}
        >
          Child 지우기
        </button>
        Parent
        {this.state.isChild && <ClassChild />}
        {this.consoleRender()}
      </div>
    );
  }
}

export default ClassParent;
