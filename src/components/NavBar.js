import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import { ArrowBackIosRounded } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "./DarkModeSwitch";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const handleOpen = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <AppBar color="primary" variant="outlined" position="static">
      <Toolbar>
        {location.pathname === "/" ? (
          <>
            {" "}
            <Typography
              style={{ fontWeight: 700, textTransform: "uppercase" }}
              variant="h6"
              color="textSecondary"
            >
              Swoyen
            </Typography>
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",

                //alignContent: "space-evenly",
              }}
            >
              <Typography
                variant="subtitle1"
                color="initial"
                display="inline"
                style={{ padding: "15px", fontWeight: 600 }}
              >
                <a className={classes.link} href="#Projects">
                  Projects
                </a>
              </Typography>

              <Typography
                variant="subtitle1"
                color="initial"
                display="inline"
                style={{ padding: "15px", fontWeight: 600 }}
              >
                <a className={classes.link} href="#Resume">
                  Resume
                </a>
              </Typography>
              <Typography
                variant="subtitle1"
                color="initial"
                display="inline"
                style={{ padding: "15px", fontWeight: 600 }}
              >
                <a className={classes.link} href="#Contact">
                  Contact
                </a>
              </Typography>
            </div>
          </>
        ) : (
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "left",

              //alignContent: "space-evenly",
            }}
          >
            <Link to="/">
              <IconButton aria-label="">
                <ArrowBackIosRounded />
              </IconButton>
            </Link>
          </div>
        )}

        <DarkModeSwitch />
        <Tooltip title="View LinkedIn Profile">
          <IconButton
            aria-label="open linkedin"
            onClick={() => handleOpen("https://www.linkedin.com/in/swoyen")}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="View Github Profile">
          <IconButton
            aria-label="open github"
            onClick={() => handleOpen("https://github.com/Swoyen")}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
