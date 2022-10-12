import { Typography } from "@mui/material";
import { AvatarFun } from "../utils/action";

export const StatusFlag = (label: string) => {
    return <Typography style={{color:"#212427"}}>{label}</Typography>
}
export default function History() {
    return (
        <div style={{ gap: 28, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <div>
                    <AvatarFun name={"Matt Wingate"} showName={false} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography className='typo-Roboto-Regoular-primary61-14'>
                        {"Matt Wingate,   9:25am"}
                    </Typography>
                    <Typography className='typo-Roboto-Regoular-primary3-14'>
                        {`Changed the Task Status from Not Received to Received`}
                    </Typography>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <div>
                    <AvatarFun name={"Amanda Williams"} showName={false} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography className='typo-Roboto-Regoular-primary61-14'>
                        {"Amanda Williams,   Yesterday"}
                    </Typography>
                    <Typography className='typo-Roboto-Regoular-primary3-14'>
                        {"Changed the Task Status from Not Received to Received"}
                    </Typography>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <div>
                    <AvatarFun name={"Joseph Brown"} showName={false} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography className='typo-Roboto-Regoular-primary61-14'>
                        {"You,   Tuesday"}
                    </Typography>
                    <Typography className='typo-Roboto-Regoular-primary3-14'>
                        {"Changed the Task Status from Not Received to Received"}
                    </Typography>
                </div>
            </div>
        </div>
    )
}