import React, { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import ErrorMessage from "../../controls/ErrorMessage";

const defaultValues = { email: "", fullname: "", message: "" };
const ContactForm = () => {
  const theme = useTheme();
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (success) {
      setTimeout(() => {
        setTimeout(() => {
          if (mounted) setSuccess(false);
        }, 2000);
      });
    }
  }, [success]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    let temp = {};
    temp.email = values.email !== "" ? "" : "Email is required.";
    temp.fullname = values.fullname !== "" ? "" : "Full name is required.";
    temp.message = values.message !== "" ? "" : "Please Enter Some Comments.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const resetForm = () => {
    setValues(defaultValues);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("?");
      // emailjs
      //   .sendForm(
      //     emailKey.SERVICE_ID,
      //     emailKey.TEMPLATE_ID,
      //     e.target,
      //     emailKey.USER_ID
      //   )
      //   .then((result) => {
      setSuccess(true);
      resetForm();
      // })
      // .catch((error) => console.log(error.text));
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid
        style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
        container
        direction="row"
        spacing={1}
        justifyContent="center"
      >
        <Grid item sm={8} xs={11}>
          <TextField
            label="Email"
            placeholder="Enter your email address here"
            id="email"
            name="email"
            variant="outlined"
            value={values.email}
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          {errors.email ? <ErrorMessage message={errors.email} /> : ""}
        </Grid>
        <Grid item sm={8} xs={11}>
          <TextField
            label="Full Name"
            placeholder="Enter your full name here"
            id="fullname"
            name="fullname"
            variant="outlined"
            value={values.fullname}
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          {errors.fullname ? <ErrorMessage message={errors.fullname} /> : ""}
        </Grid>
        <Grid item sm={8} xs={11}>
          <TextField
            label="Comments"
            placeholder="Type here"
            id="message"
            name="message"
            variant="outlined"
            multiline
            minRows={7}
            maxRows={10}
            value={values.message}
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          {errors.message ? <ErrorMessage message={errors.message} /> : ""}
        </Grid>
        <Grid item xs={12}>
          <Collapse in={success}>
            <Typography variant="subtitle2">
              Message Successfully sent!
            </Typography>
          </Collapse>
        </Grid>
      </Grid>

      <Button
        startIcon={<SendRoundedIcon />}
        variant="contained"
        color="primary"
        type="submit"
      >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
