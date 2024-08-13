import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

function Contact() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [inquiry, setInquiry] = React.useState("");
  const [errors, setErrors] = React.useState({
    fullName: "",
    email: "",
    inquiry: "",
  });

  const validateForm = () => {
    let tempErrors = { fullName: "", email: "", inquiry: "" };
    tempErrors.fullName = fullName ? "" : "This field is required.";
    tempErrors.email = email ? "" : "This field is required.";
    tempErrors.inquiry = inquiry ? "" : "This field is required.";
    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log({ fullName, email, inquiry });
      // Add your form submission logic here
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        "& .MuiInputLabel-root": { color: "#bfbfbf" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <Grid container spacing={3} justifyContent={"center"}>
          <Grid item xs={12}>
            <h2>Let's get in touch</h2>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <AccountBoxIcon sx={{ fontSize: 30 }} />
              <TextField
                required
                id="filled-required"
                label="Full Name"
                variant="filled"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={!!errors.fullName}
                helperText={errors.fullName}
                inputProps={{ style: { color: "white", backgroundColor: "#0c0c0c60" } }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <EmailIcon sx={{ fontSize: 30 }} />
              <TextField
                required
                id="filled-required"
                label="E-mail"
                variant="filled"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                inputProps={{ style: { color: "white", backgroundColor: "#0c0c0c60"  } }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <QuestionAnswerIcon sx={{ fontSize: 30 }} />

              <TextField
                id="multiline-static"
                label="Inquiry"
                multiline
                rows={4}
                variant="filled"
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                error={!!errors.inquiry}
                helperText={errors.inquiry}
                inputProps={{ style: { color: "white", backgroundColor: "#0c0c0c60"  } }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 10 }}>
            <Button  type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 50 }}>
            <h4>Or reach me at:</h4>
            <p>osmanovicomar@gmail.com</p>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default Contact;
