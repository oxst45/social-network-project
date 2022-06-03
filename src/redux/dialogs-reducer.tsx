import React from 'react';
import {ActionType, MessagePageType, PostsDataType, StateType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"

const initialState = {
    dialogsData: [
        {id: 1, name: 'Maria'},
        {id: 2, name: 'Elena'}
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'}
    ],
    newMessageText: "",
}

export function DialogsReducer(state: MessagePageType = initialState, action: ActionType) {
    let stateCopy;

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        stateCopy = {
            ...state,
            newMessageText: action.body
        };

        return stateCopy;

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageText;
        stateCopy = {
            ...state,
            newMessageText: "",
            messages: [...state.messagesData, {id: 17, message: body}]
        };


        return stateCopy;

    }
    return state;

}



export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (body: string) => {
    return  {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}
