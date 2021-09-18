import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="login box">
                <ul className="login-form">
                    <h1 className="login-title">LOGIN</h1>
                    <li>
                        <input className="login-input" placeholder="아이디"></input>
                    </li>

                    <li>
                        <input className="login-input" type="text" placeholder="비밀번호"></input>
                    </li>
                </ul>
                <Link className="login-btn" to={'/main'}><div >로그인</div></Link>
                <Link to={'/signup'}><p className="link-text">회원가입</p></Link>
            </div>
        </>
    );
}

export default Login;