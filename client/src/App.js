// client/src/App.js
import { Box } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#DDDDDD', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} >
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;