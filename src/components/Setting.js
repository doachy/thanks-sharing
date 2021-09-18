import React from 'react';
import { Link } from 'react-router-dom';


function Setting() {
	
	
    return (
        <div className="setting box">
                    <label>군번 </label><input className="profile-input"></input>
                    <label>이름 </label><input className="profile-input"></input>
                    <label>소속 </label><input className="profile-input"></input>
                    <label>입대일 </label><input className="profile-input"></input>
                    <label>전역일 </label><input className="profile-input"></input>
                    <label>전입일 </label><input className="profile-input"></input>
					
			<Link to={'/main'}><div className="check" >
            확인
        </div></Link>
                </div>
    );
}

export default Setting;