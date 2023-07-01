import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneIcon from "@mui/icons-material/Phone";
import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SearchHandel } from "./SearchHandler";
import { useState } from "react";

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [searchBox, setSearchBox] = useState(false);
  return (
    <AppBar position="fixed">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="profile_information">
          <Avatar alt="ا" src="./girl-5.jpg" />
          <div className="header_name_user">
            <p className="data_username_profill">اقای عسکری</p>
            <p className="date_seen">اخرین بازدید به تازگی</p>
          </div>
        </div>
        <div className="icons_header">
          <svg className="icons">
            <PhoneIcon />
          </svg>
          <svg className="icons" onClick={() => setSearchBox(!searchBox)}>
            <SearchIcon />
          </svg>
          {searchBox && <SearchHandel />}
          <div className="icons flex justify-center">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon style={{ color: "white" }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>بی صدا کردن</MenuItem>
              <MenuItem onClick={handleClose}>اشتراک گذاری</MenuItem>
              <MenuItem onClick={handleClose}>مسدود کردن </MenuItem>
              <MenuItem onClick={handleClose}>حذف چت</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
