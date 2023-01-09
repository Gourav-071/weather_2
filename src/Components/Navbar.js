import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" start>
          <IconButton
            // edge="start"
            // color="inherit"
            // aria-label="menu"
            // sx={{ mr: 2 }}
            sx={{
              color: "white",
              "&:hover": { color: "skyblue" },
              // color: "orange",
              //  backgroundColor: "white",

              marginRight: "2px",
            }}
          >
            <WbSunnyIcon sx={{fontSize:'40px'}} />
          </IconButton>

          <Typography variant="h5" color="inherit" component="div">
            Weather Forecast
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
