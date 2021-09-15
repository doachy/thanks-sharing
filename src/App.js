import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Status from './components/Status';
import AddThanks from './components/AddThanks';
import Thanks from './components/Thanks';
import Setting from './components/Setting';
import { FcBusinessman } from 'react-icons/fc';

function App() {
    const [settingClick, setSettingClick] = useState(false);

    const toggleSetting = () => {
        setSettingClick(!settingClick);
    };

    return (
        <div className="wrapper">
            <Header />
            <div className="login box">
                <ul className="login-form">
                    <h1 className="login-title">LOGIN</h1>
                    <li>
                        <input className='login-input' placeholder='아이디'></input>
                    </li>

                    <li>
                        <input className='login-input' type="text" placeholder='비밀번호'></input>
                    </li>
                </ul>
                <div className="login-btn">로그인</div>
				<p>회원가입</p>
            </div>
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
                    <div className="thanks-sharing box">
                        <p className="thanks">금일 점심 메뉴가 맛있음에 감사합니다.</p>
                        <p className="thanks">하늘이 맑음에 감사합니다.</p>
                        <p className="thanks">항상 잘 챙겨주시는 맞선임에게 감사합니다.</p>
                        <p className="thanks">천감사 운동을 쉽게 할 수 있음에 감사합니다.</p>
                        <p className="thanks">부사관학교에 전입 옴에 감사합니다.</p>
                        <p className="thanks-time">2021/08/25</p>
                    </div>
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