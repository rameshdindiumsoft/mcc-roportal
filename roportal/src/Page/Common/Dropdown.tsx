import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton, OutlinedInput } from '@mui/material';
import { ReactComponent as DownArrow } from '../../Assests/Icons/Down Arrow.svg';

type DropdownProps = {
    value: string, 
    handleChange: any, 
    statusMenuItem: Array<any>,
    children: React.ReactNode
}
export default function Dropdown({value, handleChange, statusMenuItem, children }: DropdownProps) {
   
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    input={<OutlinedInput id="select-multiple-chip" />}
                    onChange={handleChange}
                    IconComponent={(props) => (
                        <IconButton {...props}>
                            <DownArrow />
                        </IconButton>
                    )}
                    sx={{
                        height: "56px",
                        marginTop:"12px",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        border: "1px solid #E2DFDF !important",
                        borderRadius: "12px",
                        opacity: 1,
                        "& .MuiInputBase-input":{
                            paddingLeft:"6px"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2DFDF !important",
                            borderRadius: "12px",
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
