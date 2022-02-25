import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <div>
      <Container id="footer" maxWidth="xl">
        <Grid item xs={4}>
          {" "}
          <h1>suivez nous</h1>{" "}
        </Grid>

        <Grid item xs={4}>
          {" "}
          <h2>Suivez nous sur Facebook </h2>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
