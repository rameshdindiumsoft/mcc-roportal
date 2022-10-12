import { Avatar, Typography } from "@mui/material"
import { StatusTypography } from "./style";
import { statusMenuItem, statusAvatarMenuItem, statusTagMenuItem } from './contants';

type AvatarFunProps = {
    name: string,
    showName: boolean
}
export const AvatarFun = ({name, showName}: AvatarFunProps)=> {
    let data = statusAvatarMenuItem?.find((item) => item.label === name);

    return (
        <div style={{display:"flex", flexDirection:"row", gap:10, alignItems:"center"}}>
            <Avatar className={data?.divcss}>
                <Typography className='typo-Roboto-Medium-primary2-14'>{name.charAt(0)}</Typography>
            </Avatar>
           {showName && <Typography className='typo-Roboto-Regoular-primary7-14'>{name}</Typography>}
        </div>
    )
} 
export const statusfun = (status: any)=> {
    let data = statusMenuItem?.find((item) => item.label === status);
    return (
        <div className={data?.divcss}>
            <StatusTypography className={data?.typographycss}>{status}</StatusTypography>
        </div>
    )
}
type StatusTagProps = {
    status: string
}
export const StatusTag = ({status}:StatusTagProps)=> {
    let data = statusTagMenuItem?.find((item) => item.label === status);
    return (
        <div className={data?.divcss}>
            <StatusTypography className={data?.typographycss}>{status}</StatusTypography>
        </div>
    )
}

export const menuHandle = (setModel: Function, setDialog: Function, setModelkey: Function, key: string) => {
    if( key === 'successTask' || key === 'markSucess'){
        setModelkey(key)
        setDialog(true);
    } else if(key === "deleteTask" || key === "markClaimSubmitted"){
        setDialog(true);
        setModelkey(key)
    }else{
        setModel(true);
        setModelkey(key)
    }
}
export const menuCloseHandle = (setModel: Function, setDialog: Function, setModelkey: Function) => {
    setModel(false);
    setDialog(false);
    setModelkey('viewTask');
}