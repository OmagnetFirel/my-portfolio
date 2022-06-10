import React from 'react'
import banner from "../../../assets/images/blog-selva/banner.jpg"
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="bannerHeader">
        <section className="bannerHeader__container">
            <img className="bannerHeader__banner" src={banner} alt="imagem da floresta" />

            <div className="bannerHeader__wrapperText">
                <div className="bannerHeader__wrapperTitle">
                    <h1>Lorem Ipsum</h1>
                    <p>Design by duoren</p>
                </div>

                <div className="bannerHeader__wrapperButton">
                    <button>HomePage</button>
                    <button>Left SideBar</button>
                    <button>Hight SideBar</button>
                    <button>No SideBar</button>
                </div>
            </div>
        </section>
    </div>
  )
}
