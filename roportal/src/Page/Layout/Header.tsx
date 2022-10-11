import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../../Style/component/Typography.css';
import { ReactComponent as Notification } from '../../Assests/Icons/Notification.svg'
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Container maxWidth={false} sx={{
                paddingLeft:0, 
                marginLeft:0,
            }}>
            <Toolbar disableGutters sx={{justifyContent:"space-between"}} >
                <Toolbar >
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component='text'
                        className='typo-Roboto-Bold-primary12-14'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        Admin Auditor
                    </Typography>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component='text'
                        className='typo-Roboto-Bold-primary12-14'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1
                        }}
                    >
                        Admin Auditor
                    </Typography>
                </Toolbar>
                <Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Notification">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Notification />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Box>
            </Toolbar>
        </Container>
    );
};
export default Header;
