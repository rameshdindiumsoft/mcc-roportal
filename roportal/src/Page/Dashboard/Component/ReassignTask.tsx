import { Avatar, Button, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import Dropdown from "../../Common/Dropdown";
import '../../../Style/component/Typography.css';
import '../../../Style/component/StatusLabel.css';
import '../../../Style/component/ButtonStyle.css';
import React from 'react';
import { styled } from "@mui/system";
import { statusAvatarMenuItem } from '../utils/contants';
import { SuccessSnakbar } from "../../Common/Snakbars";

const StatusTypography = styled(Typography)({
    padding: "3px 8px 3px 8px"
})


const RootBox = styled('div')({
    margin: "30px 20px"
});
const LabelOneBox = styled('div')({
    display: "flex"
});
const LabelTwoBox = styled('div')({
    marginTop: "44px",
    display: "flex",
    flexDirection: "row",
    alignItems:"center"
});
const LabelThreeBox = styled('div')({
    marginTop: "37px"
});
const DivBTNBox = styled('div')({
    display: "flex",
    justifyContent: "center",
    marginTop: "63px"
});

export default function ReassignTask() {
    const [status, setStatus] = React.useState(statusAvatarMenuItem[0].label);
    const [statusObj, setStatusobj] = React.useState(statusAvatarMenuItem[0]);
    const [statusFlag, setStatusFlag] = React.useState(false);
    const [statusFlag1, setStatusFlag1] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
        setStatusFlag(true)
    };

    const saveStatus = () => {
        let data: any = statusAvatarMenuItem?.find((row) => row.label === status);
        setStatusobj(data);
        setStatusFlag(false);
        setStatusFlag1(true);
        setOpen(true);
    }
    return (
        <RootBox>
            <LabelOneBox>
                <Typography className="typo-Roboto-Regoular-14">{"Reassign Task"}</Typography>
            </LabelOneBox>
            <LabelTwoBox>
                <Typography className="typo-Roboto-italic-14">{statusFlag1 ? "Task is reassigned to " : "Task Owner: "}</Typography>
                <StatusTypography className={'typo-Roboto-italic-primary57-14'}>{statusObj.label}</StatusTypography>
            </LabelTwoBox>
            <LabelThreeBox>
                <Typography className="typo-Roboto-Regoular-14">{"Change Auditor"}</Typography>
            </LabelThreeBox>
            <Dropdown handleChange={handleChange} statusMenuItem={statusAvatarMenuItem} value={status} >
                {statusAvatarMenuItem?.map((item) => (
                    <MenuItem sx={{
                        padding: "8px"
                    }} key={item.id} value={item.label}>
                        <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems:"center", padding: "8px" }}>
                            <Avatar className={item.divcss}>
                                <Typography className='typo-Roboto-Medium-primary2-14'>{item.label.charAt(0)}</Typography>
                            </Avatar>
                            <Typography className={item.typographycss}>{item.label}</Typography>
                        </div>
                    </MenuItem>
                ))}

            </Dropdown>
            <DivBTNBox>
                {statusFlag && <Button className="primary-button" onClick={() => saveStatus()}>
                    <Typography className="typo-Roboto-Medium-primary2-14">{"Save"}</Typography></Button>}
            </DivBTNBox>
            <SuccessSnakbar open={open} setOpen={setOpen}/>
        </RootBox>
    )
}


