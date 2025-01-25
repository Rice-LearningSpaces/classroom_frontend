import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";

// Styled Components
const StyledBox = styled(Box)`
  width: 100%;
`;

const TabPanelBox = styled(Box)`
  padding: 1.5rem;
  background-color: var(--offWhite);
  border: 1px solid var(--mainGrey);
  border-radius: 0.5rem;
`;

const StyledTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    background-color: var(--primaryColor);
  }
`;

const StyledTab = styled(Tab)`
  &.MuiTab-root {
    text-transform: uppercase;
    font-family: "Verdana", sans-serif;
    color: var(--mainBlack);
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
  }

  &.Mui-selected {
    color: var(--primaryColor);
    font-weight: bold;
  }
`;

const TabContentTypography = styled(Typography)`
  font-size: 1rem;
  color: var(--mainBlack);
  line-height: 1.5;
`;

function TabPanel(props) {
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
        <TabPanelBox>
          <TabContentTypography>{children}</TabContentTypography>
        </TabPanelBox>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledBox>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <StyledTab label="Item One" {...a11yProps(0)} />
          <StyledTab label="Item Two" {...a11yProps(1)} />
          <StyledTab label="Item Three" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </StyledBox>
  );
}
