import React from 'react';
import { Grid } from '@mui/material';
import MainGridItem from './MainGridItem';
import LeftSideBar from './LeftSidebar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import RightSideBar from './RightSidebar';


export default function GridLayout() {
    // const classes = useStyles()
    return (
      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={3}>

            <Grid item lg={2} sm={12} xs={12}>
           <LeftSideBar/>
            </Grid>

            <Grid item lg={8} sm={12} xs={12}>
           <MainGridItem />
            </Grid>

            <Grid item lg={2} sm={12} xs={12}>
           <RightSideBar />
            </Grid>

        </Grid>
        </Box>
        
    );
}