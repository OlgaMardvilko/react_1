import React, { Fragment } from 'react';
import AddTask from './add_task';
import Task from '../less/task';


class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
    
        this.handleDone = this.handleDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDone (value) {
        let temporaryTasksList = this.state.tasks;
        temporaryTasksList.splice(value, 1);
        this.setState({tasks: temporaryTasksList});
    }
    handleSubmit (value) {
        this.setState({tasks: [...this.state.tasks, value]});
    }
    getTasksList() {
        let idGenerator = 0;
        return this.tasksList = this.state.tasks.map( it => <Task taskName={it} data = { idGenerator.toString() }
        key={ (idGenerator++).toString()}
        handleDone={this.handleDone}/> );
    }
    render() {
        return <Fragment>
            <AddTask handleSubmit={this.handleSubmit} />
            <Fragment>
                {this.getTasksList()}
            </Fragment>
        </Fragment>
    }
}

export default ToDo;

