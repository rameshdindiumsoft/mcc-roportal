import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function CustomDatePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          inputFormat="MM/DD/YYYY"
          value={value}
        //   components={{
        //     OpenPickerIcon: AccessibleIcon
        //   }}
          onChange={handleChange}
          renderInput={(params: any) => <TextField sx={{
            "& input::placeholder": {
                fontSize: "14px",
                fontStyle:"italic",
            },
            "& .MuiInputBase-root":{
                height:"40px !important",
                minHeight:"40px",
                width:"195px",
                "& .MuiOutlinedInput-notchedOutline":{
                    border:0,
                    borderWidth:0
                }
            },
            background:"#F5F5F5 0% 0% no-repeat padding-box"
        }} {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
