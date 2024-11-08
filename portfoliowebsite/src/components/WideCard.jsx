import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WideCard = ({ imgSrc, title, description }) => (
  <Card className="workcard" sx={{ maxWidth: 1030, minHeight: 500 }}>
    <CardContent>
      <img
        src={imgSrc}
        alt={title}
        style={{ width: "100%", height: "auto", borderRadius: "10pt" }}
      />
      <Typography
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

export default WideCard;
