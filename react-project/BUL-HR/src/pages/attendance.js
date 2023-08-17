import React, { useState } from "react";
import Chart from '../common/chart';
import Content from "../common/content";
import "../css/attendance.css";
import "../css/nav.css";
import NavBar from '../common/NavBar';

export const Attendance = () => {
    const [isSelect, setIsSelect] = useState(false);

    const onClickHandler = (e) => {
        setIsSelect(!isSelect);
    }

    return (
        <Content>
            <NavBar>
                <div className="submenulist">
                    <div className={`submenu ${isSelect ? 'select' : ''}`} onClick={onClickHandler}>
                        <span>근태관리</span>
                        <img
                            src="/common/images/plus.svg"
                            alt=""
                            className="submenu-plus-icon menu-icon"
                        />
                        <img src="/common/images/minus.svg" alt="" className="submenu-minus-icon menu-icon"/>
                    </div>
                    <div className="dropmenu">
                        <ul>
                            <li>하위 메뉴</li>
                            <li>하위 메뉴</li>
                            <li>하위 메뉴</li>
                        </ul>
                    </div>
                </div>
            </NavBar>
            <div className="main">
                <div className="page-title">근태관리</div>
                <div className="current-time">2023/08/07(월) AM 09:00:21</div>
                <div className="work-time">
                    <div className="attendance-time page-config">
                        <h3>오늘 근무한 시간</h3>
                        <h2>{new Date().toLocaleTimeString()}</h2>
                        <div>
                            <button>출근</button><button>퇴근</button>
                        </div>
                    </div>
                    <div className="total-attendance-time page-config">
                        <h3>이번 주 근무</h3>
                        <Chart/>
                    </div>
                </div>
                <div className="attendance-info page-config">
                    <div className="work-history">
                        근무 내역 <br />
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: "normal",
                            }}
                        >
                            ???님의 근무내역입니다.
                        </span>
                    </div>
                    <div className="work-hostory-date">
                        &lt; 2023.08.01 ~ 2032.08.07 &gt;
                    </div>

                    <table className="attendance-table">
                        <thead>
                            <tr>
                                <th>일자</th>
                                <th>사원번호</th>
                                <th>부서</th>
                                <th>직급</th>
                                <th>이름</th>
                                <th>근무시간</th>
                                <th>초과근무시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Content>
    );
};

export default Attendance;
