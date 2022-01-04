import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer1">
        <div className="media" id="media">
          <ul>
            <li>
              <a href="https://www.facebook.com/hanin.alsharabati/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/haneensharabat2">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/haneen-alsharabaty/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Haaneenalsharabaty">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
