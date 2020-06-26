import React from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Rainbands = ({ setCurrentPage }) => {
    return (
        <SubContainer>
            <h3>Rainbands</h3>
            <ImageWrapper />
            <ol>
                <li>Rainbands typically are 3-30 miles wide and up tp 300 miles long</li>
            </ol>
            <ol>
                <li>Rainbands produce heavy rainfall, as much as 25 cm (10 in.) per hour</li>
                <li>RADAR image of a rainband</li>
            </ol>
            <p onClick={e => setCurrentPage("Main")}>Back to Menu</p>
        </SubContainer>
    );
}

export default Rainbands;