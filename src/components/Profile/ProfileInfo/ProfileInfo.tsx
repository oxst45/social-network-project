import React from 'react';
import s from "./ProfileInfo.module.css";

function ProfileInfo(props: any) {
    return (
        <div>
            <div>
                <img src="" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                description
            </div>
        </div>
    );
}

export default ProfileInfo;