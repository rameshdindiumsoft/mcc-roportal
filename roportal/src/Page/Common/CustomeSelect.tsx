import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton, OutlinedInput } from '@mui/material';
import { ReactComponent as DownArrow } from '../../Assests/Icons/Down Arrow.svg';

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
                </Select>
            </FormControl>
        </Box>
    );
}
