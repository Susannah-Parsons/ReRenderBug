import { PropsWithChildren } from "react";
import { Typography, Box, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CallHistoryButton from "./CallHistoryButton";

interface ComponentPropsNoChildren {
    lng: string;
  }
  
  export type ComponentProps = PropsWithChildren<ComponentPropsNoChildren>;

  export function AppLayout({
    children,
    lng,
  }: ComponentProps) {
    
    return (
    <Box
      sx={{
        height: "100%",
        padding: 2,
        paddingBottom: 0,
        minWidth: "310px",
      }}
    >
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
          <CallHistoryButton/>
        </Toolbar>
      </AppBar>
        <Typography>{lng}</Typography>
        {children}
    </Box>
    )
  }
