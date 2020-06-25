import React from 'react';
import Container from './Components/Containers/Container';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import SubContainer from './Components/Containers/Subcontainer';
const data = require("./Data/data.json");

function App() {

  console.log(data)

  return (

    <Container>

      <Tabs>
        <TabList>
          {data.data.map(d => (
            <Tab key={d.tab}>{d.tab}</Tab>
          ))}
        </TabList>
        {data.data.map((d, i) => (
          <TabPanel>
            <SubContainer>
              <p key={i}>{d.tab}</p>
              {d.imgs.map((img, j) => (
                <ol key={j}>
                  {img.bullets.map((bullet, k) => (
                    <li key={k}>{bullet}</li>
                  ))}
                </ol>
              ))}
            </SubContainer>
          </TabPanel>
        ))}
      </Tabs>

    </Container>

  );
}

export default App;
