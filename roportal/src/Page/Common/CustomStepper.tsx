import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function CustomStepper() {
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ maxWidth: 400 }}>
        <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{width:"43%", display:"flex", alignItems:"center"}}><Typography>{"Stages"}</Typography></div>
            <div style={{width:"33%", display:"flex", alignItems:"center"}}><Typography>{"ETD"}</Typography></div>
            <div style={{width:"33%", display:"flex", alignItems:"center"}}><Typography>{"ATD"}</Typography></div>
        </div>
      <Stepper activeStep={0} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              // optional={
              //   index === 2 ? (<>
              //     <Typography variant="caption">Last step</Typography>
              //     </>
              //   ) : null
              // }
            >
              <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{width:"33%", display:"flex", alignItems:"center"}}>{"In Time"}</div>
                <div style={{width:"33%", display:"flex", alignItems:"center"}}>{"19 Aug 2022 2:40pm"}</div>
                <div style={{width:"33%", display:"flex", alignItems:"center"}}>{"19 Aug 2022 2:40pm"}</div>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
