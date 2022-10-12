import { Button, IconButton, ListItemButton, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import { AddTaskRootDiv, ViewTaskFiledDiv, HeaderDiv, StatusTypography, FitDiv } from "../utils/style";
import '../../../Style/component/Typography.css';
import '../../../Style/component/ButtonStyle.css';
import React from "react";
import StatusDropdown from "../../Common/StatusDropdown";
import { AvatarFun } from "../utils/action";
import Track from './Track';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { statusMenuItem } from '../utils/contants';
import RightSideDrawer from "./RightSideDrawer";
import EditTask from "./EditTask";

export default function ViewTask() {
    const [status, setStatus] = React.useState(statusMenuItem[0].label);
    const [trackStatusFlag, setTrackStatusFlag] = React.useState(false);
    const [openEditTaskDrawer, setOpenEditTaskrawer] = React.useState(false);

    const editTaskDialog = () => {
        setOpenEditTaskrawer(!openEditTaskDrawer)
    }
    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };
    const openTrackStatus = () => {
        setTrackStatusFlag(!trackStatusFlag)
    }
    return (<>
       <HeaderDiv>
           {!trackStatusFlag ? <StatusDropdown handleChange={handleChange} value={status} >
                {statusMenuItem?.map((item) => (
                    <MenuItem sx={{
                        padding: "8px"
                    }} key={item.id} value={item.label}>
                        <div className={item.divcss}>
                            <StatusTypography className={item.typographycss}>{item.label}</StatusTypography>
                        </div>
                    </MenuItem>
                ))}
            </StatusDropdown>:
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IconButton className="list-button" onClick={() => openTrackStatus()}>
                    <ArrowBackIcon className="svgIcon" style={{color:"#7c7c7c", fontWeight:"lighter"}}/>
                </IconButton>
                <Typography className='typo-Roboto-Bold-primary57-16'>{"Track"}</Typography>

            </div>
            }
         {!trackStatusFlag && <ListItemButton className='list-button' onClick={() => openTrackStatus()}>
                <Typography className='typo-Roboto-Medium-primary10-14'>{"Track Status"}</Typography>
            </ListItemButton>}
        </HeaderDiv>
        <div style={{ overflow: "auto" }}>

        {!trackStatusFlag ?<AddTaskRootDiv>
            <div>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Auditor"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <AvatarFun name={"Matt Wingate"} showName={true} />
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Organisation Tin"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"1234567"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Location"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"Specialist Ward"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Provider Name"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <AvatarFun name={"Oliver"} showName={true} />
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Speciality"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"General Physician"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Patient Name"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <AvatarFun name={"Joseph Brown"} showName={true} />
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"MRN"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"123456"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Patient Account"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"1234569099"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Patient Dob"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"12-July-2022"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Patient Gender"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"Male"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>

                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Encounter Collection"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"4"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Start Date"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"12-Jul-2022"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"End Date"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"12-Jul-2022"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Appointment Type"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"Pre Book Appointment"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Audio"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"20220813_3956"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <ViewTaskFiledDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-14">{"Comment"}</Typography>
                    </FitDiv>
                    <FitDiv>
                        <Typography className="typo-Roboto-Regoular-primary7-16">{"Transcript Done"}</Typography>
                    </FitDiv>
                </ViewTaskFiledDiv>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20 }}>
                    <Button className='yes-button' onClick={() => editTaskDialog()}>
                        <Typography className='typo-Roboto-Medium-primary2-14'>{"Edit"}</Typography>
                    </Button>
                </div>
                <div style={{ height: 50 }}></div>
            </div>
        </AddTaskRootDiv>:
        <Track />}
        </div>
         <RightSideDrawer
                openDrawer={openEditTaskDrawer}
                commentDialog={editTaskDialog}
                children={<EditTask />}
            />
    </>
    )
}