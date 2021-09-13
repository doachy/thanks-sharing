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
        <div className="wrapper">
            <Header />
            <div className="profile box">
				<FcBusinessman className="profile-image" />
                <div className="profile-detail">
                    <p className="profile-name">상병 홍길동</p>
                    {settingClick ? (
                        <div onClick={toggleSetting} className="setting-btn">
                            메인
                        </div>
                    ) : (
                        <div onClick={toggleSetting} className="setting-btn">
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