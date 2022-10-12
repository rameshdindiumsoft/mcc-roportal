import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, IconButton, Typography, Link, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RightSideDrawer from './Component/RightSideDrawer';
import CommentIcon from '../../Assests/Icons/CommentIcon.svg';
import '../../Style/component/ButtonStyle.css';
import '../../Style/component/Typography.css';
import '../../Style/component/StatusLabel.css';
import AddIcon from '@mui/icons-material/Add';
import '../../Style/component/AvatarStyle.css';
import CustomDialog from '../Common/CustomDialog';
import { taskList } from './utils/contants'
import { CustomCard, HeaderCell, Search, SearchIconWrapper, StyledInputBase } from './utils/style';
import { AvatarFun, menuCloseHandle, menuHandle, StatusTag } from './utils/action';
import ConfirmationAlert from './Component/ConfirmationAlert';
import AddTask from './Component/AddTask';
import ChangeStatusTask from './Component/ChangeStatusTask';
import ViewTask from './Component/ViewTask';
import Comment from './Component/Comment';
import Track from './Component/Track';
import ReassignTask from './Component/ReassignTask';
import { ReactComponent as IconMoreSharp } from '../../Assests/Icons/IconMoreSharp.svg';
import CustomPopper from '../Common/CustomPopper';
import { PopperPlacementType } from '@mui/material/Popper';
import MarkClaimAlert from './Component/MarkClaimAlert';
import EditTask from './Component/EditTask';
import SuccessAlert from './Component/SuccessAlert';
import { options } from './utils/contants';

