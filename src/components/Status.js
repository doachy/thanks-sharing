import React from 'react';

function Status() {
    return (
        <div className="status box">
            <p className="status-day">오늘은 120일째 달성 중</p>
            <div className="status-badges">
                <div className="badge">100</div>
                <div className="badge">200</div>
                <div className="badge">300</div>
            </div>
        </div>
    );
}

export default Status;