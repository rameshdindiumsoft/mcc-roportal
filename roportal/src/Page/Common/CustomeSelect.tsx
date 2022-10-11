import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton, MenuItem, OutlinedInput, Typography } from '@mui/material';
import { ReactComponent as DownArrow } from '../../Assests/Icons/Down Arrow.svg';
import { AvatarFun } from '../Dashboard/utils/action';

type CustomeSelectProps = {
    value: string | undefined, 
    handleChange: any  | undefined, 
    children: React.ReactNode | undefined
}
export default function CustomeSelect({value, handleChange, children}:CustomeSelectProps) {

    return (
        <Box sx={{ width: "195px" }}>
            <FormControl fullWidth >
                <Select
                    displayEmpty
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    placeholder='select'
                    input={<OutlinedInput placeholder='select' id="select-multiple-chip" />}
                    onChange={handleChange}
                    IconComponent={(props) => (
                        <IconButton {...props}>
                            <DownArrow />
                        </IconButton>
                    )}
                    // renderValue={() => {
                    //     return (<Typography style={{
                    //         display:"flex",
                    //         textAlign:"left",
                    //         fontSize: "14px",
                    //         color:"#7C7C7C",
                    //         fontWeight:"lighter"
                    //     }}>{!value && 'Select'}</Typography>)
                    // }}
                    sx={{
                        height: "40px",
                        alignSelf: "end",
                        background: "#F5F5F5 0% 0% no-repeat padding-box",
                        opacity: 1,
                        borderRadius: 0,
                        width: "195px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                            borderWidth: "inherit !important"
                        }
                    }}
                >
                    {children}
                    {/* {statusMenuItem?.map((item) => (
                        <MenuItem sx={{
                            padding:"8px"
                        }} key={item.id} value={item.label}>
                             <div className={item.divcss}>
                                <StatusTypography className={item.typographycss}>{item.label}</StatusTypography>
                            </div>
                        </MenuItem>
                    ))} */}
                </Select>
            </FormControl>
        </Box>
    );
}
