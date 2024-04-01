import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Typography } from '@mui/material';
// import brain from "../assets/brain.png"
import "./MainFlexItem.css"


// const MainContainer = styled(Paper)(theme => ({
//     height: 700,
//     margin: "auto",
//     justifyContent: "center",
// }));


// export default function MainGridItem() {
//     return (

//         <MainContainer>

//             <Grid container className={"mainContainer"} 

//                 sx={{
//                     justifyContent: 'center',
//                     alignItems: "center",
//                     height: "100%",
//                     backgroundImage: `url(${brain})`,
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                     marginBottom:"20px",
//                     borderRadius: 2
//                 }}
//             >
//             </Grid>


//             <Grid container item lg={12}
//                 sx={{
//                     height: "200px",
//                     backgroundColor: "#e9ecf4"
//                 }}>

//                 <Grid item lg={6}>
//                     <Typography variant='body1' paragraph>
//                         HELLO!
//                     </Typography>
//                 </Grid>


//                 <Grid item lg={6}>
//                     <Typography variant='body1' paragraph>
//                         HELLO!
//                     </Typography>
//                 </Grid>

//             </Grid>


//         </MainContainer>
//     );
// }
export default function MainFlexItem() {
    return (

        <main className="MainContainer">
            <section className="FirstMain">

                <p>hello</p>
            </section>

            <section className="SecondMain">

                <p className="FirstCell">hello</p>
                <p className='SecondCell'>hello</p>
            </section>
        </main>


    );
}