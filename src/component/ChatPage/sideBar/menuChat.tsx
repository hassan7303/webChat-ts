import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
function MenuChate() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  return (
    <div className="box_users">
      <div className="list_userNames_chat">
        <Box>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              style={{ borderBottom: "1px solid black" }}
            >
              <Tab label="همه" {...a11yProps(0)} />
              <Tab label="شخصی" {...a11yProps(1)} />
              <Tab label="گروه ها" {...a11yProps(2)} />
              <Tab label=" کانال ها" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
          <TabPanel
            className="scrol_menu"
            value={value}
            index={0}
            dir={!theme.direction}
          >
            <div className="users_cadr">
              <div className="avatar_in_list_user">
                <Avatar alt="ا" src="./header/girl-5.jpg" />
              </div>
              <div>
                <p className="name_user_in_list">اقای عسکری</p>
                <div className="message_end">
                  <p>سلام خوبی</p>
                </div>
              </div>
              <div className="time_recently">
                <p>۹:۱۸</p>
              </div>
            </div>
            <div className="users_cadr">
              <div className="avatar_in_list_user">
                <Avatar alt="ق" src="./header/girl-5.jpg" />
              </div>
              <div>
                <p className="name_user_in_list">قریبه در شهر </p>
                <div className="message_end">
                  <p>بیا بریم بیرون </p>
                </div>
              </div>
              <div className="time_recently">
                <p>۱۲:۲۳</p>
              </div>
            </div>
            <div className="users_cadr">
              <div className="avatar_in_list_user">
                <Avatar alt="گ" src="./header/girl-5.jpg" />
              </div>
              <div>
                <p className="name_user_in_list">گروه چغوکان دریایی </p>
                <div className="message_end">
                  <p>سلام خوبی</p>
                </div>
              </div>
              <div className="time_recently">
                <p>۱۵:۳۸</p>
              </div>
            </div>
            <div className="users_cadr">
              <div className="avatar_in_list_user">
                <Avatar alt="ک" src="./header/girl-5.jpg" />
              </div>
              <div>
                <p className="name_user_in_list"> کانال مرغان سحرایی</p>
                <div className="message_end">
                  <p>سلام دوستان گلم</p>
                </div>
              </div>
              <div className="time_recently">
                <p>۹:۱۸</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className="scrol_menu"
            value={value}
            index={1}
            dir={!theme.direction}
          >
            <div className="users_cadr">
              <div className="avatar_in_list_user">
                <Avatar alt="ا" src="./header/girl-5.jpg" />
              </div>
              <div>
                <p className="name_user_in_list">اقای عسکری</p>
                <div className="message_end">
                  <p>سلام خوبی</p>
                </div>
              </div>
              <div className="time_recently">
                <p>۹:۱۸</p>
              </div>
            </div>
            <div className="users_cadr">
              <div className="avatar_in_list_user">
                <Avatar alt="ق" src="./header/girl-5.jpg" />
              </div>
              <div>
                <p className="name_user_in_list">قریبه در شهر </p>
                <div className="message_end">
                  <p>بیا بریم بیرون </p>
                </div>
              </div>
              <div className="time_recently">
                <p>۱۲:۲۳</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className="scrol_menu"
            value={value}
            index={2}
            dir={!theme.direction}
          >
            <div className="users_cadr">
              <div className="avatar_in_list_user">
                <Avatar alt="گ" src="./header/girl-5.jpg" />
              </div>
              <div>
                <p className="name_user_in_list">گروه چغوکان دریایی </p>
                <div className="message_end">
                  <p>سلام خوبی</p>
                </div>
              </div>
              <div className="time_recently">
                <p>۱۵:۳۸</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className="scrol_menu"
            value={value}
            index={3}
            dir={!theme.direction}
          >
            <div className="users_cadr">
              <div className="avatar_in_list_user">
                <Avatar alt="ک" src="./header/girl-5.jpg" />
              </div>
              <div>
                <p className="name_user_in_list"> کانال مرغان سحرایی</p>
                <div className="message_end">
                  <p>سلام دوستان گلم</p>
                </div>
              </div>
              <div className="time_recently">
                <p>۹:۱۸</p>
              </div>
            </div>
          </TabPanel>
          {/* </SwipeableViews> */}
        </Box>
      </div>
      <Fab
        color="primary"
        aria-label="edit"
        style={{ position: "absolute", bottom: "5rem", left: "1rem" }}
      >
        <EditIcon />
      </Fab>
    </div>
  );
}
export default MenuChate;
