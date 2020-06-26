import React, { useState, useEffect } from 'react';
import Container from './Components/Containers/Container';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import SubContainer from './Components/Containers/Subcontainer';
import List from './Components/List';
import ImageWrapper from './Components/ImageWrapper';
import Main from './Pages/Main';
import Inflow from './Pages/Inflow';
import Rainbands from "./Pages/Rainbands";
import Eye_Eyewall from "./Pages/Eye&eyewall";
import Outflow from './Pages/Outflow';
const data = require("./Data/data.json");

function App() {

  const [currentPage, setCurrentPage] = useState("Main")
  // useEffect(() => {
  //   handleCurrentPage(currentPage)
  // }, [currentPage])

  const handleCurrentPage = (page) => {
    let renderedPage;
    if (page === "Main") {
      renderedPage = <Main />
    } else if (page === "Inflow") {
      renderedPage = <Inflow />
    } else if (page === "Rainbands") {
      renderedPage = <Rainbands />
    } else if (page === "Eye&eyewall") {
      renderedPage = <Eye_Eyewall />
    } else if (page === "Outflow") {
      renderedPage = <Outflow />
    }
    return renderedPage
  }

  return (

    <Container>
      {handleCurrentPage(currentPage)}
      {/* <h1>Inside the storm</h1>
      <ImageWrapper
        src={"screenshot"}
      />
      <Tabs direction={'rtl'}>
        <TabList
          className="custom-tabs react-tabs__tab-list"
        >
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
      </Tabs> */}

    </Container>

  );
}

export default App;
