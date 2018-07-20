import React, {Fragment} from "react";
import ACTIONS from '../redux/actions'

function TaskFilter (props) {
    return <div className="task-filter">
        <button onClick={ () => {
            const action = {
                type: ACTIONS.changeVisivility,
                filterName:  'completed'
            }
            props.dispatch(action);
        }}>Completed</button>
        <button onClick={ () => {
            const action = {
                type: ACTIONS.changeVisivility,
                filterName:  'uncompleted'
            }
            props.dispatch(action);
        }}>Uncompleted</button>
        <button onClick={ () => {
            const action = {
                type: ACTIONS.changeVisivility,
                filterName:  'all'
            }
            props.dispatch(action);
        }}>All</button>
    </div>
}


export default TaskFilter;


