import React from "react";
import {Grid, Box} from "@mui/material";
import WorkCard from "../components/WorkCard";
import WideCard from "../components/WideCard";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ModalTrigger from "../components/ModalTrigger";

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
      <h1 ref={refs.graphicDesign} style={{ marginTop: "10%" }}>Graphic Design</h1>
      <Grid container spacing={3}>

        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"} >
          <WideCard
          
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/devfest%20banner-min.png?alt=media&token=355a80d1-4d92-4c5f-8318-23fce2aa79f0"}
            title={"Official Banner for Google Developer Group Sarajevo DevFest 2024"}
            description={""}
          />
        </Grid>
        
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2026.png?alt=media&token=fd12e8a5-aead-4922-8a8e-95d3e36f510a"}
            title={"Panel Discussion #1 | GDG Sarajevo | Featured on DevFest Sarajevo 2024"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2025.png?alt=media&token=3540311d-39d3-4801-8622-088cbcbd5eb6"}
            title={"Panel Discussion #2 | GDG Sarajevo | Featured on DevFest Sarajevo 2024"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%201.png?alt=media&token=523fc45a-d4fc-4444-943d-40e8fff8eca5"}
            title={"Poster and Banner | Google Developer Group Sarajevo"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/gdg%2076.png?alt=media&token=aaeaffa9-0ed0-4fbe-ab62-30ffb76592a5"}
            title={"Event Banner | Google Developer Group Sarajevo"}
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
            title={"HealthMate Logo | IEEE Innovation Nation"}
            description={""}
          />
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2010.png?alt=media&token=d03955fc-85e9-49b6-bbd1-28ca2959fe84"}
            title={"IdeaLab Logo Commision"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2024.png?alt=media&token=93333b7c-eaf9-4853-9f53-24721392b7cf"}
            title={"Verdi Logo | Eco Volunteering Platform | Good Hackathon 2024 Winner"}
            description={""}
          />
        </Grid>

        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <WorkCard
            imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2027.png?alt=media&token=773cc6e1-815d-450f-a4d5-21e9417ffc9b"}
            title={"Cinema Infographic for Advertising Company"}
            description={""}
          />
        </Grid>
      </Grid>
      <h1 ref={refs.uxUi} style={{ marginTop: "10%" }}>UX/UI</h1>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
            <WorkCard
              imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Craftify%20thumbnail.png?alt=media&token=4016479a-7ecd-4426-bfb0-0836563bb6b8"}
              title={"Craftify Desktop Application"}
              description={""}
            />
            <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Craftify%20Screens.PNG?alt=media&token=f955aa70-b557-4115-b989-2e0a64dd6b5e"
                  title="Craftify"
                  description="Craftify is a desktop application that helps users organize and manage their crafting supplies. The app offers a variety of features, including inventory management, project tracking, scheduling etc. Worked with a team of 5 for a University project."
                  link="https://www.figma.com/proto/UTiJ1pfENlv5pXtPaRAmpA/HCI-project?node-id=189-2838&t=2CmEf8Oew5uHtnj5-1&scaling=min-zoom&content-scaling=fixed&page-id=46%3A2&starting-point-node-id=189%3A2716"
                  buttonText="View Prototype"
                  showButton={1}
              />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
            <WorkCard
              imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/craftify%20mobile%20thumbnail.png?alt=media&token=706c2030-b35f-4a22-9fd1-76f9e46a16fe"}
              title={"Craftify Mobile Application"}
              description={""}
            />
            <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Craftify%20mobile%20screens.PNG?alt=media&token=e0d771d4-81f2-410b-85e7-22aba9cc1926"
                  title="Craftify"
                  description="Craftify is a desktop application that helps users organize and manage their crafting supplies. The app offers a variety of features, including inventory management, project tracking, scheduling etc. Worked with a team of 5 for a University project."
                  link="https://www.figma.com/proto/UTiJ1pfENlv5pXtPaRAmpA/HCI-project?node-id=308-1901&t=59e6RNB3aJ1WsXe5-1&scaling=scale-down&content-scaling=fixed&page-id=308%3A1900&starting-point-node-id=308%3A1901"
                  buttonText="View Prototype"
                  showButton={1}
              />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
            <WorkCard
              imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/SarAI%20thumbnail.png?alt=media&token=eac6b232-e74b-4a8d-a608-32d324031c83"}
              title={"SarAI Hackathon Website"}
              description={""}
            />
            <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/SarAI%20thumbnail.png?alt=media&token=eac6b232-e74b-4a8d-a608-32d324031c83"
                  title="SarAI Hackathon Website"
                  description="Promotional Website for the SarAI Hackathon 2024. The website offers information about the event, registration, and a schedule of the event."
                  link="http://saraihackathon.tilda.ws/"
                  buttonText="Visit Website"
                  showButton={1}
              />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
            <WorkCard
              imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2011.png?alt=media&token=e86d23ab-b5b0-41ad-ac61-965ff321e742"}
              title={"Dono Mobile Application"}
              description={""}
            />
            <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Dono%20screens.png?alt=media&token=2b8be7fe-9329-489e-bbb8-59e48233842a"
                  title="Dono Mobile Application"
                  description="Mobile application for tracking, donating, and managing blood donations. Collaborated with a team of developers to create a user-friendly and intuitive experience for users."
                  link=""
                  buttonText="View Prototype"
              />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
            <WorkCard
              imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%206.png?alt=media&token=aca7b4c3-6414-4b09-bc56-3e411c815e01"}
              title={"Traverse Transport Ticket Website"}
              description={""}
            />
            <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Traverse%20screens.PNG?alt=media&token=288c87c2-321b-43b6-98a5-fb452bdbff05"
                  title="Traverse - Transport Ticket Website"
                  description="Traverse addresses the need for a unified platform where users can purchase bus tickets from any bus company within BiH. The website offers a modern and intuitive interface, allowing users to easily create accounts, log in, choose trips, and purchase tickets using various payment methods."
                  link="https://www.behance.net/gallery/201288893/Traverse-Website-for-Public-Transport"
                  buttonText="View on Behance"
                  showButton={1}
              />
            </Box>
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
              <WorkCard
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%205.png?alt=media&token=230f6ae5-7550-4858-ad11-7ae0ff79c0b5"}
                title={"HealthMate Mobile Application"}
                description={""}
              />
              <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/HealthMate%20screens.PNG?alt=media&token=566e7796-3be2-41bd-b60e-62d727383763"
                  title="HealthMate"
                  description="HealthMate is a workout scheduling app that helps users organize and create workouts based on their busy schedules. The app offers a variety of workout routines and allows users to track their progress and set goals. Created with a team for IEEE Inovation Nation 2024."
                  link="https://www.figma.com/proto/M4KRIiaCwRIN3rxwxzDAzm/Fitness-schedule-aplikacija?node-id=108-188&t=U6tkGmXAmVJ9MoPV-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=108%3A188&show-proto-sidebar=1"
                  buttonText="View Prototype"
                  showButton={1}
              />
          </Box>  
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
            <WorkCard
              imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2013.png?alt=media&token=fd55e8df-64cf-48c6-92e7-49676a2fc245"}
              title={"Fauxica Online Store Website"}
              description={""}
            />
            <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Fauxica%20screens.PNG?alt=media&token=4f83a1da-2fc3-42c9-8706-c2166a7eecc7"
                  title="Fauxica"
                  description="Fauxica is a fictional online store that sells various clothing and accessories. The website offers a modern and intuitive interface, that allows users to easily view and browse products. One of my first ever projects created in figma."
                  link="https://www.figma.com/proto/LdaOgO8lSUXaITtn3upHgO/Shopping-Website?node-id=2-2&t=5tEwfiiUTS8z60GY-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
                  buttonText="View Prototype"
                  showButton={1}
              />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
            <WorkCard
              imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/seatsaver%20ui.png?alt=media&token=c731f471-22af-4452-97d2-46e4c31eb5c9"}
              title={"UI Design for SeatSaver Website"}
              description={""}
            />
            <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/SeatSaver%20screens.PNG?alt=media&token=1bcfd3ed-7a05-4045-afee-c239d5163142"
                  title="SeatSaver"
                  description="SeatSaver is a fictional website that allows users to reserve seats at their favorite restaurants. The website offers a modern and intuitive interface, that allows users to easily view and browse restaurants, reserve seats, order food, and view their reservations. Worked in a team of 3 for a University project."
                  link=""
                  buttonText=""
              />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <Box display="flex" flexDirection = "column" justifyContent="center" alignItems="center">
            <WorkCard
              imgSrc={"https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Slide%204_3%20-%2012.png?alt=media&token=26e73dc1-22fd-41cc-8eb6-fd47b68463f6"}
              title={"Handyman Repair Kit Mobile Application"}
              description={""}
            />
            <ModalTrigger
                  imgSrc="https://firebasestorage.googleapis.com/v0/b/omar-osmanovic.appspot.com/o/Handyman%20screens.PNG?alt=media&token=8a648ff7-c470-4583-a1b7-ff92e64ebf93"
                  title="Handyman Repair Kit"
                  description="Handyman Repair Kit is a mobile application that helps users order and rent repair kits for their homes. The app offers a variety of tools and allows users to choose which kit suits best for their needs. Created for a design competition in 2021."
                  link=""
                  buttonText=""
              />
          </Box>
        </Grid>
      </Grid>
      <h1 ref={refs.webDev} style={{ marginTop: "10%" }}>Web Development</h1>
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
