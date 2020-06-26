import React, { useState } from 'react';
import Container from './Components/Containers/Container';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import SubContainer from './Components/Containers/Subcontainer';
import List from './Components/List';
const data = require("./Data/data.json");

function App() {

  console.log(data)

  return (

    <Container>

      <Tabs>
        <TabList>
          {data.tabs.map(tab => (
            <Tab key={"Tab" + tab.name}>{tab.name}</Tab>
          ))}
        </TabList>
        {data.tabs.map(tab => (
          <TabPanel key={"TabPanel" + tab.name}>
            <SubContainer key={"SubContainer" + tab.name}>
              <List
                key={"List" + tab.name}
                tabData={tab}
              />
            </SubContainer>
          </TabPanel>
        ))}
      </Tabs>

    </Container>

  );
}

export default App;
