import React from "react";
import Grid from "@mui/material/Grid";
import WorkCard from "../components/WorkCard";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MyWork() {
  const location = useLocation();
  const hash = location.hash.substring(1);
  const refs = {
    graphicDesign: useRef(null),
    uxUi: useRef(null),
    webDev: useRef(null),
    illustration: useRef(null),
  };

  useEffect(() => {
    if (hash && refs[hash]) {
      setTimeout(() => {
        refs[hash].current.scrollIntoView({ behavior: "smooth" });
      }, 10); // delay
    }
  }, [hash]);
  return (
    <div>
      <h1 ref={refs.graphicDesign}>Graphic Design</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/TqYR46M/Slide-4-3-1.png"}
            title={"GDG Poster and Banner"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/Bw9ZJZc/Slide-4-3-2.png"}
            title={"KK Bosna Gameday Poster"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/4KX4pLq/Slide-4-3-4.png"}
            title={"Video Game Menu Redesign"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/vXzvCWD/Slide-4-3-3.png"}
            title={"IBU Programming Brochure"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/v1S1YSf/Slide-4-3-7.png"}
            title={"SeatSaver Promo Poster"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/1fPc0tw/Slide-4-3-8.png"}
            title={"Construction Company Logo"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/m0z8rpZ/Slide-4-3-9.png"}
            title={"HealthMate Promo Logo"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/TP1tsZw/Slide-4-3-10.png"}
            title={"IdeaLab Logo"}
            description={""}
          />
        </Grid>
      </Grid>
      <h1 ref={refs.uxUi}>UX/UI</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/vPt4Gm3/Slide-4-3-11.png"}
            title={"Dono Mobile Application"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/pnbXhF8/Slide-4-3-6.png"}
            title={"Traverse Transport Ticket Website"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/HHwhTRZ/Slide-4-3-5.png"}
            title={"HealthMate Mobile Application"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/0YRQ4cV/Slide-4-3-13.png"}
            title={"Fauxica Online Store Website"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/Wvj2mBq/Slide-4-3-12.png"}
            title={"Handyman Repair Kit Mobile Application"}
            description={""}
          />
        </Grid>
      </Grid>
      <h1 ref={refs.webDev}>Web Development</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/QcWJ9Gd/Slide-4-3-14.png"}
            title={"ATB - All Things Basketball Website"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/TvcKyHy/Slide-4-3-15.png"}
            title={"Recipe Manager WebApp"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/ZhhWZmb/Slide-4-3-16.png"}
            title={"Portfolio Website"}
            description={""}
          />
        </Grid>
      </Grid>
      <h1 ref={refs.illustration}>Illustrations</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/2gvW6hs/Slide-4-3-17.png"}
            title={"Stray (video game) Fanart"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/0ffpFvN/Slide-4-3-18.png"}
            title={"Taxi Driver"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/Yb9qtbw/Slide-4-3-19.png"}
            title={"Survivor's Gauntlet Concept Art"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/nDTDPQt/Slide-4-3-20.png"}
            title={"Gentle Giant"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/7ysWkch/Slide-4-3-22.png"}
            title={"Nissan Skyline GT-R R34 Sketch"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/BV3ysFH/Slide-4-3-23.png"}
            title={"Bonfire"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://i.ibb.co/LNLY2BC/Slide-4-3-21.png"}
            title={"The Witcher 3 Fanart"}
            description={""}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MyWork;
