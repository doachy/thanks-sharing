import React, { useState } from 'react';
import Header from '../components/Header';
import Status from '../components/Status';
import AddThanks from '../components/AddThanks';
import Thanks from '../components/Thanks';
import Setting from '../components/Setting';
import SignUp from '../components/SignUp';
import Profile from '../components/Profile';

function Home() {
    return (
        <>
            <Profile />
            <Status />
            <AddThanks />
            <Thanks />
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
        </>
    );
}

export default Home;