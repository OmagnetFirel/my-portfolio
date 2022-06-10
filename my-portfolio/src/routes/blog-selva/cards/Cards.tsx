import React from "react";
import card1 from "../../../assets/images/blog-selva/pic01.jpg";
// import card2 from "../../../assets/images/blog-selva/pic02.jpg";
// import card3 from "../../../assets/images/blog-selva/pic03.jpg";

export const Cards = () => {
  return (
    <div>
      <section>
        <div>
            <h1>
                There are many variations
            </h1>
            <img src={card1} alt="" />

            <p>believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200</p>

            <button>More Details</button>
        </div>
      </section>
    </div>
  );
};
