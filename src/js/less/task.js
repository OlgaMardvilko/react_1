import React, {Fragment} from "react";

function Task (props) {
    return <Fragment>
        <h3 style={ { display: 'inline-block', width: '200px', backgroundColor: 'wheat', margin: '3px 0 3px 0' } }>{props.taskName}</h3>
        <button onClick={ () => { props.handleDone(props.data) } } style={ {display: 'inline-block', fontSize: '14px'} }>Done!</button>
        <br />
    </Fragment>
}

export default Task;