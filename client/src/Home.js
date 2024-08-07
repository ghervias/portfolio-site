import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Card, Button, Toolbar } from '@mui/material';
import { MuiMarkdown } from 'mui-markdown';
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import CustomizedTabs from './CustomizedTabs';
import './index.css'
const images = require.context('./assets', false, /\.(png|jpe?g|svg)$/);


function Tile({ title, thumbnail, writeup, handleChange }) {

    const imgSrc = process.env.PUBLIC_URL + `/assets/${thumbnail}`;
    console.log("PRINT TEST 5: ", imgSrc)
    return (
        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper onClick={() => handleChange()} className="paper-hover" sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                height: '12rem', width: '18rem', overflow: 'hidden'
            }}>
                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>{title}</Typography>
                <img className="darken-on-hover" src={imgSrc} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Paper>
        </Grid>
    )
}

function TileGrid({ projectData, handleChange }) {
    console.log("PRINT TEST 4: ", projectData)

    const tiles = Object.keys(projectData).map((project) => {
        const { thumbnail, writeup } = projectData[project];
        return (
            // <div>
            //     <p>{project}</p>
            //     <p>{thumbnail}</p>
            //     <p>{writeup}</p>
            // </div>
            <Tile
                title={project}
                thumbnail={thumbnail}
                writeup={writeup}
                handleChange={() => handleChange(null, project)}
            />
        );
    });
    console.log("PRINT TEST 3: ", tiles)

    return (
        <Grid item xs={12} sx={{ display: 'flex', maxWidth: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <Grid container spacing={0} sx={{ paddingTop: '1.5rem', paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '1rem', display: 'flex', flexGrow: 0 }}> */}
            <Grid container spacing={0} sx={{ height: '95%', width: '85%', display: 'flex', flexGrow: 0 }}>
                {tiles}
            </Grid>
        </Grid>

    )
}

function ProjectWriteup({ setView, title, thumbnail, writeup }) {
    const writeupSrc = process.env.PUBLIC_URL + `/assets/writeups/${writeup}`;
    const [texts, setTexts] = React.useState("");

    React.useEffect(() => {
        async function main() {
            try {
                const response = await fetch(writeupSrc);
                const data = await response.text();
                setTexts(data);
            } catch (error) {
                console.error('Error fetching the file:', error);
            }
        }
        main();
    }, [writeupSrc]);  // Dependency on writeupSrc to re-fetch if the URL changes

    console.log("PRINT TEST 6: ", writeupSrc, texts)
    return (
        // <p>hi</p>
            <Box sx={{paddingLeft: '200px', paddingRight: '150px'}}>
                <Markdown escapeHTML={false}>{texts}</Markdown>
                {/* <zero-md src={writeupSrc}></zero-md> */}
            </Box>
    )
}

function ProjectTab() {
    const [view, setView] = React.useState("tiles")
    const projectData = {
        "GAEIA Teams": { "thumbnail": "gaeia.png", "writeup": "gaeia.txt" },
        "RecEvents": { "thumbnail": "recevents.png", "writeup": "RecEvents writeup" },
        "Affect Measurement": { "thumbnail": "affect.png", "writeup": "Affect writeup" }
    }

    const handleChange = (event, newView) => {
        setView(newView)
    }

    if (view === "tiles") {
        console.log("PRINT TEST 2:", view)
        return (
            <TileGrid projectData={projectData} handleChange={handleChange}></TileGrid>
        )
    }
    else {
        const { thumbnail, writeup } = projectData[view];
        console.log("PRINT TEST", thumbnail, writeup)
        return (
            <ProjectWriteup setView={setView} title={view} thumbnail={thumbnail} writeup={writeup}></ProjectWriteup>
        )
    }
    return (
        <p>error</p>
    )
}

function TabBrowser({value}) {


    return (
        <Box component="main" sx={{ display: 'flex', flexGrow: 1, marginTop: '16rem', marginRight: '240px'}} style={{}}>
            <Grid container sx={{ display: 'flex', alignItems:"center" }}>
                {/* <Grid item sx={{ display: 'flex', alignItems: "center" }} xs={2}>
                    <CustomizedTabs value={value} handleChange={handleChange}></CustomizedTabs>
                </Grid> */}
                {value === 0 && <ProjectTab></ProjectTab>}
                {value === 1 && <Typography>cv</Typography>}
                {value === 2 && <Typography>certifications</Typography>}
                {value === 3 && <Typography>about me</Typography>}
            </Grid>
        </Box>
    );
};


export default TabBrowser;