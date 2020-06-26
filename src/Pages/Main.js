import React from 'react';
import SubContainer from '../Components/Containers/Subcontainer';
import ImageWrapper from "../Components/ImageWrapper";

const Main = () => {
    return (
        <SubContainer>
            <h1>Inside the storm</h1>
            <ImageWrapper
                src={"screenshot"}
            />
        </SubContainer>
    );
}

export default Main;