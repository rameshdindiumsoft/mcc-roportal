import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/system';
import { Button, Divider, Typography } from '@mui/material';
import { ReactComponent as Slideback } from '../../../Assests/Icons/Slide back.svg';
import '../../../Style/component/Typography.css';

const CustomIconButton = styled(Button)({
    height: 26,
    minWidth: 26,
    "&:hover": {
        fill: "#427BE0",
    }
});
const HeaderDiv = styled('div')({
    display: "flex",
    marginTop: "12px",
    marginLeft: "20px",
    marginRight: "24px",
    height: "68px",
    minHeight: "68px",
    justifyContent: "space-between"
});
const drawerWidth = 440;
type RightSideDrawerprops = {
    openDrawer: boolean,
    children: React.ReactNode,
    commentDialog: Function
}
export default function RightSideDrawer({ openDrawer, children, commentDialog }: RightSideDrawerprops) {
    return (
        <Drawer
            open={openDrawer}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    boxShadow: "-4px 1px 8px #0000000F",
                },
            }}
            variant="persistent"
            anchor="right"
        >
            <HeaderDiv >
                <div>
                    <Typography className='typo-Roboto-Medium-primary12-14'>{"Task"}</Typography>
                    <Typography className='typo-Roboto-Regoular-14'>{"Reviewing Policies And Procedures"}</Typography>
                </div>
                <div>
                    <CustomIconButton size='small' onClick={() => commentDialog()}>
                        <Slideback />
                    </CustomIconButton>
                </div>
            </HeaderDiv>
            <Divider />
            {children}
        </Drawer>
    )
}