import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import './App.css';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Router, Routes, Route, Link} from "react-router-dom";
import {ActionType, StateType, store, StoreType} from "./redux/state";

type AppPropsType = {
    state: StateType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionType) => void
    store: StoreType
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
                               element={<Profile posts={props.state.profilePage.postsData}
                                                 newPost = {props.state.profilePage.newPostText}
                                                 dispatch={props.dispatch}

                                                 />}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs messages={props.state.messagePage.messagesData}
                                                 dialogs={props.state.messagePage.dialogsData}
                                                 store={props.store}
                               />}/>

                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