const Dashboard = () => {
    const [ anchorEl, setAnchorEl ] = React.useState<HTMLButtonElement | null>(null);
    const [ open, setOpen ] = React.useState(false);
    const [ placement, setPlacement ] = React.useState<PopperPlacementType>();
    const [ enbaleModel, setModel ] = React.useState<boolean>(false);
    const [ enbaleModelKey, setModelkey ] = React.useState<string>('viewTask');
    const [ enbaleDialog, setDialog ] = React.useState<boolean>(false);

    const menuHandleCloseClick = () => {
        menuCloseHandle(setModel, setDialog, setModelkey)
    }
    const menuHandleClick = (key: string) => {
        menuHandle(setModel, setDialog, setModelkey, key)
    }
    const handleClick =
        (newPlacement: PopperPlacementType) =>
            (event: React.MouseEvent<HTMLButtonElement>) => {
                setAnchorEl(event.currentTarget);
                setOpen((prev) => placement !== newPlacement || !prev);
                setPlacement(newPlacement);
            };
    return (<>
        <CustomCard>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Typography variant="h5" sx={{ fontFamily: "robotomedium", color: "#11213F", letterSpacing: "0px" }} gutterBottom>Tasks</Typography>
                <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button className='primary1-button' onClick={() => menuHandleClick('addTask')}>
                        <AddIcon style={{ color: "white" }} />&nbsp;&nbsp;
                        <Typography className='typo-Roboto-Medium-primary2-14'>{`New Task`}</Typography>
                    </Button>
                </div>
            </div>
            <TableContainer sx={{ marginTop: "20px" }}>
                <Table sx={{ minWidth: 750 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ background: "#F7F8F9 0% 0% no-repeat padding-box" }}>
                            <HeaderCell size='small' component={"th"} >Task Name</HeaderCell>
                            <HeaderCell component={"th"} >Org.Tin</HeaderCell>
                            <HeaderCell component={"th"} >Auditor</HeaderCell>
                            <HeaderCell component={"th"} >Start Date</HeaderCell>
                            <HeaderCell component={"th"} >End Date</HeaderCell>
                            <HeaderCell component={"th"} >Status</HeaderCell>
                            <HeaderCell component={"th"} >Audio Name</HeaderCell>
                            <HeaderCell component={"th"} >Comment</HeaderCell>
                            <HeaderCell align="right" component={"th"} ></HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskList?.map((row, index) => (
                            <TableRow
                                key={index}
                                hover
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell size="small" className='typo-Roboto-Regoular-primary7-14' onClick={() => menuHandleClick('viewTask')}>{row.taskName}</TableCell>
                                <TableCell size="small" className='typo-Roboto-Regoular-primary7-14' onClick={() => menuHandleClick('viewTask')}>{row.orgTin}</TableCell>
                                <TableCell size="small" onClick={() => menuHandleClick('viewTask')}>
                                    <AvatarFun name={row.auditor} showName={true} />
                                </TableCell>
                                <TableCell size="small" className='typo-Roboto-Regoular-primary7-14'>{row.startDate}</TableCell>
                                <TableCell size="small" className='typo-Roboto-Regoular-primary7-14'>{row.endDate}</TableCell>
                                <TableCell size="small" className='typo-Roboto-Regoular-primary7-14'>
                                    <StatusTag status={row.status} />
                                </TableCell>
                                <TableCell size="small" >
                                    <Link sx={{ textDecoration: "none", cursor: "pointer" }} className='typo-Roboto-Regoular-primary10-14'>
                                        {row.audioName}
                                    </Link>
                                </TableCell>
                                <TableCell size="small" align="center">
                                    <IconButton onClick={() => menuHandleClick('comment')}>
                                        <img src={CommentIcon} alt="CommentIcon" />
                                    </IconButton>
                                </TableCell>
                                <TableCell size="small" align="center">
                                    <IconButton sx={{
                                        height: 40,
                                        width: 40
                                    }} onClick={handleClick('left-start')}>
                                        <IconMoreSharp />
                                    </IconButton>
                                    <CustomPopper open={open} anchorEl={anchorEl} placement={placement}>
                                        {options.map((option) => (
                                            <>
                                                <MenuItem  key={option.id} selected={option.label === 'Pyxis'} onClick={() => menuHandleClick(option.key)}>
                                                    <Typography style={{ padding: "4px 0px 4px 0px" }} className='typo-Roboto-Regoular-primary57-14'> {option.label}</Typography>
                                                </MenuItem >
                                            </>
                                        ))}
                                    </CustomPopper>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <RightSideDrawer
                openDrawer={enbaleModel}
                commentDialog={menuHandleCloseClick}
            >
                {enbaleModelKey === "viewTask" &&<ViewTask />}
                {enbaleModelKey === "editTask" &&<EditTask />}
                {enbaleModelKey === "reassignTask" &&<ReassignTask />}
                {enbaleModelKey === "changeStatus" &&<ChangeStatusTask />}
                {enbaleModelKey === "addTask" &&<AddTask />}
                {enbaleModelKey === "comment" &&<Comment />}
                {enbaleModelKey === "track" &&<Track />}
            </RightSideDrawer>
            <CustomDialog open={enbaleDialog}  handleClick={menuHandleCloseClick}>
                {enbaleModelKey === "deleteTask" &&<ConfirmationAlert conFirmOnClick={() =>menuHandleClick('successTask')} primaryLable={"Are you sure you want to delete this task?"} secondaryLabel={"onces done. can’t be revoked"} />}
                {enbaleModelKey === "markClaimSubmitted" &&<MarkClaimAlert conFirmOnClick={() =>menuHandleClick('markSucess')} primaryLable={"Are you sure you want to mark claim submitted"} />}
                {enbaleModelKey === "markSucess" &&<SuccessAlert  conFirmOnClick={menuHandleCloseClick} primaryLable={"Claim is marked as submitted successfully"} />}
                {enbaleModelKey === "successTask" &&<SuccessAlert conFirmOnClick={menuHandleCloseClick} primaryLable={"Task is deleted Successfully"} />}
            </CustomDialog>
        </CustomCard>
        <div style={{ display: "flex", justifyContent: "end", alignItems: "end", marginTop: "20px" }}>
            <Button className='secondary-button'>
                <Typography className='typo-Roboto-Regoular-primary7-14'>{"10/Page"}</Typography>
            </Button>
        </div>
    </>
    )
}
export default Dashboard;


