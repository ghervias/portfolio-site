import React, { useContext } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography, Button, List, ListItem, SvgIcon, Box, Link as MuiLink } from '@mui/material';
import Me from './assets/me.jpg'
import GithubLogo from './assets/github.png'
import LinkedinLogo from './assets/linkedin.png'
import Divider from '@mui/material/Divider';





const Navbar = () => {

    return (

        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: "black", backgroundColor: "#ffffff00", boxShadow: 0}}>
                <Box sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end',height: '13rem', marginTop: '0rem' }} position="static">
                    <Grid sx={{ display: 'flex', flexGrow: 1, paddingLeft: '3rem', paddingRight: '3rem', backgroundColor: '#717A65', marginRight: '25rem', marginTop: '1rem', borderRadius: '5px'}} container>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} item xs={4}>
                            <Box>
                                <img className="image-small" src={Me} alt="me" style={{ borderRadius: '50%', width: 'auto', height: '9rem' }} />
                            </Box>
                        </Grid>
                        <Divider variant="middle" sx={{ backgroundColor: '#ffffff', alignSelf: 'center', height: '6rem', borderRightWidth: '.1rem' }} orientation="vertical" flexItem />

                        <Grid sx={{ paddingLeft: '2.3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }} item xs={3}>
                            <Typography sx={{ marginBottom: 0 }} fontSize={34} fontWeight={600}>Gabriel Hervias</Typography>
                            <Typography sx={{ marginTop: 0 }} fontSize={30}>Software Developer</Typography>
                            <Box sx={{ paddingTop: '.3rem' }}>
                                <a href="https://github.com/ghervias" target="_blank" rel="noopener noreferrer">
                                    <img className="image-small" src={GithubLogo} alt="github-logo" style={{ width: 'auto', height: '1.5rem', marginRight: 10 }} />
                                </a>
                                <a href="https://www.linkedin.com/in/gabriel-hervias/" target="_blank" rel="noopener noreferrer">
                                    <img className="image-small" src={LinkedinLogo} alt="linkedin-logo" style={{ width: 'auto', height: '1.5rem', marginRight: 10 }} />
                                </a>
                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }} item xs={4}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography fontStyle={"italic"} color={'#FFFFFF'}>{'>'} B.S. in Computer Science, Cal Poly SLO </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>🎓</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4.5}>
                                    <Typography fontStyle={"italic"} color={'#FFFFFF'}>{'>'} Full Stack Developer, GAEIA</Typography>
                                </Grid>
                                <Grid item xs={7.5}>
                                    <Typography>👨‍💻</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6.3}>
                                    <Typography fontStyle={"italic"} color={'#FFFFFF'}>{'>'} Computer Science Tutor @ Cal Poly SLO</Typography>
                                </Grid>
                                <Grid item xs={5.7}>
                                    <Typography>📚</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button variant='navbar1' color="inherit" component={Link} to="/">
            GAEIA Teams
          </Button>
        </Typography> */}
                </Box>

        </AppBar>


    );
}

export default Navbar;
