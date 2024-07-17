import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import { Container, TextField,Button, Grid, Checkbox, Typography, FormControl, FormControlLabel,InputAdornment, Collapse} from '@mui/material';
import { outerBoxStyles,innerBoxStyles,buttonBoxStyled } from './aut.style';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Collapse in = {value===index} timeout="auto" unmountOnExit>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
    </Collapse>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={outerBoxStyles}>
      <Box sx ={innerBoxStyles}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Авторизация" {...a11yProps(0)} sx={{mx:1 ,'&:focus':{outline:'none',boxShadow:'none'}}} />
          <Tab label="Регистрация" {...a11yProps(1)} sx={{mx:1 ,'&:focus':{outline:'none',boxShadow:'none'}}} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
        <TextField variant = "outlined" fullWidth label="Имя пользователя или логин" margin="normal" InputProps={{startAdornment:(<InputAdornment position="start"> <LoginIcon/></InputAdornment>)}}></TextField> 
        <TextField fullWidth label="Пароль" type="password" margin="normal"  InputProps={{startAdornment:(<InputAdornment position="start"> <PasswordIcon/></InputAdornment>)}}></TextField>
        
         <FormControlLabel control={<Checkbox />} label="Запомнить" style={{color:'black'}}/>
        <Box mt={2} sx={buttonBoxStyled}>
        <Button variant="contained" color="primary">Войти</Button>
        </Box> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <TextField fullWidth label="Логин" margin="normal" variant="outlined"></TextField>
      <TextField fullWidth label="Nickname" type="password" margin="normal" variant="outlined"></TextField>
      <TextField fullWidth label="Email" margin="normal" variant="outlined"></TextField>
      <TextField fullWidth label="Пароль" type="password" margin="normal" variant="outlined"></TextField>
      <Box mt={2} sx = {buttonBoxStyled}>
      <Button variant="contained" color="primary">Зарегистрироваться</Button>
      </Box>
      </CustomTabPanel>
      </Box>
    </Box>
  );
}
