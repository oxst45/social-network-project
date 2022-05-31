import React from 'react';
import {ActionType, MessagePageType, PostsDataType, StateType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"

export function DialogsReducer(state: MessagePageType, action: ActionType) {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.body;

    } else if (action.type === SEND_MESSAGE) {

        let body = state.newMessageText;

        state.newMessageText = "";
        state.messagesData.push({id: 12, message: body});

    }
    return state;

}



export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (body: string) => {
    return  {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}
