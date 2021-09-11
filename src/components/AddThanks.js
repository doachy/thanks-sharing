import React, { useState } from 'react';

function AddThanks() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return click ? (
        <div class="add-thanks-input box">
            <input placeholder="ex/ 1. 날씨가 맑음에 감사합니다." clos="50" rows="10" class="thanks-input"></input>
            <input placeholder="ex/ 2.맞선임이 친절함에 감사합니다." clos="50" rows="10" class="thanks-input"></input>
            <input placeholder="ex/ 3.금일 점심 식사가 맛있음에 감사합니다." clos="50" rows="10" class="thanks-input"></input>
            <input placeholder="ex/ 4.항상 저를 걱정해주시는 부모님께 감사합니다." clos="50" rows="10" class="thanks-input"></input>
            <input placeholder="ex/ 5.여자친구에게 감사합니다." clos="50" rows="10" class="thanks-input"></input>
            <div class="thanks-input-btn-box">
                <div class="thanks-input-btn" onClick={handleClick}>
                    추가하기
                </div>
                <div class="thanks-input-btn" onClick={handleClick}>
                    취소
                </div>
            </div>
        </div>
    ) : (
        <div class="add-thanks box" onClick={handleClick}>
            + 감사운동 추가
        </div>
    );
}

export default AddThanks;