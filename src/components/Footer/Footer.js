import { StyledEngineProvider, Toolbar, Typography } from '@mui/material';
import './Footer.css';
import logo from '../NavBar/logo.png';
import { Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <StyledEngineProvider injectFirst>
    <div className="footer">
        <Toolbar className="toolbar">   
        <img src={logo} alt="logo" className="logo" />  
        <div className="social-group">
            <Facebook className="social-icon" />
            <Twitter className="social-icon" />
            <Instagram className="social-icon" />
            <WhatsApp className="social-icon" />
        </div>    
        <Typography variant="body1">
          &copy; 2023 BELBIER
        </Typography>
        </Toolbar>
      </div>
      </StyledEngineProvider>
  )
}

export default Footer