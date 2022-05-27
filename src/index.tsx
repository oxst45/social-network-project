import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import {StateType} from "./redux/state";
// import {rerenderEntireTree} from "./render";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


export let rerenderEntireTree = (state: StateType) => {
    root.render(

        <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>

    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
