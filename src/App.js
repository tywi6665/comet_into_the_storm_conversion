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
  //   renderCurrentPage(currentPage)
  // }, [currentPage])

  const renderCurrentPage = (page) => {
    let renderedPage;
    if (page === "Main") {
      renderedPage = <Main setCurrentPage={setCurrentPage} />
    } else if (page === "Inflow") {
      renderedPage = <Inflow setCurrentPage={setCurrentPage} />
    } else if (page === "Rainbands") {
      renderedPage = <Rainbands setCurrentPage={setCurrentPage} />
    } else if (page === "Eye&eyewall") {
      renderedPage = <Eye_Eyewall setCurrentPage={setCurrentPage} />
    } else if (page === "Outflow") {
      renderedPage = <Outflow setCurrentPage={setCurrentPage} />
    }
    return renderedPage
  }

  return (

    <Container>
      {renderCurrentPage(currentPage)}
    </Container>

  );
}

export default App;
