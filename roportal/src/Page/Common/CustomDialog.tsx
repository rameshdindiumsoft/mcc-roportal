import * as React from 'react';
import Dialog from '@mui/material/Dialog';


export interface SimpleDialogProps {
  open: boolean;
  onClose: Function;
  children: React.ReactNode
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, children } = props;

  return (
    <Dialog onClose={() => onClose()} open={open} sx={{
      "& .MuiPaper-root":{
        overflow:"inherit"
      }
    }}>
     {children}
    </Dialog>
  );
}

type customDialogProps = {
  children: React.ReactNode,
  open: boolean,
  handleClick: Function
}
export default function CustomDialog({ children, handleClick, open}: customDialogProps) {
  
  return (
      <SimpleDialog
        open={open}
        onClose={() => handleClick()}
        children={children}
      />
  );
}
