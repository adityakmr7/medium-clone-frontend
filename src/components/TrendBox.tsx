import {
  Avatar,
  Container,
  Grid,
  Typography,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import data from "../data/trendData.json";
const Trend = ({
  rank,
  author,
  title,
  date,
  read,
}: {
  rank: string;
  author: string;
  title: string;
  date: string;
  read: string;
}) => {
  return (
    <Grid marginY={6} item xs={4}>
      <Box display="flex">
        <Box marginRight={2}>
          <Typography
            sx={{
              color: "rgba(230, 230, 230, 1)",
            }}
            variant="h3"
          >
            {rank}
          </Typography>
        </Box>
        <Box>
          <Box>
            <Box display="flex" alignItems="center">
              <Avatar
                style={{ marginRight: "5px", height: "20px", width: "20px" }}
              />
              <Typography
                sx={{
                  lineHeight: "16px",
                  fontSize: "13px",
                  color: "rgba(41,41,41,1)",
                }}
              >
                {author}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "rgba(41,41,41,1)",
                  lineHeight: "20px",
                }}
                variant="h6"
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(117, 117, 117, 1)",
                  fontSize: "13px",
                  lineHeight: "20px",
                  fontWeight: "400",
                }}
                variant="body2"
                color="gray"
              >
                {date} * {read}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

function TrendBox() {
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            borderColor: "#000",
            height: "30px",
            width: "30px",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
            borderStyle: "solid",
          }}
          marginRight={1}
        >
          <TrendingUpIcon />
        </Box>
        <Typography>TRENDING ON MEDIUM</Typography>
      </Box>
      <Grid container>
        {data.map((item, i) => {
          return <Trend {...item} />;
        })}
      </Grid>
      <Divider />
    </Container>
  );
}

export default TrendBox;
