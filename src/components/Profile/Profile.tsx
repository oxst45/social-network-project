import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";

export function Profile(props: any) {
    return (
        <div>
                <ProfileInfo/>
                    <MyPostsContainer store={props.store}
                             />

        </div>
    );
}
