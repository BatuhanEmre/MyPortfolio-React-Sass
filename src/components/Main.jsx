import React from "react";
import "./styles/Main.scss";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import man1 from "./assets/man1.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <h1>I am Batuhan Emre Kopan </h1>
            <p>Frontend Developer</p>

            <div className="icons">
               <Twitter className="icon" />
              <Instagram className="icon" />
              <Facebook className="icon" />
              <Link to="https://www.linkedin.com/in/batuhanemrekopan/"><LinkedIn className="icon" /> </Link>  
              <Pinterest className="icon" />
            </div>

            <div className="buttons">
              <button>See My Work</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={man1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
