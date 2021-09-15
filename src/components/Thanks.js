import React from 'react';

function Thanks() {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let day = today.getDay(); // 요일

    const thanks = localStorage.getItem(`${year}/${month}/${day}`);
    const parseThanks = JSON.parse(thanks);
    /* const thanks = {
		thanks1: '',
		thanks2: '',
		thanks3: '',
		thanks4: '',
		thanks5: '',
		/*
            <div className="thanks-sharing box">
                <p className="thanks">금일 점심 메뉴가 맛있음에 감사합니다.</p>
                <p className="thanks">하늘이 맑음에 감사합니다.</p>
                <p className="thanks">항상 잘 챙겨주시는 맞선임에게 감사합니다.</p>
                <p className="thanks">천감사 운동을 쉽게 할 수 있음에 감사합니다.</p>
                <p className="thanks">부사관학교에 전입 옴에 감사합니다.</p>
                <p className="thanks-time">2021/08/25</p>
            </div>
			
		*/

    console.log(parseThanks);
    return (
        <>
            <div className="thanks-sharing box">
                <p className="thanks">{parseThanks['thanks1']}</p>
                <p className="thanks">{parseThanks['thanks2']}</p>
                <p className="thanks">{parseThanks['thanks3']}</p>
                <p className="thanks">{parseThanks['thanks4']}</p>
                <p className="thanks">{parseThanks['thanks5']}</p>
                <p className="thanks-time">
                    {year}/{month}/{day}
                </p>
            </div>
        </>
    );
}

export default Thanks;