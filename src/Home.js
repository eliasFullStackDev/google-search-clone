import React from "react";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="header__container">
          <span>Gmail</span>
          <span>Images</span>
          <IconButton>
            <AppsIcon></AppsIcon>
          </IconButton>
          <Button variant="contained" color="primary" className="header__btn">
            Sign In
          </Button>
        </div>
      </div>
      <div className="main">
        <div className="main__logo">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </div>
        <div className="main__searchBox">
          <div className="searchBox__wrapper">
            <IconButton>
              <SearchIcon className="searchIcon" />
            </IconButton>
            <input type="text" />
            <IconButton>
              <MicIcon className="searchMic" />
            </IconButton>
          </div>
        </div>
        <div className="main__buttons">
          <div className="main__buttons__container">
            <Button variant="contained" className="main__buttons__btn">
              Google Search
            </Button>
            <Button variant="contained" className="main__buttons__btn">
              I'm Feeling Lucky
            </Button>
          </div>
        </div>
        <div className="main__languageSection">
          <span>Google offered in: Hausa Igbo Èdè Yorùbá Nigerian Pidgin</span>
        </div>
      </div>
      <div className="footer">
        <div className="footer__top">
          <span>Nigeria</span>
        </div>
        <div className="footer__middle">
          <span>🍀 Carbon neutral since 2007</span>
        </div>
        <div
          className="footer__bottom"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "75%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "52%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>About</span>
              <span>Advertising</span>
              <span>Business</span>
              <span>How Search works</span>
            </div>
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Privacy</span>
              <span>Terms</span>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
