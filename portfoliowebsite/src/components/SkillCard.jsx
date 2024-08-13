import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MyCard = ({ icon, title, description }) => (
  <Card className="skillcard" sx={{ maxWidth: 345, minHeight: 280 }}>
    <CardContent>
      {React.cloneElement(icon, { className: "icon" })}
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default MyCard;
