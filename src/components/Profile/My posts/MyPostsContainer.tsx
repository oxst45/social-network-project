import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/state";


// export function MyPostsContainer(props: any) {
// const state = props.store.getState();
//
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     const onChangePostHandler = (text: string) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }
//     return (
//         <div>
//             <MyPosts
//                 updateNewPostText={onChangePostHandler}
//                 addPost={addPost}
//                 posts={state.profilePage.postsData}
//                 newPostText={state.profilePage.newPostText}
//             />
//         </div>
//     );
// }
const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

type MapDispatchToPropsType = (ActionCreator: { type: string }) => {}
const mapDispatchToProps = (dispatch: MapDispatchToPropsType) => {
    return {
        updateNewPostText: (text: string) => {dispatch(updateNewPostTextActionCreator(text));},
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);