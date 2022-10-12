import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { comments } from '../utils/contants';
import '../../../Style/component/CommentStyle.css';
import '../../../Style/component/Typography.css';
import { AvatarFun } from '../utils/action';
import { Button, InputAdornment, TextField } from '@mui/material';
import { ReactComponent as Upload } from '../../../Assests/Icons/Upload.svg'
import { ReactComponent as Cross } from '../../../Assests/Icons/Cross.svg'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function Comment() {
    const [expanded, setExpanded] = React.useState<number | null>(null);
    const [replyText, setReplyText] = React.useState<string | null>(null);
    const [replyTextPrimary, setReplyTextPrimary] = React.useState<string | null>(null);
    const [commentReplyId, setCommentReplyId] = React.useState<number | null>(null);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center",marginTop: 20, overflow:"scroll", marginBottom:"75px"}}>
           <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 10}}>
            {comments?.map((item, index) => (
                <Card key={index} className='comment' elevation={0}>
                    <CardContent sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
                        <div style={{ display: "flex", alignItems: "baseline" }}>
                            <AvatarFun name={"Matt Wingate"} showName={false} />
                        </div>
                        <Typography variant="body2" color="text.secondary" className='typo-Roboto-Regoular-primary3-16-spc'>
                            {item?.com}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "space-between", padding: 1 }}>
                        <div style={{ display: "flex", flexDirection: "row", gap: 10, marginLeft: 20 }}>
                            <Typography className='typo-Roboto-Regoular-primary61-14'>{item?.date}</Typography>
                            <Typography className='typo-Roboto-Regoular-primary61-14'>{item?.time}</Typography>
                        </div>
                        {(expanded !== index && commentReplyId !== index)  && <Button onClick={() => setExpanded(index)} variant='text' sx={{ textTransform: "initial" }}>
                            <Typography className='typo-Roboto-Medium-primary8-14'>{"Reply"}</Typography>
                        </Button>}
                    </CardActions>
                    {(commentReplyId === index && replyTextPrimary) &&<CardContent>
                        <div style={{ display: "flex", flexDirection: "row",  marginLeft: 20, justifyContent:"space-between" }}>
                            <div style={{display:"flex", flexDirection:"row", gap: 10,}}>
                            <Typography className='typo-Roboto-Regoular-primary61-14'>{"You"}</Typography>
                            <Typography className='typo-Roboto-Regoular-primary61-14'>{replyTextPrimary}</Typography>
                            </div>
                            <div>
                            <Button onClick={() => setExpanded(index)} variant='text' sx={{ textTransform: "initial" }}>
                            <Typography className='typo-Roboto-Medium-primary8-14'>{"Edit"}</Typography>
                        </Button>
                        </div>
                        </div>
                    </CardContent> }
                    <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                        <CardContent>
                            <div className='expand-card' style={{ position: "relative" }}>
                                <div className='btndiv'>
                                    <IconButton onClick={() => setExpanded(null)}>
                                        <Cross />
                                    </IconButton>
                                </div>
                                <TextField
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start" sx={{ marginRight: 0 }}>
                                                <IconButton size='small' onClick={() =>{
                                                        setReplyTextPrimary(replyText);
                                                        setExpanded(null);
                                                        setCommentReplyId(index);
                                                    }
                                                }>
                                                    <Upload />

                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        justifyContent: "center",
                                        "& .MuiInputBase-root": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: 0,
                                                borderWidth: "inherit !important"
                                            }
                                        },
                                    }} className='text-fd' placeholder='Reply' />
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
            </div>
            <div className='cmtSendDiv'>
            <TextField
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start" sx={{ marginRight: 0 }}>
                            <IconButton  size='small'>
                                <AttachFileIcon />
                            </IconButton>
                            <IconButton size='small'>
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                sx={{
                    justifyContent: "center",
                    "& .MuiInputBase-root": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                            borderWidth: "inherit !important"
                        }
                    },
                }} className='cmtSendtextfd' placeholder='Type here...' />

            </div>
           
        </div>
    );
}
