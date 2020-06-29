import React, { useState } from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from '../Components/ImageWrapper';

const Inflow = ({ setCurrentPage }) => {

    const [sliderValue, setSliderValue] = useState(0)

    const handleOnChange = (e) => {
        if (e.target.getAttribute("data-arrow") === "up" && sliderValue < 5) {
            setSliderValue(sliderValue + 1)
        } else if (e.target.getAttribute("data-arrow") === "down" && sliderValue > 0) {
            setSliderValue(sliderValue - 1)
        } else { }
    }

    return (
        <SubContainer>
            <h3>Inflow</h3>
            <div className="inflow-image-wrapper">
                <ImageWrapper />
                <form className="input-wrapper">
                    <i className="arrow up" data-arrow="up" onClick={(e) => handleOnChange(e)}></i>
                    <input id="slider" type="range" orient="vertical" value={sliderValue} min="0" max="5" onChange={(e) => setSliderValue(e.target.value)} />
                    <i className="arrow down" data-arrow="down" onClick={(e) => handleOnChange(e)}></i>
                </form>
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