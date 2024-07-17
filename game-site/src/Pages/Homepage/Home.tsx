import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import { NewsStyle } from "./Home.style"

const HomePage: React.FC = () =>{
return(
    <Container sx={NewsStyle}>
        <Grid container spacing={3}>
        <Grid item xs={12} md = {6}>
            <Paper>
        <Box sx={{typography:'capitalize', color:'black',border:'2px solid blue',borderRadius:2}}>
            <Typography >Welcome to our Game!</Typography>
            <Typography>This is a simple game site where you can find all the latest news about our game. </Typography>
            
        </Box>
        </Paper>
        </Grid>
        <Grid item xs={12} md = {6}>
            <Paper>
        <Box sx={{color:'black', flex: 1 , padding:1 , marginLeft:1,border:'3px solid blue',borderRadius:2 }} >
        <Typography >Welcome to our Game!</Typography>
        <Typography >Anime</Typography>
        </Box>
        </Paper>
        </Grid>
        </Grid>
    </Container>
    
)
}

export default HomePage