import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';

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
      name: "Github",
      link: "",
      icon: "./assets/images/iconGmail.png"
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
