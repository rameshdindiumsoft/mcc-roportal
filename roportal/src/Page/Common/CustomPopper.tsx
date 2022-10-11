import * as React from 'react';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { ReactComponent as IconMoreSharp} from '../../Assests/Icons/IconMoreSharp.svg';
import { IconButton } from '@mui/material';

type CustomPopperProps = {
    anchorEl: any,
    placement: any,
    open: any,
    children: React.ReactNode
}
export default function CustomPopper({anchorEl, open, placement, children}: CustomPopperProps) {

  return (
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                borderRadius: "14px",
                boxShadow:"0px 2px 1px -1px rgb(0 0 0 / -2%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 6%)"
            }}>
                {children}
            </Paper>
          </Fade>
        )}
      </Popper>
  );
}
