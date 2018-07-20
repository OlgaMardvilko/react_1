import React, {Fragment} from "react";

function Task (props) {
    let className = (props.completed) ? "task-completed" : "task-uncompleted";
    return <div className="task-item">
        <input value={props.completed} className="task-item-checker" type="checkbox" onClick={ (ev) => {
            props.handleComplete(props.taskId)
            } } />
        <p type="text" className={className}>{props.taskName}</p>
        <button onClick={ () => { props.handleRemove(props.taskId) }  }>Remove</button>
    </div>
}

export default Task;