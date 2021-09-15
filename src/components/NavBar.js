import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  makeStyles,
  ButtonGroup,
  Button,
  Tooltip,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const handleOpen = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <AppBar color="inherit" variant="outlined" position="static">
      <Toolbar>
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
            onClick={() => handleOpen("https://www.linkedin.com/in/swoyen")}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
