import React from "react";
// ! assets
import "./styles.scss";
import logo from "../../../assets/images/university/logo.jpg";
import profile from "../../../assets/images/university/avatar.jpg";
import card01 from "../../../assets/images/university/pic04.jpg";
import card02 from "../../../assets/images/university/pic05.jpg";
import card03 from "../../../assets/images/university/pic06.jpg";
import card04 from "../../../assets/images/university/pic07.jpg";
import miniPost01 from "../../../assets/images/university/pic08.jpg";
import miniPost02 from "../../../assets/images/university/pic09.jpg";
import miniPost03 from "../../../assets/images/university/pic10.jpg";
import miniPost04 from "../../../assets/images/university/pic11.jpg";
import miniPost05 from "../../../assets/images/university/pic12.jpg";

// ? icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
// * componentes
import { CardPostagem } from "./CardPostagem/Card";
import { MiniPost } from "./MiniPost/MiniPost";

export const Aside = () => {
  return (
    <div className="Aside">
      <div className="topwrapper">
        <img src={logo} alt="raposa" className="Aside__logo" />
        <p className="topwrapper__title">
          CEFET-RJ
          <br />
          FRIBURGO
        </p>
        <p className="topwrapper__subtitle">
          ANOTHER FINE RESPONSIVE SITE TEMPLATE BY{" "}
          <span className="underline">HTML5 UP</span>
        </p>
      </div>
      <div className="postagensWrapper">
        <CardPostagem
          date="OCTOBER 20, 2015"
          title="VITAE SED CONDIMENTUM"
          image={card01}
          profile={profile}
          key={1}
        />

        <CardPostagem
          date="OCTOBER 20, 2015"
          title="VITAE SED CONDIMENTUM"
          image={card02}
          profile={profile}
          key={2}
        />

        <CardPostagem
          date="OCTOBER 20, 2015"
          title="VITAE SED CONDIMENTUM"
          image={card03}
          profile={profile}
          key={3}
        />

        <CardPostagem
          date="OCTOBER 20, 2015"
          title="VITAE SED CONDIMENTUM"
          image={card04}
          profile={profile}
          key={4}
        />
      </div>
      <div className="miniPostWrapper">
        <MiniPost
          image={miniPost01}
          date="OCTOBER 20, 2015"
          title="LOREM IPSUM FERMENTUM UT NISL VITAE"
        />
         <MiniPost
          image={miniPost02}
          date="OCTOBER 20, 2015"
          title="LOREM IPSUM FERMENTUM UT NISL VITAE"
        />
         <MiniPost
          image={miniPost03}
          date="OCTOBER 20, 2015"
          title="LOREM IPSUM FERMENTUM UT NISL VITAE"
        />
         <MiniPost
          image={miniPost04}
          date="OCTOBER 20, 2015"
          title="LOREM IPSUM FERMENTUM UT NISL VITAE"
        />
         <MiniPost
          image={miniPost05}
          date="OCTOBER 20, 2015"
          title="LOREM IPSUM FERMENTUM UT NISL VITAE"
        />
      </div>
      <div className="bottomwrapper">
        <p className="bottomwrapper__title">ABOUT</p>
        <p className="bottomwrapper__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisi vel consectetur euismod, nisi nisl tincidunt nisi, eget
          consectetur nisl nisi velit eget nisl. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec euismod, nisi vel consectetur
          euismod, nisi nisl tincidunt
        </p>
        <p className="bottomwrapper__learnmore">
          <a href="/">LEARN MORE</a>
        </p>
      </div>
      <div className="Aside__social">
        <ul>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <NetworkCheckIcon />
          </li>
          <li>
            <EmailIcon />
          </li>
        </ul>
        <p className="creditos">
          @ UNTITLED DESIGN: <span className="sublinhado">HTML5 UP</span>,
          IMAGES: <span className="sublinhado">UNSPLASH</span>
        </p>
      </div>
    </div>
  );
};
