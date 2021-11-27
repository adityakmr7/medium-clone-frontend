import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Divider, Link, MenuItem } from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "#C4E2FF",
        }}
        elevation={0}
        position="fixed"
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="black" component="div">
            Medium
          </Typography>
          <Box display="flex" flex={1} />
          <Box alignItems="center" display="flex" justifyContent="flex-end">
            {["Our story", "Membership", "Write", "Sign In"].map((item) => {
              return (
                <MenuItem>
                  <Link style={{ color: "black", textDecoration: "none" }}>
                    {item}
                  </Link>
                </MenuItem>
              );
            })}
            <MenuItem>
              <Button
                sx={{
                  textDecoration: "none",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderRadius: "99em",
                  borderColor: "rgba(25,25,25,1)",
                  background: "rgba(25,25,25,1)",
                  fill: "rgba(255,255,255,1)",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
                variant="contained"
              >
                Get started
              </Button>
            </MenuItem>
          </Box>
        </Toolbar>
        <Divider sx={{ backgroundColor: "#000000", height: "1px" }} />
      </AppBar>
    </Box>
  );
}
