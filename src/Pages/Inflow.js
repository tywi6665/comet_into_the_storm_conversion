import React from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Inflow = ({ setCurrentPage }) => {
    return (
        <SubContainer>
            <h3>Inflow</h3>
            <ImageWrapper />
            <ol>
                <li>Air rising, forming thunderstorms</li>
                <li>Warm humid air flows inward, speeding up as it approaches the eyewall</li>
                <li>Winds spiral in the eyewall</li>
            </ol>
            <p
                className="clickable"
                onClick={e => setCurrentPage("Main")}
            >
                Back to Menu</p>
        </SubContainer>
    );
}

export default Inflow;