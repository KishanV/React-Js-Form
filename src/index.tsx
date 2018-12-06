import './index.scss';
import {Index} from "./App";
import ReactDOM = require("react-dom");
import React = require("react");
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    selectedLevel:(state = 1, action:any) => {
        return (action.selectedLevel === undefined ? state : action.selectedLevel);
    },
    selectedStage:(state = 1, action:any) => {
        return (action.selectedStage === undefined ? state : action.selectedStage);
    },
    selectedSquare:(state = 1, action:any) => {
        return (action.selectedSquare === undefined ? state : action.selectedSquare);
    }
});

const store = createStore(reducer);

window.oncontextmenu = (e:MouseEvent) => {
    return e.target instanceof HTMLInputElement && e.target.type == 'text';
};

const appElm = document.createElement('div');
appElm.classList.add('Container');
document.body.appendChild(appElm);

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    appElm
);


