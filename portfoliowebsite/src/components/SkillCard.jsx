import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MyCard = ({ icon, title, description }) => (
  <Card className="skillcard">
    <CardContent>
      {React.cloneElement(icon, { className: "icon" })}
      <Typography gutterBottom variant="h5" component="div" className="title" sx={{ fontFamily: 'Montserrat, sans-serif'}}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif'}}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default MyCard;
