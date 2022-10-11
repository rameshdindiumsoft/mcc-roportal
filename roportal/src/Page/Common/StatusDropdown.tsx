import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OutlinedInput } from '@mui/material';
import { statusFullTagMenuItem } from '../Dashboard/utils/contants';

type DropdownProps = {
    value: string, 
    handleChange: any, 
    children: React.ReactNode
}
export default function StatusDropdown({value, handleChange, children }: DropdownProps) {
    let data = statusFullTagMenuItem?.find((item) => item.label === value);

    return (
        <Box sx={{ minWidth: 140 }}>
            <FormControl fullWidth style={{padding:"0px 20px 0px 20px"}}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    // input={<OutlinedInput id="select-multiple-chip" />}
                    onChange={handleChange}
                    sx={{
                        height: "31px",
                        borderRadius: "4px",
                        opacity: 1,
                        width:"100%",
                        minWidth:"185px",
                        background:`${data?.divcss} !important`,
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                            borderWidth: "inherit !important"
                        }
                    }}
                >
                    {children}
                </Select>
            </FormControl>
        </Box>
    );
}
