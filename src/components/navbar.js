import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Modal, Button, Form } from "react-bootstrap";
import Register from "./register";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [showRegister, setShowRegister] = React.useState(false);

  const handleShow = (value) => {
    console.log("The value: ", value);
    setShowRegister(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ThoughtXChange
          </Typography>
          <Button color="inherit" onClick={() => handleShow(true)}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      {showRegister ? <Register updateParent={handleShow} /> : <div></div>}
    </div>
  );
}
