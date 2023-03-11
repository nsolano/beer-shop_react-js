import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Button, Badge, Avatar, StyledEngineProvider} from "@mui/material";
import './NavBar.css';
import logo from './logo.png';


function Navbar() {
  return (
    <StyledEngineProvider injectFirst>
    <AppBar position="fixed" className="appBar">
      <Toolbar className="toolbar">        
        <img src={logo} alt="logo" className="logo" />       
        <div className="button-group">
        <Button className="button">Inicio</Button>
        <Button className="button">Comunidad</Button>
        <Button className="button">Tienda</Button>
        </div>             
        <Button color="inherit" startIcon={<Badge badgeContent={5} color="secondary"><ShoppingCart /></Badge>} className="cart-button">        
        <Avatar alt="User Avatar" src="https://i.pravatar.cc/40" className="avatar" />
        </Button>        
      </Toolbar>
    </AppBar>
    </StyledEngineProvider>
  );
}

export default Navbar;
