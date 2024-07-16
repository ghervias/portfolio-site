import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Card } from '@mui/material';
import CustomizedTabs from './CustomizedTabs';
import Gaeia from './assets/gaeia.png'
import RecEvents from './assets/recevents.png'
import Affect from './assets/affect.png'
import Image from 'mui-image'
import './index.css'


function Home() {
    const imageSource = Gaeia;

    return (
        <Box sx={{ display: 'flex', flexGrow: 1 }} style={{}}>
            <Grid container sx={{ paddingLeft: '5rem', paddingBottom: '2rem' }}>
                <Grid item sx={{ display: 'flex', alignItems: "center", paddingBottom: '7rem' }} xs={2}>
                    <CustomizedTabs></CustomizedTabs>
                </Grid>
                <Grid item xs={9} sx={{ display: 'flex', maxWidth: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Grid container spacing={0} sx={{ paddingTop: '1.5rem', paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '1rem', display: 'flex', flexGrow: 0 }}> */}
                    <Grid container spacing={0} sx={{ height: '95%', width: '85%', display: 'flex', flexGrow: 0 }}>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Card className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>GAEIA Teams</Typography>
                                <img className="darken-on-hover" src={Gaeia} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Card>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Paper className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>RecEvents</Typography>
                                <img className="darken-on-hover" src={RecEvents} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Paper className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>Affect Measurement</Typography>
                                <img className="darken-on-hover" src={Affect} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Paper className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>GAEIA Teams</Typography>
                                <img className="darken-on-hover" src={imageSource} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Paper className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>GAEIA Teams</Typography>
                                <img className="darken-on-hover" src={imageSource} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Paper className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>GAEIA Teams</Typography>
                                <img className="darken-on-hover" src={imageSource} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Paper className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>GAEIA Teams</Typography>
                                <img className="darken-on-hover" src={imageSource} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Paper className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>GAEIA Teams</Typography>
                                <img className="darken-on-hover" src={imageSource} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Paper className="paper-hover" sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', "&:hover": { boxShadow: 6 },
                                height: '10rem', width: '15rem', overflow: 'hidden'
                            }}>
                                <Typography variant='hoverText' className="hidden-text" style={{ zIndex: 10, position: 'absolute' }}>GAEIA Teams</Typography>
                                <img className="darken-on-hover" src={imageSource} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
};
export default Home;