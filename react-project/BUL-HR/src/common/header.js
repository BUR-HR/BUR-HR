import { Link } from "react-router-dom";
import "../css/section.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="menu">
                <Link to={"/"}>
                    <img
                        src="/common/images/logo.png"
                        className="logo"
                        alt="logo"
                    />
                </Link>
                <Link to={"/attendance"} className="first-link">
                    <span className="menu-item">
                        <img
                            src="/common/images/clock.png"
                            className="menu-image"
                            alt="attendance"
                        />
                        근태
                    </span>
                </Link>
                <Link>
                    <span className="menu-item">
                        <img
                            src="/common/images/human.png"
                            className="menu-image"
                            alt="human"
                        />
                        인사
                    </span>
                </Link>
                <Link>
                    <span className="menu-item">
                        <img
                            src="/common/images/sitemap.png"
                            className="menu-image"
                            alt="oranization"
                        />
                        조직
                    </span>
                </Link>
                <Link>
                    <span className="menu-item">
                        <img
                            src="/common/images/vacation.png"
                            className="menu-image"
                            alt="vacation"
                        />
                        휴가
                    </span>
                </Link>
                <Link>
                    <span className="menu-item">
                        <img
                            src="/common/images/bank.png"
                            className="menu-image"
                            alt="salary"
                        />
                        급여
                    </span>
                </Link>
                <Link>
                    <span className="menu-item">
                        <img
                            src="/common/images/calendar.png"
                            className="menu-image"
                            alt="calendar"
                        />
                        스케쥴
                    </span>
                </Link>
                <Link className="last-link">
                    <span>로그아웃</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
