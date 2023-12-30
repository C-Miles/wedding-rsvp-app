import React from "react";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#2d2d2d",
        color: "white",
        paddingTop: "8px",
        paddingBottom: "8px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Link
        href="https://github.com/C-Miles"
        style={{ color: "inherit", fontSize: "12px", textDecoration: "none" }}
        target="blank"
      >
        Designed By C-Miles
      </Link>
    </div>
  );
};

export default Footer;
