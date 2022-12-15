import React from "react";
import "./App.css";

import ClassParent from "./components/ClassParent";
import FunctionParent from "./components/FunctionParent";
import RefactoredClassParent from "./components/RefactoredClassParent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main">
        Root
        {/* <ClassParent /> */}
        {/* <FunctionParent /> */}
        <RefactoredClassParent />
      </div>
    );
  }
}

export default App;
