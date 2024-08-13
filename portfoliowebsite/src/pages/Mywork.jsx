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
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%201.png?alt=media&token=523fc45a-d4fc-4444-943d-40e8fff8eca5"}
            title={"Poster and Banner for Google Developer Group Sarajevo"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/gdg%2076.png?alt=media&token=aaeaffa9-0ed0-4fbe-ab62-30ffb76592a5"}
            title={"Event Banner for Google Developer Group Sarajevo"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/health%20snack%20design.png?alt=media&token=8ebab5bd-ce10-464a-9273-66508587d27d"}
            title={"Marketing Design for Korean Health Snack Company"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/health%20snack%20design%20barbell.png?alt=media&token=b8200f0c-fe7b-4cc4-bb1f-047a4ab927c5"}
            title={"Marketing Design for Korean Health Snack Company"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%202.png?alt=media&token=e4318c0f-404f-440a-b4c1-cec9c7b42fee"}
            title={"KK Bosna Gameday Poster"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%204.png?alt=media&token=a65e4066-752e-4b30-93d9-f9e2d0d1ba8a"}
            title={"Video Game Menu Redesign"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/brochures.png?alt=media&token=65427e43-8191-43d7-8b90-f9f73e8a8018"}
            title={"IBU Programming Brochure"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%207.png?alt=media&token=c9c9d5ba-0400-4bb4-9d00-57ee36d4bfa4"}
            title={"SeatSaver Promo Poster"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%208.png?alt=media&token=fcc4a967-b41e-4e09-bfba-1287e010cf98"}
            title={"Construction Company Logo"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%209.png?alt=media&token=0f283e3e-79f9-490f-91de-5ea4351ebc60"}
            title={"HealthMate Promo Logo"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2010.png?alt=media&token=d03955fc-85e9-49b6-bbd1-28ca2959fe84"}
            title={"IdeaLab Logo"}
            description={""}
          />
        </Grid>
      </Grid>
      <h1 ref={refs.uxUi}>UX/UI</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2011.png?alt=media&token=e86d23ab-b5b0-41ad-ac61-965ff321e742"}
            title={"Dono Mobile Application"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%206.png?alt=media&token=aca7b4c3-6414-4b09-bc56-3e411c815e01"}
            title={"Traverse Transport Ticket Website"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%205.png?alt=media&token=230f6ae5-7550-4858-ad11-7ae0ff79c0b5"}
            title={"HealthMate Mobile Application"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2013.png?alt=media&token=fd55e8df-64cf-48c6-92e7-49676a2fc245"}
            title={"Fauxica Online Store Website"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/seatsaver%20ui.png?alt=media&token=c731f471-22af-4452-97d2-46e4c31eb5c9"}
            title={"UI Design for SeatSaver Website"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2012.png?alt=media&token=26e73dc1-22fd-41cc-8eb6-fd47b68463f6"}
            title={"Handyman Repair Kit Mobile Application"}
            description={""}
          />
        </Grid>
      </Grid>
      <h1 ref={refs.webDev}>Web Development</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2014.png?alt=media&token=62e08444-6622-4306-860b-6ec4eecd3f2e"}
            title={"ATB - All Things Basketball Website"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2015.png?alt=media&token=a42fe04c-d727-4014-a351-87f6ebc6817d"}
            title={"Recipe Manager WebApp"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2016.png?alt=media&token=da3af5b8-20d0-4bab-956a-f2b000d2b41f"}
            title={"Portfolio Website"}
            description={""}
          />
        </Grid>
      </Grid>
      <h1 ref={refs.illustration}>Illustrations</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2017.png?alt=media&token=2984f2fc-24fe-4ea5-90f8-8829eceb53e6"}
            title={"Stray (video game) Fanart"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2018.png?alt=media&token=8cf25016-3303-4fb7-b005-75952032bd82"}
            title={"Taxi Driver"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2019.png?alt=media&token=c60eb1f1-c829-4e9e-8b01-200e27347cbf"}
            title={"Survivor's Gauntlet Concept Art"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2020.png?alt=media&token=3a619030-12ec-491e-bf49-089dadc121b7"}
            title={"Gentle Giant"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2022.png?alt=media&token=a5824ab4-680f-491e-8505-951671bf5c64"}
            title={"Nissan Skyline GT-R R34 Sketch"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2023.png?alt=media&token=d9c43010-f601-4155-ac8a-120c281379ac"}
            title={"Bonfire"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2021.png?alt=media&token=af8cdd72-0800-42c3-82a8-56d042a986fd"}
            title={"The Witcher 3 Fanart"}
            description={""}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MyWork;
