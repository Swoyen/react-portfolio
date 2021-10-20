import { Button } from "@material-ui/core";
import React from "react";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

import Subtitle from "../../controls/Subtitle";

const ResumeDownloadButton = () => {
  const handleOpen = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <div>
      <Subtitle variant="body2" color="textSecondary">
        Download my resume as PDF
      </Subtitle>
      <Button
        color="primary"
        variant="contained"
        startIcon={<GetAppRoundedIcon />}
        onClick={() => handleOpen("/files/Resume Swoyen Suwal.pdf")}
      >
        Download
      </Button>
    </div>
  );
};

export default ResumeDownloadButton;
