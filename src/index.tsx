import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store, ReduxStoreType} from "./redux/redux-store";
import {StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import {rerenderEntireTree} from "./render";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// type rerenderEntireTreePropsType = {
//     state: StateType
//
// }
export let rerenderEntireTree = (state: StateType) => {
    root.render(
// <BrowserRouter>
    <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
    </Provider>
    // </BrowserRouter>
    );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
