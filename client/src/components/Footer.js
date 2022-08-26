import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <div className="github">
          <a href="https://github.com/sebas5950">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/alex-guanipatin/">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/sebastian5950/">
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <h3>Created By: Alex</h3>
      </div>
    </div>
  );
}

export default Footer;
