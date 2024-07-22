import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import { NewsStyle } from "./Home.style"
import Card from "@mui/material/Card"
import News from "../../components/News and clips/news"
import Clips from "../../components/News and clips/clips"

const HomePage: React.FC = () =>{
return(
    <Container sx={NewsStyle}>
        <News></News>
        <Clips></Clips>
    </Container>
    
    
)
}

export default HomePage