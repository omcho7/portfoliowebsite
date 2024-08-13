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
          <Box maxWidth={500} style={{ marginTop: "5%" }}>
            <h2 style={{ textAlign: "center" }}>Welcome, I'm Omar.</h2>
            <p style={{ textAlign: "center", marginBottom: "120pt" }}>
              I have a passion for art and design, specializing in graphic
              design, UX/UI design, web development, and illustration. Whether
              I'm crafting captivating user experiences or diving into the world
              of digital arts, I'm always seeking to fuse technology and
              creativity. As a graphic design enthusiast and computer science
              student, I'm on a constant journey of learning, exploring, and
              pushing the boundaries of visual expression.
            </p>
          </Box>
        </Grid>

        <Grid
          ref={myRef}
          item
          xs={6}
          md={3}
          style={{ marginTop: "40%", marginBottom: "15%" }}
        >
          <Link to="/mywork#graphicDesign">
            <SkillCard
              icon={<DesignServicesIcon sx={{ fontSize: 100 }} />}
              title="Graphic Design"
              description="I excel in graphic design, using tools like Photoshop, Figma, and Canva to create visually stunning, professional, and effective designs that communicate messages clearly."
            />
          </Link>
        </Grid>

        <Grid item xs={6} md={3} style={{ marginTop: "40%" }}>
          <Link to="/mywork#uxUi">
            <SkillCard
              icon={<ArchitectureIcon sx={{ fontSize: 100 }} />}
              title="UX/UI Design"
              description="I excel in UX/UI design, crafting intuitive and visually appealing user experiences that seamlessly blend functionality and aesthetics using tools like Figma and Adobe XD."
            />
          </Link>
        </Grid>

        <Grid item xs={6} md={3} style={{ marginTop: "40%" }}>
          <Link to="/mywork#webDev">
            <SkillCard
              icon={<IntegrationInstructionsIcon sx={{ fontSize: 100 }} />}
              title="Web Development"
              description="I excel in web development, building responsive, user-friendly websites that combine functionality and design using HTML, CSS, JavaScript, React, Jquery, AJAX and more."
            />
          </Link>
        </Grid>

        <Grid item xs={6} md={3} style={{ marginTop: "40%" }}>
          <Link to="/mywork#illustration">
            <SkillCard
              icon={<BrushIcon sx={{ fontSize: 100 }} />}
              title="Illustration"
              description="I excel in illustration, creating detailed and expressive artwork that brings ideas to life using both traditional and digital mediums (Adobe Photoshop, Procreate, Krita, etc.)."
            />
          </Link>
        </Grid>

        <ScrollArrow targetRef={myRef}></ScrollArrow>
      </Grid>
    </div>
  );
}

export default Homepage;
