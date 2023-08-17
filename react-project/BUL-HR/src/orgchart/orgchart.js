import React, { useState } from "react";
import '../css/orgchart.css'

export const Orgchart = () => {

     // 프로필 카드 뒤집기를 위한 상태 관리
    const [flippedCards, setFlippedCards] = useState([]);

    // 프로필 카드 뒤집기 함수
const flipCard = (index) => {
        setFlippedCards((prevFlippedCards) => {
            if (prevFlippedCards.includes(index)) {
                return prevFlippedCards.filter(cardIndex => cardIndex !== index);
            } else {
                return [...prevFlippedCards, index];
            }
        });
    };

    // ceo 프로필 카드 렌더링 함수 
    const cepProfileCard = (name,imageSrc) => {
        return (
            <div className="profile-card">
                <div className="front">
                    <img src={imageSrc} alt={`${name} Profile`}/>
                    <p>{name}</p><br />
                </div>
            </div>
        );
    };

    // 앞면 렌더링 함수
    const renderFront = (name, imageSrc, index) => (
        <div className={`front ${flippedCards.includes(index) ? "hidden" : ""}`}>
            <img src={imageSrc} alt={`${name} Profile`} />
            <p>{name}</p><br />
        </div>
    );

    // 뒷면 렌더링 함수
    const renderBack = (leader) => (
        <div className="back">
            <p style={{ fontWeight: 'bold', fontSize: '13px', transform: 'scaleX(-1)' }}>{leader.name}</p>
            <p>팀장</p>
            <hr />
            <p><span style={{ fontWeight: 'bold' }}>부서</span> : {leader.department}</p>
            <p><span style={{ fontWeight: 'bold' }}>직위</span> : {leader.position}</p>
            <p><span style={{ fontWeight: 'bold' }}>HP</span> : {leader.hp}</p>
            <p><span style={{ fontWeight: 'bold' }}>Email</span> : {leader.email}</p>
            <p><span style={{ fontWeight: 'bold' }}>입사날짜</span> : {leader.entryDate}</p>
        </div>
    );

        // 직원 프로필 카드 렌더링 함수
    const renderProfileCard = (name, department, position, hp, email, entryDate, imageSrc, index) => {
        const isFlipped = flippedCards.includes(index);
            
        return (    
            <div className={`node dept-node2 ${isFlipped ? "flipped" : ""}`}>
                <div className="profile-card1" onClick={() => flipCard(index)}>
                    <div className="card-inner">
                        {renderFront(name, imageSrc, index)}
                        {isFlipped && renderBack({ name, department, position, hp, email, entryDate })}
                    </div>
                </div>
            </div>
        );
    };

    const teamLeaders = [
        {
            name: "이수혁",
            department: "영업팀",
            position: "팀장",
            hp: "010-1234-5678",
            email: "sample@bubble.com",
            entryDate: "2017/05/13",
            imageSrc: "/common/images/1.png"
        },
        
        {
            name: "박선애",
            department: "영업팀",
            position: "팀장",
            hp: "010-1234-5678",
            email: "sample@bubble.com",
            entryDate: "2017/05/13",
            imageSrc: "/common/images/2.png"
        },

        {
            name: "조세라",
            department: "영업팀",
            position: "팀장",
            hp: "010-1234-5678",
            email: "sample@bubble.com",
            entryDate: "2017/05/13",
            imageSrc: "/common/images/4.png"
        },

        {
            name: "이제훈",
            department: "영업팀",
            position: "팀장",
            hp: "010-1234-5678",
            email: "sample@bubble.com",
            entryDate: "2017/05/13",
            imageSrc: "/common/images/5.png"
        },

        {
            name: "황재승",
            department: "영업팀",
            position: "팀장",
            hp: "010-1234-5678",
            email: "sample@bubble.com",
            entryDate: "2017/05/13",
            imageSrc: "/common/images/7.png"
        },

        {
            name: "이현민",
            department: "영업팀",
            position: "팀장",
            hp: "010-1234-5678",
            email: "sample@bubble.com",
            entryDate: "2017/05/13",
            imageSrc: "/common/images/8.png"
        },
    ];
    

    // 부서명 
    const DepartmentNodes = () => {
        const departments = [
            "영업팀",
            "마케팅팀",
            "현장팀",
            "고객응대팀",
            "인사팀",
            "총무팀"
        ];
    
        return (
            <div className="level">
                {departments.map((department, index) => (
                    <div key={index} className="node dept-node1">
                        <p>{department}</p>
                    </div>
                ))}
            </div>
        );
    };
    
    return (
        <div className="body">
            <section>
                <div className="title">
                    <h3>조직도</h3>
                    <hr className="line" />
                </div>
    
                {/* CEO 프로필 카드 */}
                <div className="org-chart">
                    {cepProfileCard("CEO", "/common/images/ceo.png")}
                    <div className="node ceo-node">
                    </div><br/>
                    <div className="line1" /> 
                    <DepartmentNodes />
                </div>  

                {/* 팀장 프로필 카드 */}
                <div className="team-leaders-container">
                    {teamLeaders.map((leader, index) => (
                        <div className={`node dept-node2 ${flippedCards.includes(index) ? "flipped" : ""}`} key={index}>
                            <div className="profile-card1" onClick={() => flipCard(index)}>
                                <div className="card-inner">
                                    {renderFront(`팀장 ${leader.name}`, leader.imageSrc, index)}
                                    {flippedCards.includes(index) && renderBack(leader)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Orgchart;