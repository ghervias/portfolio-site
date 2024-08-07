// client/src/App.js
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { GlobalStyles } from '@mui/styled-engine';
import { height } from '@mui/system';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomizedTabs from './CustomizedTabs';
import TabBrowser from './Home';
import Navbar from './Navbar';

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <Box sx={{ backgroundColor: '#DDDDDD', display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline></CssBaseline> */}
        <Navbar />
        {/* <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} > */}
        <CustomizedTabs value={value} handleChange={handleChange}></CustomizedTabs>
        <Routes>
          <Route path="/home" element={<TabBrowser value={value} />} />
        </Routes>
        {/* </Box> */}
        {/* <CustomizedTabs /> */}

    </Box>
  );
};

export default App;