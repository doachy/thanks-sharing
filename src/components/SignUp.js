import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
            <div className="login box">
                <ul className="login-form">
                    <h1 className="login-title">SIGN UP</h1>
                    <li>
                        <input className="login-input" placeholder="이름"></input>
                    </li>

                    <li>
                        <input className="login-input" type="text" placeholder="군번"></input>
                    </li>
                    <li>
                        <input className="login-input" type="text" placeholder="소속"></input>
                    </li>
                    <li>
                        <input className="login-input" type="text" placeholder="입대일"></input>
                    </li>
                    <li>
                        <input className="login-input" type="text" placeholder="전역일"></input>
                    </li>
                    <li>
                        <input className="login-input" type="text" placeholder="전입일"></input>
                    </li>
                    <li>
                        <input className="login-input" type="text" placeholder="아이디"></input>
                    </li>
                    <li>
                        <input className="login-input" type="text" placeholder="비밀번호"></input>
                    </li>
                    <li>
                        <input
                            className="login-input"
                            type="text"
                            placeholder="비밀번호 확인"
                        ></input>
                    </li>
                </ul>
                <Link className="login-btn" to={'/'}>
                    <div>회원가입</div>
                </Link>
            </div>
        </>
    );
}

export default SignUp;