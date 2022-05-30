const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"
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
        sidebar: {}
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
        if (action.type === ADD_POST) {
            const newPost: PostsDataType = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = "";
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;

            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagePage.newMessageText = action.body;
            console.log(action.body)

            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {

            let body = this._state.messagePage.newMessageText;

            this._state.messagePage.newMessageText = "";
            this._state.messagePage.messagesData.push({id: 12, message: body});
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (body: string) => {
   return  {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}

export type ObserverType = (state: StateType) => void

export type ActionType = {
    type: string
    newText?: string
    body?: string
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
    sidebar: SidebarType
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



