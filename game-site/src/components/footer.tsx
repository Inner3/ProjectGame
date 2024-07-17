import React from 'react';
import './footer.style.css'
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer>
    <Box component='footer'>
      <Typography variant="body2">© 2024 Your Company. All rights reserved.</Typography>
    </Box>
    </footer>
  );
};

export default Footer;
