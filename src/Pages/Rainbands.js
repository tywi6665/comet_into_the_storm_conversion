import React from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Rainbands = ({ setCurrentPage }) => {
    return (
        <SubContainer>
            <h3>Rainbands</h3>
            <ImageWrapper />
            <ol>
                <li></li>
                <li></li>
                <li></li>
            </ol>
            <p onClick={e => setCurrentPage("Main")}>Back to Menu</p>
        </SubContainer>
    );
}

export default Rainbands;