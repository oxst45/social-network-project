import React from 'react';
import {ActionType, PostsDataType, ProfilePageType, StateType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export function ProfileReducer(state: ProfilePageType, action: ActionType) {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: 7,
                message: state.newPostText,
                likeCount: 0
            }
            state.postsData.push(newPost);

            state.newPostText = "";
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
}

