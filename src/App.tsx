import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import './App.css';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Router, Routes, Route, Link} from "react-router-dom";
import {ActionType, StateType, store, StoreType} from "./redux/state";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: StateType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionType) => void
    store: any
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Routes>

                        <Route path="/profile/*"
                               element={<Profile store={props.store}

                                                 />}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer store={props.store}
                               />}/>

                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

