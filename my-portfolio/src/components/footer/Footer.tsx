import React from "react";

interface iFooterProps {
  contactLabel: string;
  socialMedias: iSocialMedia[];
}

interface iSocialMedia {
  name: string;
  link: string;
  icon: string;
}

export const Footer = (props: iFooterProps) => {
  const { contactLabel, socialMedias } = props;
  console.log(contactLabel, socialMedias);

  return (
    <footer>
      <div className="footerContainer">
        <h3>{contactLabel}</h3>
        {socialMedias.map((item, index) => {
          return (
            <a key={index} href={item.link}>
              <img src={item.icon} alt={item.name} />
            </a>
          );
        })}
      </div>
    </footer>
  );
};
