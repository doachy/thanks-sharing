import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to={'/main'}>
                <h1 className="title">감사나눔운동</h1>
            </Link>
            <p>육군부사관학교와 함께 하는 천감사운동</p>
        </header>
    );
}

export default Header;