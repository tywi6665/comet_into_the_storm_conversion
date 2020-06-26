import React from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from "../Components/ImageWrapper";

const Main = ({ setCurrentPage }) => {
    return (
        <SubContainer>
            <h1>Inside the storm</h1>
            <ImageWrapper
                src={"screenshot"}
            />
            <ul>
                <li onClick={e => setCurrentPage("Inflow")}>Inflow</li>
                <li onClick={e => setCurrentPage("Rainbands")}>Rainbands</li>
                <li onClick={e => setCurrentPage("Eye&eyewall")}>Eye & Eyewall</li>
                <li onClick={e => setCurrentPage("Outflow")}>Outflow</li>
            </ul>
        </SubContainer>
    );
}

export default Main;