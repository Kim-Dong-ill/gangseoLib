import React from "react";
import { Link } from "react-router-dom";
import TopMenuIcon from "../Icons/TopMenuIcon";
import SmoothLink from "./SmoothLink";

function DepthTopMenu() {
    return <div>TopMenu</div>;
}
function SubTopMenu() {
    return (
        <div className="TopMenuWrap">
            <SmoothLink to={"/"}>
                <div className="TopMenuHome">
                    <TopMenuIcon iconName="iconHome" />
                </div>
            </SmoothLink>
            <Link to="/libabout">
                <div className="TopMenu">
                    <TopMenuIcon iconName="iconMenu" />
                </div>
            </Link>
        </div>
    );
}

export { DepthTopMenu, SubTopMenu };
