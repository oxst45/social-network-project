import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export function Profile(props: any) {
    return (
        <div>
                <ProfileInfo/>
                    <MyPosts posts={props.posts}
                             addPost={props.addPost}
                             updateNewPostText = {props.updateNewPostText}/>

        </div>
    );
}
