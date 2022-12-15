import React from "react";

class ClassChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
    };
    console.log("constructor Child");
  }

  componentDidMount() {
    console.log("componentDidMount Child");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.color !== this.state.color) {
      console.log("componentDidUpdate Child");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Child");
  }

  consoleRender() {
    console.log("render Child");
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        {this.consoleRender()}
        <button
          onClick={() => {
            this.setState((prev) => {
              return { color: prev.color === "white" ? "red" : "white" };
            });
          }}
        >
          Child의 State 변경
        </button>
        Child
      </div>
    );
  }
}

export default ClassChild;
