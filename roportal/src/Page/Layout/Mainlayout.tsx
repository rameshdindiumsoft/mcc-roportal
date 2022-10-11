import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from './Sidebar';
import Header from './Header';

const drawerWidth = 252;

interface Props {
    window?: () => Window;
    children: React.ReactNode
}

export default function Mainlayout(props: Props) {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    ml: { sm: `${drawerWidth}px` },
                    height: "80px",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 1px 4px #00000014",
                    opacity: 1,
                    justifyContent:"center"
                }}
            >
                <Header />
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { 
                            marginTop: '83px',
                            boxSizing: 'border-box',
                            width: drawerWidth ,
                            background:"#FFFFFF 0% 0% no-repeat padding-box",
                            opacity: 1
                        },
                    }}
                >
                    <Sidebar />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { 
                            marginTop: '83px',
                            boxSizing: 'border-box', 
                            width: drawerWidth ,
                            background:"#FFFFFF 0% 0% no-repeat padding-box",
                            opacity: 1
                        },
                    }}
                    open
                >
                    <Sidebar />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                background: "#F7F7F7 0% 0% no-repeat padding-box",
                opacity: 1, height:"100vh" }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
