import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, IconButton, Typography, Link, MenuItem, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RightSideDrawer from './Component/RightSideDrawer';
import CommentIcon from '../../Assests/Icons/CommentIcon.svg';
import '../../Style/component/ButtonStyle.css';
import '../../Style/component/Typography.css';
import '../../Style/component/StatusLabel.css';
import AddIcon from '@mui/icons-material/Add';
import '../../Style/component/AvatarStyle.css';
// import MoreDropdown from '../Common/MoreDropdown';
import CustomDialog from '../Common/CustomDialog';
import { taskList } from './utils/contants'
import { CustomCard, HeaderCell, Search, SearchIconWrapper, StyledInputBase } from './utils/style';
import { AvatarFun, StatusTag } from './utils/action';
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

const options = [
    'View Task',
    'Edit Task',
    'Reassign Task',
    'Change Status',
    'Mark claim submitted',
    'Delete Task'
];
const Dashboard = () => {
    const [openViewTaskDrawer, setOpenViewTaskdrawer] = React.useState(false);
    const [openAddTaskDrawer, setOpendAddTaskrawer] = React.useState(false);
    const [openEditTaskDrawer, setOpenEditTaskrawer] = React.useState(false);
    const [openCommentDrawer, setCommentdrawer] = React.useState(false);
    const [openReassignDrawer, setOpenReassigndrawer] = React.useState(false);
    const [openchangeStatusDrawer, setOpenchangeStatuskdrawer] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();
    const [openDeleteDialog, setDeleteDialog] = React.useState(false);
    const [openMarkClaimDialog, setMarkClaimDialog] = React.useState(false);
    const [openDeleteSuccessDialog, setDeleteSuccessDialog] = React.useState(false);
    const [openMarkClaimSuccessDialog, setMarkClaimSuccessDialog] = React.useState(false);

    const addTaskDialog = () => {
        setOpendAddTaskrawer(!openAddTaskDrawer)
    }
    const editTaskDialog = () => {
        setOpenEditTaskrawer(!openEditTaskDrawer)
    }
    const commentDialog = () => {
        setCommentdrawer(!openCommentDrawer)
    }
    const viewTaskDialog = () => {
        setOpenViewTaskdrawer(!openViewTaskDrawer)
    }
    const reassignDialog = () => {
        setOpenReassigndrawer(!openReassignDrawer)
    }
    const changeStatusDialog = () => {
        setOpenchangeStatuskdrawer(!openchangeStatusDrawer)
    }
    const deleteDialog = () => {
        setDeleteDialog(!openDeleteDialog)
    }
    const markClaimDialog = () => {
        setMarkClaimDialog(!openMarkClaimDialog)
    }
    const deleteSuccessDialog = () => {
        setDeleteSuccessDialog(!openDeleteSuccessDialog);
        setDeleteDialog(false);
        setMarkClaimSuccessDialog(false)
    }
    const markClaimSuccessDialog = () => {
        setMarkClaimSuccessDialog(!openMarkClaimSuccessDialog);
        setMarkClaimDialog(false);
        setDeleteSuccessDialog(false)
    }
    const menuHandleClick = (key: string) => {
        switch (key) {
            case 'View Task':
                return setOpenViewTaskdrawer(true);
            case 'Edit Task':
                return setOpenEditTaskrawer(true);
            case 'Reassign Task':
                return setOpenReassigndrawer(true);
            case 'Change Status':
                return setOpenchangeStatuskdrawer(true);
            case 'Mark claim submitted':
                return setMarkClaimDialog(true);
            case 'Delete Task':
                return setDeleteDialog(true);
            default:
                return setOpenViewTaskdrawer(true);
        }
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
                    <Button className='primary1-button' onClick={() => addTaskDialog()}>
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
                                <TableCell size="small" className='typo-Roboto-Regoular-primary7-14' onClick={() => viewTaskDialog()}>{row.taskName}</TableCell>
                                <TableCell size="small" className='typo-Roboto-Regoular-primary7-14' onClick={() => viewTaskDialog()}>{row.orgTin}</TableCell>
                                <TableCell size="small" onClick={() => viewTaskDialog()}>
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
                                    <IconButton onClick={() => commentDialog()}>
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
                                                <MenuItem  key={option} selected={option === 'Pyxis'} onClick={() => menuHandleClick(option)}>
                                                    <Typography style={{ padding: "4px 0px 4px 0px" }} className='typo-Roboto-Regoular-primary57-14'> {option}</Typography>
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
                openDrawer={openViewTaskDrawer}
                commentDialog={viewTaskDialog}
                children={<ViewTask />}
            />
            <RightSideDrawer
                openDrawer={openCommentDrawer}
                commentDialog={commentDialog}
                children={<Comment />}
            />
            <RightSideDrawer
                openDrawer={openAddTaskDrawer}
                commentDialog={addTaskDialog}
                children={<Track />}
            />
            <RightSideDrawer
                openDrawer={openReassignDrawer}
                commentDialog={reassignDialog}
                children={<ReassignTask />}
            />
            <RightSideDrawer
                openDrawer={openchangeStatusDrawer}
                commentDialog={changeStatusDialog}
                children={<ChangeStatusTask />}
            />
            <RightSideDrawer
                openDrawer={openAddTaskDrawer}
                commentDialog={addTaskDialog}
                children={<AddTask />}
            />
            <RightSideDrawer
                openDrawer={openEditTaskDrawer}
                commentDialog={editTaskDialog}
                children={<EditTask />}
            />
            <CustomDialog open={openDeleteDialog}  handleClick={deleteDialog}>
                <ConfirmationAlert conFirmOnClick={deleteSuccessDialog} primaryLable={"Are you sure you want to delete this task?"} secondaryLabel={"onces done. can’t be revoked"} />
            </CustomDialog>
            <CustomDialog open={openMarkClaimDialog} handleClick={markClaimDialog}>
                <MarkClaimAlert conFirmOnClick={markClaimSuccessDialog} primaryLable={"Are you sure you want to mark claim submitted"} />
            </CustomDialog>
            <CustomDialog open={openMarkClaimSuccessDialog} handleClick={markClaimSuccessDialog}>
                <SuccessAlert  conFirmOnClick={deleteSuccessDialog} primaryLable={"Claim is marked as submitted successfully"} />
            </CustomDialog>
            <CustomDialog open={openDeleteSuccessDialog}  handleClick={deleteSuccessDialog}>
                <SuccessAlert conFirmOnClick={markClaimSuccessDialog} primaryLable={"Task is deleted Successfully"} />
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


