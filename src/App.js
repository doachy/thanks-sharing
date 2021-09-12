import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Status from './components/Status';
import AddThanks from './components/AddThanks';
import Thanks from './components/Thanks';
import Setting from './components/Setting';
import { FcBusinessman } from "react-icons/fc";

function App() {
    const [settingClick, setSettingClick] = useState(false);

    const toggleSetting = () => {
        setSettingClick(!settingClick);
    };

    return (
        <div class="wrapper">
            <Header />
            <div class="profile box">
				<FcBusinessman class="profile-image" />
                <div class="profile-detail">
                    <p class="profile-name">상병 홍길동</p>
                    {settingClick ? (
                        <div onClick={toggleSetting} class="setting-btn">
                            메인
                        </div>
                    ) : (
                        <div onClick={toggleSetting} class="setting-btn">
                            설정
                        </div>
                    )}
                </div>
            </div>
            {settingClick ? (
                <Setting />
            ) : (
                <>
                    <Status />
                    <AddThanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                    <Thanks />
                </>
            )}
        </div>
    );
}

export default App;