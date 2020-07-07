import React from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from "../Components/ImageWrapper";

const Main = ({ setCurrentPage }) => {
    return (
        <SubContainer>
            <ImageWrapper
                src={"mainmenu"}
            />
            <ul className="menu-list">
                <li className="clickable" onClick={e => setCurrentPage("Inflow")}>Inflow</li>
                <li className="clickable" onClick={e => setCurrentPage("Rainbands")}>Rainbands</li>
                <li className="clickable" onClick={e => setCurrentPage("Eye&eyewall")}>Eye & Eyewall</li>
                <li className="clickable" onClick={e => setCurrentPage("Outflow")}>Outflow</li>
            </ul>
        </SubContainer>
    );
}

export default Main;