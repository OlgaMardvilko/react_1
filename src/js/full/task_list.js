import React, {Fragment} from "react";
import Task from '../less/task';
import { connect } from 'react-redux';
import ACTIONS from '../redux/actions'

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.props = props;
        console.log(this.props);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleRemove (id) {
        const action = {
            type: ACTIONS.removeTask,
            taskId: id 
        }
        this.props.dispatch(action);
    }
    handleComplete (id) {
        const action = {
            type: ACTIONS.toggleTask,
            taskId: id 
        }
        this.props.dispatch(action);
    }

    render () {
        const tasksList = this.props.todoList
        .filter(it => {return this.props.visibility(it)})
        .map( (it, ind) => 
            <Task taskName={it.taskName}
            completed={it.completed}
            handleRemove={this.handleRemove}
            handleComplete={this.handleComplete}
            taskId={ind}
            key={ind}
            />
        );
        return <div className="todos-list">
            {tasksList}
        </div>
    }

}

export default connect(state => state)(TaskList);