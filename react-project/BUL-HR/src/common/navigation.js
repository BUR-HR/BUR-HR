import React from "react";

const Navigation = ({ children }) => {
    return (
        <div className="nav">
            <div className="menu-title">
                <img
                    src="/common/images/menu.png"
                    alt="menu-icon"
                    className="menu-icon"
                />
                <span>메뉴</span>
            </div>
            {children}
        </div>
    );
};

export default Navigation;
