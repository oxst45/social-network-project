import React from 'react';
import {ActionType, PostsDataType, ProfilePageType, StateType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    postsData: [
        {id: 1, message: 'Hello', likeCount: 12},
        {id: 2, message: 'Good morning', likeCount: 11}
    ],
    newPostText: "just a string"
}

export function ProfileReducer(state: ProfilePageType = initialState, action: ActionType) {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsDataType = {
                id: 7,
                message: state.newPostText,
                likeCount: 0
            }
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);

            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})