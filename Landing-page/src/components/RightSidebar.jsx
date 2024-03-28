import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import brain from "../assets/brain.png"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: 250,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

// const SidebarStyled = styled(Paper)(theme => ({
//     // mainContainer: {
//     height: 700,
//     // width: 400,
//     margin: "auto",
//     justifyContent: "center",
// }));



function FormRow() {
    return (
      <React.Fragment>
        <Grid item lg={12}>
          <Item>Item</Item>
        </Grid>
        
      </React.Fragment>
    );
  }
export default function RightSideBar() {


    return (
        // <SidebarStyled>

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>

    );
}