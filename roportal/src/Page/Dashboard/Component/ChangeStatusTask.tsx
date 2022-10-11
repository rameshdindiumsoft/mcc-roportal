import { Button, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import Dropdown from "../../Common/Dropdown";
import '../../../Style/component/Typography.css';
import '../../../Style/component/StatusLabel.css';
import '../../../Style/component/ButtonStyle.css';
import React from 'react';
import { styled } from "@mui/system";
import { statusMenuItem } from '../utils/contants';
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
    flexDirection: "row"
});
const LabelThreeBox = styled('div')({
    marginTop: "37px"
});
const DivBTNBox = styled('div')({
    display: "flex",
    justifyContent: "center",
    marginTop:"63px"
});

export default function ChangeStatusTask() {
    const [status, setStatus] = React.useState(statusMenuItem[0].label);
    const [statusObj, setStatusobj] = React.useState(statusMenuItem[0]);
    const [statusFlag, setStatusFlag] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
        setStatusFlag(true)
    };

    const saveStatus = () => {
        let data: any = statusMenuItem?.find((row) => row.label === status);
        setStatusobj(data);
        setStatusFlag(false);
        setOpen(true);
    }
    return (
        <RootBox>
            <LabelOneBox>
                <Typography className="typo-Roboto-Regoular-14">{"Change Status"}</Typography>
            </LabelOneBox>
            <LabelTwoBox>
                <Typography className="typo-Roboto-italic-14">{"Current Status"}</Typography>
                <div className={statusObj?.divcss}>
                    <StatusTypography className={statusObj?.typographycss}>{statusObj?.label}</StatusTypography>
                </div>
            </LabelTwoBox>
            <LabelThreeBox>
                <Typography className="typo-Roboto-Regoular-14">{"Change Status"}</Typography>
            </LabelThreeBox>
            <Dropdown handleChange={handleChange} statusMenuItem={statusMenuItem} value={status} >
                 {statusMenuItem?.map((item) => (
                        <MenuItem sx={{
                            padding:"8px"
                        }} key={item.id} value={item.label}>
                             <div className={item.divcss}>
                                <StatusTypography className={item.typographycss}>{item.label}</StatusTypography>
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
