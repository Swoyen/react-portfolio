import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar color="inherit" variant="outlined" position="static">
      <Toolbar>
        <IconButton aria-label="">P</IconButton>
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
            style={{ padding: "15px", fontWeight: 500 }}
          >
            Projects
          </Typography>

          <Typography
            variant="subtitle1"
            color="initial"
            display="inline"
            style={{ padding: "15px", fontWeight: 500 }}
          >
            Resume
          </Typography>
          <Typography
            variant="subtitle1"
            color="initial"
            display="inline"
            style={{ padding: "15px", fontWeight: 500 }}
          >
            Contact
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
