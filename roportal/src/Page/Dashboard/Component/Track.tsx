import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomStepper from '../../Common/CustomStepper';
import '../../../Style/component/Typography.css';
import History from './History';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Track() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width:"100%" }}>
        <Tabs sx={{width:"100%"}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{width:"50%", textTransform:"initial"}} label="Track Status" {...a11yProps(0)} />
          <Tab sx={{width:"50%", textTransform:"initial"}} label="History" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{display:"flex", flexDirection:"row", height:"200px"}}>
            <CustomStepper />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
            <History />
      </TabPanel>
    </Box>
  );
}
