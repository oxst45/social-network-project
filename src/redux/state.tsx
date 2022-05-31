import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
// const SEND_MESSAGE = "SEND-MESSAGE"

export let store: StoreType = {
    _state: {

        profilePage: {
            postsData: [
                {id: 1, message: 'Hello', likeCount: 12},
                {id: 2, message: 'Good morning', likeCount: 11}
            ],
            newPostText: "just a string"

        },
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Maria'},
                {id: 2, name: 'Elena'}
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'}
            ],
            newMessageText: "",
        },
        sidebarPage: {}
    },

    _callSubscriber(state: StateType) {
    },

    getState() {
        return this._state;
    },
    subscribe(observer: ObserverType) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.messagePage = DialogsReducer(this._state.messagePage, action);
        this._state.sidebarPage = SidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);


    }

}







export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void

    subscribe: (observer: ObserverType) => void
    dispatch: (action: ActionType) => void
}

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebarPage: SidebarType
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string | undefined
}
export type MessagePageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageText: string | undefined
}
export type SidebarType = {}
export type PostsDataType = {
    id: number
    message: string | undefined
    likeCount: number
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string | undefined
}

export type ObserverType = (state: StateType) => void

export type ActionType = {
    type: string
    newText?: string
    body?: string
}

// export const state: StateType = {
//
//     profilePage: {
//         postsData: [
//             {id: 1, message: 'Hello', likeCount: 12},
//             {id: 2, message: 'Good morning', likeCount: 11}
//         ],
//         newPostText: "just a string"
//
//     },
//     messagePage: {
//         dialogsData: [
//             {id: 1, name: 'Maria'},
//             {id: 2, name: 'Elena'}
//         ],
//         messagesData: [
//             {id: 1, message: 'Hello'},
//             {id: 2, message: 'How are you?'}
//         ]
//     },
//     sidebar: {}
// }



