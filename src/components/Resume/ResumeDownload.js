import { Button } from "@material-ui/core";
import React from "react";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import Subtitle from "../../controls/Subtitle";
const ResumeDownloadButton = () => {
  return (
    <div>
      <Subtitle variant="body2" color="textSecondary">
        Download my resume as PDF
      </Subtitle>
      <Button
        color="primary"
        variant="contained"
        startIcon={<GetAppRoundedIcon />}
      >
        Download
      </Button>
    </div>
  );
};

export default ResumeDownloadButton;
