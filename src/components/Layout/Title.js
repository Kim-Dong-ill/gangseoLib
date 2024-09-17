import React from "react";

function Title({ children }) {
    return <div className="TitleWrpa">{children}</div>;
}
function SubTitle({ children }) {
    return <div className="subTitleWrpa">{children}</div>;
}

export { SubTitle, Title };
