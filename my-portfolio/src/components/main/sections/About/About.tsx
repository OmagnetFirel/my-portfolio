import React from 'react'
import "./about.scss";


export const About = () => {
  return (
    <section id="about">
        <div className="aboutContainer"> 
            <h4>About me</h4>
            <div className="aboutContainer__textWrapper">
                <p> 
                    Hi, I'm Victor,<br />
                    I'm a software developer at agenciaM3. 
                    I'm a 21 year old Brazilian and bachelor's student in Information Systems,
                    so I'm always looking for new experiences.
                    Currently I'm studying 
                    I also love to travel and meet new people :D .
                </p>
            </div>
        </div>
    </section>
  )
}
