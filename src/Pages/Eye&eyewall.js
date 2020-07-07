import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Eye_Eyewall = ({ setCurrentPage }) => {

    const [isToggled, setIsToggled] = useState(false)

    return (
        <SubContainer>
            <h3>Eye & Eyewall</h3>
            <ImageWrapper
                src={!isToggled ? ("eyewall_1") : ("eyewall_2")}
            />
            <div>
                <p
                    className="clickable"
                    onClick={() => setIsToggled(!isToggled)}
                >
                    {!isToggled ? ("Wire Frame Image") : ("Solid Image")} </p>
            </div>
            <ol>
                <li>Eye: Light winds, partly cloudy or clear skies. Average diameters 20-50 km</li>
                <li>Eyewall: Heaviest precipitation and strongest winds</li>
                <li>Spiraling winds in eyewall</li>
                <li>Sinking air</li>
            </ol>
            <p
                className="clickable"
                onClick={e => setCurrentPage("Main")}
            >
                Back to Menu</p>
        </SubContainer>
    );
}

export default Eye_Eyewall;