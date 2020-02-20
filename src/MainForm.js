import React from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

export default class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "", // required
      last: "", // required
      valueComments: "",
      checkbox: true,
      // will populate on Submit
      arr: []
    };
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
  }

  handleSubmitButton(e) {
    e.preventDefault();
    alert("Added object to array, click Reset to submit a new array");
    this.setState({ arr: this.state });
  }

  handleResetButton(e) {
    e.preventDefault();
    this.setState({ checkbox: false });
  }

  handleFirstName(e) {
    e.preventDefault();
    this.setState({ first: e.target.first });
  }

  handleLastName(e) {
    e.preventDefault();
    this.setState({ last: e.target.last });
  }

  handleComments(e) {
    e.preventDefault();
    this.setState({ valueComments: e.target.valueComments });
  }

  renderUI() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id="heading">
          <h1>Leave a Review</h1>
          <h2>Submit your review into our database</h2>
        </div>
        <TextField
          id="standard1"
          label="First"
          first={this.state.first}
          onChange={this.handleFirstName}
        />
        &nbsp;
        <TextField id="standard2" label="Last" onChange={this.handleLastName} />
        &nbsp;
        <br /> <br />
        <TextField
          id="outlined"
          label="Comments?"
          variant="outlined"
          value={this.state.value}
          onChange={this.handleComments}
        />
        <br />
        <br />
        <div className="dropDown">
          <InputLabel id="dropDown">Quantity ordered</InputLabel>
          <Select labelId="dropDown" id="demo-simple-select">
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </div>
        <br />
        <br />
        <div className="checkBox">
          <Checkbox id="box1" color="primary" checked={this.state.checkbox} />
          <label for="box1">Subscribe to our newsletter</label> <br />
          <Checkbox id="box2" color="primary" checked={this.state.checkbox} />
          <label for="box2">I Agree to the Terms of Service</label>
        </div>
        <br />
        <br />
        <div className="radioButtons">
          Will you return to shop with us? <br /> <br />
          <input type="radio" name="answer" value="yes" /> Yes <br />
          <input type="radio" name="answer" value="no" /> No
        </div>
        &nbsp;
        <div className="buttons">
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={this.handleSubmitButton}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="outlined"
            color="primary"
            onClick={this.handleResetButton}
          >
            Reset
          </Button>
        </div>
        &nbsp;
      </form>
    );
  }

  render() {
    return <div className="MainForm">{this.renderUI()}</div>;
  }
}
