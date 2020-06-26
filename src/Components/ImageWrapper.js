import React from 'react';

const ImageWrapper = ({ src }) => {

    return (
        <div className="image-wrapper">
            <img src={`./graphics/${src}.jpg`} alt="" />
        </div>
    );
}

export default ImageWrapper;