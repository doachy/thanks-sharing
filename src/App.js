import './App.css';

function App() {
    return (
            <div class="wrapper">
                <header class="header">
                    <h1 class="title">감사나눔운동</h1>
                </header>
                <div class="profile box">
                    <div class="profile-image"></div>
                    <div class="profile-detail">
                        <p class="profile-name">홍길동</p>
                    </div>
                </div>
                <div class="status box">
                    <p class="status-day">오늘은 120일째 달성 중</p>
                    <div class="status-badges">
                        <p class="badge">배지1</p>
                        <p class="badge">배지2</p>
                        <p class="badge">배지3</p>
                    </div>
                </div>
                <div class="add-thanks box">+ 감사운동 추가</div>
                <div class="thanks-sharing box">
                    <p class="thanks">감사 운동1</p>
                    <p class="thanks">감사 운동2</p>
                    <p class="thanks">감사 운동3</p>
                </div>
            </div>
    );
}

export default App;