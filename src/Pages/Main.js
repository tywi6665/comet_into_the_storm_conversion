import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from "../Components/ImageWrapper";

const Main = ({ setCurrentPage }) => {

    const [hover, setHover] = useState("")
    const overlays = {
        inflow: ["inflow-1", "inflow-2"]
    }

    return (
        <SubContainer>
            <div className="img-overlay-container">
                <ImageWrapper
                    src={"mainmenu"}
                />
                <div className="overlay">
                    {hover ? (
                        hover.map(overlay => (
                            <div className={`${overlay} circle`}></div>
                        ))
                    ) : (null)}
                </div>
            </div>
            <ul className="menu-list">
                <li className="clickable"
                    onClick={e => setCurrentPage("Inflow")}
                    onMouseEnter={() => setHover(overlays.inflow)}
                    onMouseLeave={() => setHover("")}
                >Inflow</li>
                <li className="clickable"
                    onClick={e => setCurrentPage("Rainbands")}
                    onMouseEnter={() => setHover("rainbands")}
                    onMouseLeave={() => setHover("")}
                >Rainbands</li>
                <li className="clickable"
                    onClick={e => setCurrentPage("Eye&eyewall")}
                    onMouseEnter={() => setHover("eyewall")}
                    onMouseLeave={() => setHover("")}
                >Eye & Eyewall</li>
                <li className="clickable"
                    onClick={e => setCurrentPage("Outflow")}
                    onMouseEnter={() => setHover("outflow")}
                    onMouseLeave={() => setHover("")}
                >Outflow</li>
            </ul>
        </SubContainer>
    );
}

export default Main;