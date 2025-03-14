import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import MyWork from "./pages/Mywork.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <AnimatedBackground />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Box mt={4} /> {}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mywork" element={<MyWork />} />
            
          </Routes>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
