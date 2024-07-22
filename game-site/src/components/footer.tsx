import React from 'react';
import './footer.style.css'
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    
    <Box component='footer' sx={{left:0}}>
      <Typography variant="body2">© 2024 Your Company. All rights reserved.</Typography>
    </Box>  
    
  );
};

export default Footer;
