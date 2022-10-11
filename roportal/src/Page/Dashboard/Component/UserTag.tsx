import { Avatar, Typography } from "@mui/material";
import '../../../Style/component/ButtonStyle.css';
import '../../../Style/component/Typography.css';
import '../../../Style/component/StatusLabel.css';
import '../../../Style/component/AvatarStyle.css';

export default function UserTag(){
    return (
        <div style={{display:"flex", flexDirection:"row", gap:10}}>
            <Avatar className='avatarP1'>
                <Typography className='typo-Roboto-Medium-primary2-14'>{"name.charAt(0)"}</Typography>
            </Avatar>
            <Typography className='typo-Roboto-Regoular-primary7-14'>{"name"}</Typography>
        </div>
    )
}