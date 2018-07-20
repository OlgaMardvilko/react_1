import React, {Fragment} from "react";

class AddTask extends React.Component {
  makeTask  (text) {
    return {
      taskName: text,
      completed: false
    }
  }

  constructor(props) {
    super(props);
    this.state = {value: ''};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleReset() {
    this.setState({value: ''});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState( {value: ''} );
    this.props.handleSubmit(this.state.value);
  }

  render() {
    return (
      <form id="toolBar" className="tool-bar" onSubmit={this.handleSubmit}>
        <label>
          add Task:
          <input type="text" value={this.state.value} onChange={this.handleChange} required/>
          <button type="submit">Add Task</button>
          <button type="reset" onClick={this.handleReset}>Clear</button>
        </label>
      </form>
    );
  }
}

export default AddTask;