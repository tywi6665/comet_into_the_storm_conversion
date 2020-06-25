import React from 'react';
import './App.scss';
import Container from './Components/Container';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';

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

        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default App;
