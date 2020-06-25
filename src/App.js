import React from 'react';
import Container from './Components/Containers/Container';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import SubContainer from './Components/Containers/Subcontainer';

function App() {
  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>Inflow</Tab>
          <Tab>Rainbands</Tab>
          <Tab>Eye & Eyewall</Tab>
          <Tab>Outflow</Tab>
        </TabList>

        <TabPanel>
          <SubContainer>
            <p>Inflow</p>
          </SubContainer>
        </TabPanel>
        <TabPanel>
          <SubContainer>
            <p>Rainbands</p>
          </SubContainer>
        </TabPanel>
        <TabPanel>
          <SubContainer>
            <p>Eye & Eyewall</p>
          </SubContainer>
        </TabPanel>
        <TabPanel>
          <SubContainer>
            <p>Outflow</p>
          </SubContainer>
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default App;
