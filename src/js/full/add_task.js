import React, {Fragment} from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState( {value: ''} );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          add Task:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add Task" />
      </form>
    );
  }
}

export default AddTask;