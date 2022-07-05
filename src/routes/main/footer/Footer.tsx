import React from "react";
import "./footer.scss";
interface iFooterProps {
  contactLabel: string;
  socialMedias: iSocialMedia[];
}

interface iSocialMedia {
  name: string;
  link: string;
  icon: any;
}

export const Footer = (props: iFooterProps) => {
  const { contactLabel, socialMedias } = props;

  return (
    <footer>
      <div className="footerContainer">
        <h3 className="footerContainer__label">{contactLabel}</h3>
        <div className="footerContainer__socialMedias">
            {socialMedias.map((item, index) => {
              return (
                <a key={index} href={item.link}>
                  <img src={Object.values(item.icon).toString()} alt={item.name} />
                </a>
              );
            })}
        </div>
      </div>
    </footer>
  );
};
