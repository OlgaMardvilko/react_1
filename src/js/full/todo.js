import React, { Fragment } from 'react';
import AddTask from './add_task';
import TaskList from './task_list';
import TaskFilter from '../less/task_filter';
import ACTIONS from '../redux/actions';
import { connect } from 'react-redux';




class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};

    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (value) {
        const action = {
            type: ACTIONS.addTask,
            taskName: value
        }
        this.props.dispatch(action);
    }
    render() {
        return <Fragment>
            <AddTask handleSubmit={this.handleSubmit} />
            <TaskList />
            <TaskFilter dispatch={this.props.dispatch} />
        </Fragment>
    }
}


export default connect(state => state)(ToDo);

