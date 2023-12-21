import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Divider, Paper, Typography } from "@mui/material";

import Ring from "./images/ring.jpg";
import SakuraGarden from "./images/sakura_garden.jpg";
import StoryLandscape from "./images/story_landscape.jpg";
import StoryPortrait from "./images/story_portrait.jpg";

function FAQPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const paperBackgroundColor = theme.palette.background.paper;

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingBottom: '50px',
      }}
    >
      <Typography
        align="center"
        component="h1"
        gutterBottom
        style={{ marginTop: "3%" }}
        variant={isSmallScreen ? "h4" : "h3"}
      >
        Our Story
      </Typography>

      <Divider
        style={{
          backgroundColor: "#2d2d2d",
          marginBottom: "25px",
          width: "80%",
        }}
      />

      <img
        src={isSmallScreen ? StoryPortrait : StoryLandscape}
        alt="Portrait"
        style={{
          boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
          height: isSmallScreen ? "70vh" : "auto",
          maxHeight: isSmallScreen && "90vh",
          objectFit: "cover",
          objectPosition: "center bottom",
          width: isSmallScreen ? "auto" : "800px",
        }}
      />

      <Paper
        style={{
          margin: "30px auto",
          maxWidth: isSmallScreen ? "80%" : "760px",
          padding: "20px",
        }}
      >
        <Typography variant="body1" paragraph>
          <b>Our Story</b>
          <br />
          It’s kind of a long story… but we’ll keep it brief (sort of)!
          <br />
          <br />
          Casey & Chris are both West Virginia natives and met in Huntington, WV
          around 2018. At the time, Casey was working in health & wellness, and
          Chris signed up to take some of her classes. The two found that they
          shared many common interests, especially in lifestyles, as they
          started frequenting the local gym together. After a swimming session,
          Chris confessed his feelings towards Casey and discovered she felt the
          same way. Not long after, the two became pretty much inseparable. They
          shared their love of the outdoors – spending time hiking in local
          parks and lounging in hammocks in between. After Chris moved into his
          own apartment, Casey stayed with her parents but came over to visit
          almost every day. After some time, they decided they wanted to
          experience more and chose to relocate to Columbus, OH together, and
          kick off the next stages of their lives with new careers.
          <br />
          <br />
          Both Chris & Casey love to travel and have been to places such as
          Alaska, Hawaii, and this past spring, they took their first
          international trip together to Japan. Little did Casey know, Chris was
          holding onto a ring and was planning to propose during their trip. On
          April 2, 2023, after visiting a temple in Kyoto, the two caught a cab
          and went on a little excursion to a garden about an hour outside of
          the city. When they arrived, they were in awe of the scenery –
          beautiful cherry blossoms and colorful flowers and plants surrounded
          them. After exploring for a while, Casey was caught off guard by Chris
          getting down on one knee, pulling out a stunning ring, and popping the
          question. She was immediately overwhelmed with emotions, but we all
          know what her answer was!
          <br />
          <br />
          Also, we have to give props to Chris who nailed the location - it
          wasn’t a well-known spot (only some locals here and there) and felt
          straight out of a fairytale!
        </Typography>
      </Paper>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          maxWidth: isSmallScreen ? "87%" : "800px",
        }}
      >
        <img
          src={SakuraGarden}
          alt="Sakura Garden"
          style={{
            backgroundColor: paperBackgroundColor,
            boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
            marginBottom: isSmallScreen && '30px',
            objectFit: "cover",
            padding: "5px",
            width: isSmallScreen ? "100%" : "40%",
          }}
        />
        <img
          src={Ring}
          alt="Ring"
          style={{
            backgroundColor: paperBackgroundColor,
            boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
            objectFit: "cover",
            padding: "5px",
            width: isSmallScreen ? "100%" : "40%",
          }}
        />
      </div>
    </div>
  );
}

export default FAQPage;
