import React, { useState, useEffect } from 'react';
import Container from './Components/Containers/Container';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import SubContainer from './Components/Containers/Subcontainer';
import List from './Components/List';
const data = require("./Data/data.json");

function App() {

  const [currentTab, setCurrentTab] = useState(0)
  const [currentInfo, setCurrentInfo] = useState([])

  return (

    <Container>

      <Tabs>
        <TabList>
          {data.data.map(d => (
            <Tab key={"Tab" + d.tab}>{d.tab}</Tab>
          ))}
        </TabList>
        {data.data.map(d => (
          <TabPanel key={"TabPanel" + d.tab}>
            <SubContainer key={"SubContainer" + d.tab}>
              <p key={"Header" + d.tab}>{d.tab}</p>
              {d.imgs.map(img => (
                <ol key={"List" + img}>
                  {img.bullets.map(bullet => (
                    <li key={"ListItem" + bullet}>{bullet}</li>
                  ))}
                </ol>
              ))}
              {/* <List
                tabData={d.imgs}
              /> */}
            </SubContainer>
          </TabPanel>
        ))}
      </Tabs>

    </Container>

  );
}

export default App;
