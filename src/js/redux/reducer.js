import ACTIONS from './actions';

const VISIBILITY = {
    all: item => true,
    completed: item => (item === 'completed') ? true : false,
    uncompleted: item => (item !== 'completed') ? true : false,
} 

const INITIAL_STATE = {
    visibility: VISIBILITY.all,
    todoList: [
        {
            taskName: 111,
            completed: false
        },
        {
            taskName: 222,
            completed: false
        }

    ],
}

function reducer (state = undefined, action) {
    if (state === undefined) { return INITIAL_STATE }
    if (action.type === ACTIONS.removeTask) {
        return Object.assign({}, state, 
            { todoList: state.todoList.filter( (it, ind) =>  (ind !== action.taskId)  ) } );
    } else if (action.type === ACTIONS.toggleTask) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.visibility = state.visibility;
        newState.todoList[action.taskId].completed = !newState.todoList[action.taskId].completed;
        return newState;
    } else if (action.type === ACTIONS.addTask) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.visibility = state.visibility;
        newState.todoList = newState.todoList.concat({
            taskName: action.taskName,
            completed: false
        });
        return newState;
    } else if (action.type === ACTIONS.changeVisivility) {
        //console.log(action.filterName);
        //console.log(VISIBILITY.filterName);
        let newState = JSON.parse(JSON.stringify(state));
        newState.visibility = VISIBILITY[action.filterName];
        return newState;
    }
    return state;
}

export default reducer;