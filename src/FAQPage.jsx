import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import FAQLandscape from "./images/faq_landscape.jpg";
import FAQPortrait from "./images/faq_portrait.jpg";

function FAQPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const faqs = [
    {
      question: "What time should I arrive?",
      answer:
        "Guest arrival time begins at 4:00 pm with a ceremony start time of 4:30 pm.",
    },
    {
      question: "When will we eat?",
      answer:
        "Cocktail hour will start around 5:00 pm – hors d'oeuvres to be provided. We will have a plated dinner at the reception, which is set to start at 6:00 pm.",
    },
    {
      question: "What should I wear?",
      answer:
        "While we don't have a specific dress code, we suggest opting for formal attire to match the occasion's spirit. We kindly request that guests refrain from wearing blue jeans to maintain the event's elegant atmosphere.",
    },
    {
      question:
        "What time will the reception end? Will there be an after party?",
      answer:
        "The reception is set to end at 10:00 pm. After party is currently TBD!",
    },
    {
      question: "Can I bring my children?",
      answer:
        "We're having an adult-only celebration, with just a few close family children attending, to maintain an intimate atmosphere. Thank you for your understanding.",
    },
    {
      question: "Do I have to pay to park?",
      answer:
        "Onsite parking is free! Please visit our parking page for more info.",
    },
    {
      question: "Can I take pictures?",
      answer:
        "Feel free to capture memories throughout the wedding. We only request no flash photography during the ceremony to maintain its ambiance.",
    },
    {
      question: "Will there be an open bar?",
      answer: "You bet! We will also be offering non-alcoholic options.",
    },
    {
      question: "Are there any shuttle options?",
      answer:
        "We will personally not be providing shuttle service due to the close proximity of hotels to our venue. Some hotels may offer their own shuttles however, so if interested, please check with your hotel to see if that is an option.",
    },
    {
      question: "Are you providing any hotel blocks?",
      answer:
        "We haven't reserved hotel blocks due to ample nearby accommodations and no major downtown events on our date. Please explore options that suit your needs and budget. For nearby hotels, check our travel page.",
    },
    {
      question: "What happens in the case of inclement weather?",
      answer:
        "We realize that Ohio can have unpredictable weather, especially in February. Unless there is a catastrophic event, the show must go on. If traveling long distance, we encourage you to arrive as early to Columbus as possible to avoid the risk of running into any weather troubles.",
    },
    {
      question:
        "Will the ceremony, cocktail hour, and reception take place in the same location?",
      answer:
        "Yes, all of them will take place inside Post 4. Please note that the venue is two levels: Upstairs is for the ceremony & reception; downstairs is for the open bar & cocktail hour. Post 4 is also ADA friendly as there is an elevator connecting both floors.",
    },
    {
      question: "Can I take home any centerpieces/decorations?",
      answer:
        "We ask that you please refrain from taking any of the centerpieces or decoration.",
    },
    {
      question:
      "Who should I contact for further questions, site issues, or if I need to cancel my RSVP?",
      answer:
        "Feel free to contact either Casey at (304) 654-6031 or Chris/Miles at (304) 654-1215",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: isSmallScreen ? "85%" : "auto",
        margin: "0 auto",
      }}
    >
      <img
        src={isSmallScreen ? FAQPortrait : FAQLandscape}
        alt="Portrait"
        style={{
          width: isSmallScreen ? "auto" : "800px",
          height: isSmallScreen ? "70vh" : "auto",
          objectFit: "cover",
          objectPosition: "center bottom",
          maxHeight: isSmallScreen && "90vh",
          marginTop: isSmallScreen ? -80 : -30,
        }}
      />
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: index === 0 ? "30px auto 10px" : "10px auto",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FAQPage;
