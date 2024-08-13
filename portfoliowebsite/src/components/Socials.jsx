import React from "react";
import { Button, Typography } from "@mui/material";

const Socials = ({ icon, text, link }) => {
  return (
    <Button
      href={link}
      target="_blank"
      startIcon={React.cloneElement(icon, { sx: { color: "white", fontSize: "30pt !important" } })}
      variant="contained"
       sx={{
        textTransform: "none", // Prevent text from being transformed to uppercase
        display: "flex",
        alignItems: "center",  // Center items vertically
        padding: "5px", // Optional: Adjust padding for better alignment
        backgroundColor: "transparent"
      }}
     
    >
        <Typography gutterBottom component="p" sx={{
             display: "flex",
             alignItems: "center",
             marginBottom: "0",
             fontSize: "22px",
                       '@media (max-width: 600px)': {
            fontSize: "14px", // Adjust text size for smaller screens
          },
             color: "white" }}>
        {text}
      </Typography>
      
    </Button>
  );
};

export default Socials;
