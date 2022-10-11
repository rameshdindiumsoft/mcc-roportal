import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type props={
  open: boolean,
  setOpen: (value: boolean) => void
}
export const SuccessSnakbar = (props: props) => {
  const { open, setOpen } = props;
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Changes updated Successfully
        </Alert>
      </Snackbar>
  )
}
export const FaieldSnakbar = (props: props) => {
  const { open, setOpen } = props;
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Changes updated Faield
        </Alert>
      </Snackbar>
  )
}