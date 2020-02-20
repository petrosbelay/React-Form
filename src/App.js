import React from "react";
import "./styles.css";
import MainForm from "./MainForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MainForm />
      </div>
    );
  }
}
