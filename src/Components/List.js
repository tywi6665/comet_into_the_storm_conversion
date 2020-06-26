import React, { useState, useEffect } from 'react';

const List = (tabData) => {


    const [currentTab, setCurrentTab] = useState(0)
    const [currentInfo, setCurrentInfo] = useState([])
    console.log(tabData.tabData[0])
    useEffect(() => {
        setCurrentInfo(tabData.tabData[0])
    }, [tabData, currentInfo])

    return (
        <ol>
            {tabData.tabData[0].length ? (
                tabData.tabData[0].bullets.map(bullet => (
                    <li>{bullet}</li>
                ))
            ) : (
                    <p>Loading</p>
                )}
        </ol>
    );
}

export default List;
