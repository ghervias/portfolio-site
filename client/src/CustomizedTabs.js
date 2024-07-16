import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        // orientation="vertical"
        orientation="vertical"
        // variant="scrollable"
    />))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        left: 0,
        width: '.2rem'
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#2e1534',
    },
});

const StyledTab = styled((props) => <Tab sx={{alignItems: 'start' }} disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: 400,
        fontSize: '1.3rem',
        padding: 0,
        paddingLeft: '1rem',
        // marginRight: theme.spacing(1),
        color: 'black',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export default function CustomizedTabs({ value, handleChange }) {

    return (
        <Box sx={{ width: '100%' }}>
            <Box >
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Projects" />
                    <StyledTab label="CV" />
                    <StyledTab label="Certifications" />
                    <StyledTab label="About Me" />
                </StyledTabs>
            </Box>
        </Box>
    );
}