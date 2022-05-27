import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';
import iconGmail from "./assets/images/gmail.png";
import iconGithub from "./assets/images/github.png";
import iconLinkedin from "./assets/images/linkedin.png";
import iconInstagram from "./assets/images/instagram.png";

function App() {
  const menuItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: "Projects",
      link: '/projects'
    },
    {
      name: "About",
      link: '/about'
    }
  ]
  const cta = {
    text: "Contact Us",
    link: "/contact"
  }

  const socialMedias = [
    {
      name: "gmail",
      link: "",
      icon: {iconGmail}
    },
    {
      name: "github",
      link: "",
      icon: {iconGithub}
    },
    {
      name: "linkedin",
      link: "",
      icon: {iconLinkedin}
    },
    {
      name: "instagram",
      link: "",
      icon: {iconInstagram}
    }
  ]

  return (
    <div className="App">
      <Header menu={menuItems} cta={cta} />
      <Footer contactLabel="Connect With Us" socialMedias={socialMedias} />
    </div>
  );
}

export default App;
