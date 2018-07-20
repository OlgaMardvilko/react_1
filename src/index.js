import React from "react";
import ReactDOM from "react-dom";
import './main.css';
import ToDo from "./js/full/todo";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './js/redux/reducer';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>
    ,
    document.getElementById('root')
);


