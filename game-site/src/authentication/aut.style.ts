// authStyles.ts
import { SxProps, Theme } from '@mui/material/styles';

export const outerBoxStyles: SxProps<Theme> = {
    
        display: 'static',
        justifyContent:'center',
       
};

export const innerBoxStyles: SxProps<Theme> = {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: 'white',
    maxWidth:'400px',
    padding: '15px',
    opacity:'',
    boxShadow: 3,
    borderRadius: 3,
};

export const buttonBoxStyled: SxProps<Theme>= {
    display:"flex",
    justifyContent:"center",
    alignItems: "center"
}