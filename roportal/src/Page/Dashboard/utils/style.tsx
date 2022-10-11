import { Card, TableCell, InputBase, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';

export const CustomCard = styled(Card)({
    padding: 20,
    marginTop: "30px",
    boxShadow: "0px 1px 2px #00000014",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "2px solid #EAEAEA",
    borderRadius: "4px"
});
export const HeaderCell = styled(TableCell)({
    color: "rgb(33, 43, 54)",
    fontWeight: 600,
    lineHeight: "1.5rem"
});
export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '205px',
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #DEDEDE",
    borderRadius: "5px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    font: "normal normal 14px/19px !important",
    fontFamily:"robotomedium",
    letterSpacing: "0px",
    color:"#939393 !important",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '205px',
        font: "normal normal 14px/19px !important",
        fontFamily:"robotomedium",
        color:"#939393 !important",
        [theme.breakpoints.up('sm')]: {
            width: '205px',
            // '&:focus': {
            //     width: '20ch',
            // },
        },
    },
}));
export const StatusTypography = styled(Typography)({
    padding: "3px 8px 3px 8px",
});

export const AddTaskRootDiv = styled('div')({
    margin:"47px 48px 150px 41px",
    height: "100%",
    minHeight: "100%",
    display: "grid"
});
export const AddTaskFiledDiv = styled('div')({
    // background:"green",
    height:"50px",
    minHeight:"50px",
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    marginTop:"15px"
});
export const HeaderDiv = styled('div')({
    height: "63px",
    minHeight: "63px",
    width: "100%",
    justifyContent:"space-between",
    alignItems:"center",
    display:"flex",
    background: "#F7F7F7 0% 0% no-repeat padding-box",
});
export const FitDiv = styled('div')({
    width:"50%",
    textAlign:"initial"
});
export const ViewTaskFiledDiv = styled('div')({
    // background:"green",
    height:"55px",
    minHeight:"40px",
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
});