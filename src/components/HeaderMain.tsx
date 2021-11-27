import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function HeaderMain() {
  return (
    <Grid
      style={{
        marginTop: "50px",
        backgroundColor: "#C4E2FF",
        height: "80vh",
      }}
      container
    >
      <Container>
        <Grid
          marginTop={4}
          alignItems="center"
          display="flex"
          direction="row"
          container
          spacing={3}
        >
          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: "74px",
                color: "rgba(8,8,8,1)",
              }}
              variant="h2"
            >
              Medium is a place to write, read and connect.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "rgba(41,41,41,1)",
                lineHeight: "20px",
                fontWeight: "400",
              }}
              variant="body1"
            >
              It's easy and free to post your thinking on any topic and connect
              with millions of readers.
            </Typography>
            <Box marginY={2}>
              <Button
                sx={{
                  borderColor: "#000",
                  backgroundColor: " #fff",
                  color: "#000",
                  fill: "rgba(41,41,41,1)",
                  padding: "7px 20px 9px",
                  fontSize: "16px",
                  textDecoration: "none",
                  borderWidth: "1px",
                  borderRadius: "99em",
                }}
                variant="outlined"
              >
                Start Writing
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora
            inventore laudantium? Nostrum doloremque neque reprehenderit quos
            totam facere voluptatum repudiandae dolore accusamus non, minus
            nihil unde excepturi natus sapiente?
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default HeaderMain;
