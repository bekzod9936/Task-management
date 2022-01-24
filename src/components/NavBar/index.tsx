import Button from "@mui/material/Button";
import styles from "./NavBar.module.scss";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import Divider from "@mui/material/Divider";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = anchorEl ?? "simple-popover";
  return (
    <div className={styles.container}>
      <Button
        aria-describedby={id}
        className={styles.button}
        onClick={handleClick}
      >
        Create
      </Button>
      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className={styles.popover}>
          <div>Create</div>
          <Divider light />
        </div>
      </Popover>
      <div className={styles.title}>Task-Management</div>
    </div>
  );
};

export default NavBar;
