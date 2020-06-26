import React, { useState, useEffect } from 'react';

const List = (tabData) => {

    const [innerTab, setInnerTab] = useState(0)
    console.log(tabData)

    return (
        <>
            <p key={"Header" + tabData.name}>{tabData.name}</p>
            <ol>
                {tabData.tabData.bullets[innerTab].map(bullet => (
                    <li>{bullet}</li>
                ))}
            </ol>
        </>
    );
}

export default List;
