import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Inflow = ({ setCurrentPage }) => {

    const [sliderValue, setSliderValue] = useState(0)

    const handleOnChange = (e) => {
        setSliderValue(e.target.value)
    }

    return (
        <SubContainer>
            <h3>Inflow</h3>
            <div className="inflow-image-wrapper">
                <ImageWrapper />
                <div className="input-wrapper">
                    <i className="arrow up"></i>
                    <input type="range" orient="vertical" value={sliderValue} min="0" max="5" onChange={(e) => handleOnChange(e)} />
                    <i className="arrow down"></i>
                </div>
            </div>
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