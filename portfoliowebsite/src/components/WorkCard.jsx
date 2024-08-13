import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MyCard = ({ imgSrc, title, description }) => (
  <Card className="workcard" sx={{ maxWidth: 545, minHeight: 380 }}>
    <CardContent>
      <img
        src={imgSrc}
        alt={title}
        style={{ width: "100%", height: "auto", borderRadius: "10pt" }}
      />
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export default MyCard;
