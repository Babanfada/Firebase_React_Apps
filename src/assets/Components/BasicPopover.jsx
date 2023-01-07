import USER from "./USER";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { dataContext } from "../../App";
import { useContext } from "react";

export default function BasicPopover() {
  const { handleSignOut } = useContext(dataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div aria-describedby={id} onClick={handleClick}>
        <USER />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "-100px",
          horizontal: "left",
        }}
        // transformOrigin={{
        //   vertical: "-100px",
        //   horizontal: "0",
        // }}
      >
        <Typography sx={{ p: 2 }}>
          <Button onClick={handleSignOut} variant="contained">
            Logout
          </Button>
          {/* <ul>
            <li>
              <a href="#">Add an existing Account</a>
            </li>
            <li>
              <div>Log out @Babanfada</div>
            </li>
          </ul> */}
        </Typography>
      </Popover>
    </div>
  );
}
