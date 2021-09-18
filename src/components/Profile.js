import React, { useState } from 'react';
import { FcBusinessman } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Profile() {
    const [settingClick, setSettingClick] = useState(false);

    const toggleSetting = () => {
        setSettingClick(!settingClick);
    };

    return (
        <div className="profile box">
            <FcBusinessman className="profile-image" />
            <div className="profile-detail">
                <p className="profile-name">상병 홍길동</p>
                {settingClick ? (
                    <Link to={'/main'}>
                        <div onClick={toggleSetting} className="setting-btn">
                            메인
                        </div>
                    </Link>
                ) : (
                    <Link to={'/profile'}>
                        <div onClick={toggleSetting} className="setting-btn">
                            설정
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Profile;