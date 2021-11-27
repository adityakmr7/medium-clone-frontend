import { BookmarkAdd } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

function Main() {
  return (
    <Container sx={{ marginY: "40px" }}>
      <Grid container spacing={5}>
        <Grid item xs={9}>
          <Stack>
            <Box marginY={1} display="flex" alignItems="center">
              <Avatar
                style={{
                  marginRight: "10px",
                  height: "28px",
                  width: "28px",
                  borderRadius: "10px",
                }}
              />
              <Typography>Sinem Gunel in Personal Growth</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "700",
                color: "rgba(41,41,41,1)",
              }}
              variant="h2"
            >
              7 Daily Habits That Haarms Your Brain
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: "400",
              }}
            >
              Your brain is the control center for all activities in your body.
              It regulates your breathing, heartbeat, and many more vital
              activities.
            </Typography>
            <Box marginY={1} display="flex" justifyContent="space-between">
              <Typography
                sx={{
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "rgba(117,117,117,1)",
                }}
              >
                Nov 3 * 8 min read * Advice
              </Typography>
              <Box display="flex" alignItems="center">
                <BookmarkAdd />
                <LinearScaleIcon />
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">
            Discover More of what matters to you.
          </Typography>
          <Button sx={{ marginX: "4px", marginY: "4px" }} variant="outlined">
            Self
          </Button>
          <Button variant="outlined"> Relationship</Button>
          <Button variant="outlined"> Data Science</Button>

          <Divider sx={{ marginY: "20px" }} />
          <Box>
            <Button>Help</Button>
            <Button>Status</Button>
            <Button>Writers</Button>
            <Button>Blog</Button>
            <Button>Careers</Button>
            <Button>Privacy</Button>
            <Button>Terms</Button>
            <Button>About</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
