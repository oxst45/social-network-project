import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";



export function MyPostsContainer(props: any) {
const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onChangePostHandler = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div>
            <MyPosts
                updateNewPostText={onChangePostHandler}
                addPost={addPost}
                posts={state.profilePage.postsData}
                newPostText={state.profilePage.newPostText}
            />
        </div>
    );
}
