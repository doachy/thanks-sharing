import React, { useState } from 'react';

function AddThanks() {
    const [inputs, setInputs] = useState({
        thanks1: '',
        thanks2: '',
        thanks3: '',
        thanks4: '',
        thanks5: '',
    });

    const { thanks1, thanks2, thanks3, thanks4, thanks5 } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
		localStorage.setItem(`${year}/${month}/${day}`, JSON.stringify(inputs));
        setInputs({
            thanks1: '',
            thanks2: '',
            thanks3: '',
            thanks4: '',
            thanks5: '',
        });
		handleClick();
    };

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let day = today.getDay(); // 요일

    //document.write(year + '/' + month + '/' + date);

    return click ? (
        <div className="add-thanks-input box">
            <input
                type="text"
                name="thanks1"
                onChange={onChange}
                maxLength={200}
                value={thanks1}
                placeholder="ex/ 1. 날씨가 맑음에 감사합니다."
                className="thanks-input"
            ></input>
            <input
                type="text"
                name="thanks2"
                onChange={onChange}
                maxLength={200}
                value={thanks2}
                placeholder="ex/ 2.맞선임이 친절함에 감사합니다."
                className="thanks-input"
            ></input>
            <input
                type="text"
                name="thanks3"
                onChange={onChange}
                maxLength={200}
                value={thanks3}
                placeholder="ex/ 3.금일 점심 식사가 맛있음에 감사합니다."
                className="thanks-input"
            ></input>
            <input
                type="text"
                name="thanks4"
                onChange={onChange}
                maxLength={200}
                value={thanks4}
                placeholder="ex/ 4.항상 저를 걱정해주시는 부모님께 감사합니다."
                className="thanks-input"
            ></input>
            <input
                type="text"
                name="thanks5"
                onChange={onChange}
                maxLength={200}
                value={thanks5}
                placeholder="ex/ 5.여자친구에게 감사합니다."
                className="thanks-input"
            ></input>
            <div className="thanks-input-btn-box">
                <div className="thanks-input-btn" onClick={onReset}>
                    추가하기
                </div>
                <div className="thanks-input-btn" onClick={handleClick}>
                    취소
                </div>
            </div>
        </div>
    ) : (
        <div className="add-thanks box" onClick={handleClick}>
            + 감사운동 추가
        </div>
    );
}

export default AddThanks;