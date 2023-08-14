import React from "react";
import "../css/attendance.css";
import "../css/nav.css";
import Navigation from "../common/navigation";
import Content from "../common/content";

export const Attendance = () => {
    return (
        <Content>
            <Navigation></Navigation>
            <div className="main">
                <div className="attendance-title">근태관리</div>
                <div className="current-time">2023/08/07(월) AM 09:00:21</div>
                <div className="work-time">
                    <div className="attendance-time"></div>
                    <div className="total-attendance-time"></div>
                </div>
                <div className="attendance-info">
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
