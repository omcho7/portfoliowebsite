import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MyCard = ({ imgSrc, title, description }) => (
  <Card className="workcard" sx={{ maxWidth: 545, minHeight: 380 }}>
    <CardContent>
      <img
        src={imgSrc}
        alt={title}
        style={{ width: "100%", height: "auto", borderRadius: "15pt" }}
      />
      <Typography
      className="workTitle"
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15pt' }}
      >
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export default MyCard;
