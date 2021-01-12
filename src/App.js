import './App.css';
import { useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  const [tab = 'Home', setTab] = useState();

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div className="App">
      <Container maxWidth="md" className="container">
        <div className="top">

          <Header tab={tab} handleTabChange={handleTabChange} />
          <Content tab={tab} />

        </div>
      </Container>
      <div className="footer">
        <Box color="white" bgcolor="black" p={1} boxShadow={3}>

          <Footer />

        </Box>
      </div>
    </div>
  );
};

export default App;
