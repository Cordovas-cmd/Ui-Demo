import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Typography} from '@mui/material';













const MainContainer = styled(Paper)( theme => ({
    // mainContainer: {
        height: 400,
        // width: 400,
        margin: "auto",
        // backgroundImage: "url(https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg)",
        backgroundImage: "url(https://drive.google.com/file/d/14W64u7WSM5yPRYWoVK1JPwWlGRRBeQmm/view?usp=sharing)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "none"
    // },
    // mainItem: {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     padding: theme.spacing(3),
    //     margin:"0 auto"
    // }
}));

export default function MainGridItem() {

    // const classes = useStyles;

    return (
        <MainContainer>

        <Grid container className={"mainContainer"}>
            <Grid item className={"mainItem"} md={6}>

                {/* Component is what the actual element is supposed to be but the variant is the style */}
                <Typography component='h2' variant='h5'>
                    Hello Gamers
                </Typography>
                {/* variant is style for material ui */}
                <Typography variant='body1' paragraph>
                    Do you want to win every game and crush your enemies?
                    Increase your IQ to over 200 using my secret methodologies!!
                </Typography>

            </Grid>
        </Grid>
        </MainContainer>
    );
}