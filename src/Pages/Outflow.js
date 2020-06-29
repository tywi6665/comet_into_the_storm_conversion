import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Outflow = ({ setCurrentPage }) => {

    const [isToggled, setIsToggled] = useState(false)

    return (
        <SubContainer>
            <h3>Outflow</h3>
            <ImageWrapper />
            <div>
                <p
                    className="clickable"
                    onClick={() => setIsToggled(!isToggled)}
                >
                    {!isToggled ? ("Wire Frame Image") : ("Solid Image")} </p>
            </div>
            <ol>
                <li>Air flowing out from the center of the storm (Outflow)</li>
                <li>Air sinking into storm center, warming and suppressing clouds. Winds are calm</li>
                <li>Cirrostratus clouds capping the storm</li>
            </ol>
            <p
                className="clickable"
                onClick={e => setCurrentPage("Main")}
            >
                Back to Menu</p>
        </SubContainer>
    );
}

export default Outflow;