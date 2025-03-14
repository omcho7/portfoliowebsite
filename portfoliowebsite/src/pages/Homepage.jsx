import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import BrushIcon from "@mui/icons-material/Brush";
import { useRef } from "react";
import ScrollArrow from "../components/ScrollArrow";
import SkillCard from "../components/SkillCard";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GitHubIcon from '@mui/icons-material/GitHub';



function Homepage() {
  const myRef = useRef(null);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          justifyContent={"center"}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box maxWidth={800} style={{ marginTop: "20%" }}>
            <h2 style={{ textAlign: "center" }}>Welcome, I’m Omar — Designer. Developer. Creator.</h2>
            <p style={{ textAlign: "center", marginBottom: "45%" }}>
              I blend art and technology to craft sleek, user-focused designs — from intuitive UX/UI interfaces to vibrant illustrations and responsive websites. As a graphic design enthusiast and computer science student, I’m on a continuous journey to explore, create, and redefine digital experiences.
            </p>
          </Box>
        </Grid>

      


        
      <Grid
      paddingLeft={15}
      paddingRight={10}
      marginBottom={20}
        container
        display={"flex"}
        flexDirection="row"
        spacing={4} // Adds spacing between the cards
        justifyContent="center" // Centers the cards horizontally
        alignItems="stretch" // Ensures all cards have the same height
        ref={myRef}
      >
        <Grid
        display={"flex"}
        flexDirection="column" 
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        item xs={12} sm={6} md={3}>
          <Link to="/mywork#graphicDesign">
          <SkillCard
            icon={<DesignServicesIcon sx={{ fontSize: 80 }} />}
            title="Graphic Design"
            description="I excel in graphic design, using tools like Photoshop, Figma, and Canva to create visually stunning, professional, and effective designs."
          /></Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Link to="/mywork#uxUi">
          <SkillCard
            icon={<ArchitectureIcon sx={{ fontSize: 80 }} />}
            title="UX/UI Design"
            description="I craft intuitive and visually appealing user experiences that seamlessly blend functionality and aesthetics using tools like Figma and Adobe XD."
          /></Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Link to="/mywork#webDev">
          <SkillCard
            icon={<IntegrationInstructionsIcon sx={{ fontSize: 80 }} />}
            title="Web Development"
            description="I build responsive, user-friendly websites that combine functionality and design using HTML, CSS, JavaScript, React, and more."
          /></Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Link to="/mywork#illustration">
          <SkillCard
            icon={<BrushIcon sx={{ fontSize: 80 }} />}
            title="Illustration"
            description="I create detailed and expressive artwork that brings ideas to life using both traditional and digital mediums like Photoshop and Procreate."
          /></Link>
        </Grid>
      </Grid>
    





        <Grid item xs={4} md={4} style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Socials
            className="socials"
            icon={<LinkedInIcon />}
            text="LinkedIn Profile"
            link="https://www.linkedin.com/in/omar-osmanovic/"
          />
        </Grid>
        <Grid item xs={4} md={4} style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Socials 
            icon={<ShoppingBagIcon/>}
            text="RedBubble Shop"
            link="https://www.redbubble.com/people/Omcho/shop?asc=u"
          />
        </Grid>
        <Grid item xs={4} md={4} style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Socials 
            icon={<GitHubIcon/>}
            text="GitHub Profile"
            link="https://github.com/omcho7"
          />
        </Grid>
        <ScrollArrow targetRef={myRef}></ScrollArrow>
      </Grid>
    </div>
  );
}

export default Homepage;
