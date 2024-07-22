import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const News: React.FC = () => {
    return(
    <Grid container spacing={6}>
        <Grid item xs={6} md = {6}>
            <Paper>
        <Box sx={{flex: 1 , padding:1 , typography:'capitalize', color:'black',borderRadius:2,height:300}}>
            <Card>
            <Typography textAlign={"center"}>Блок новостей</Typography>
            <Typography>Данный блок отображает новости или статьи. </Typography>
            </Card>
                
            
        </Box>
        </Paper>
        </Grid>
        <Grid item xs={6} md = {6}>
            <Paper>
            <Box sx={{color:'black', flex: 1 , padding:1, borderRadius:2, height:300 }} >
            <Card>
            <Typography textAlign={"center"}>Клипы дня</Typography></Card>
        </Box>
        </Paper>    
        </Grid>
        </Grid>
)        
}

export default News;