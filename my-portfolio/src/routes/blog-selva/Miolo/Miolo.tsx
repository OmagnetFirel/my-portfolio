import React from "react";
import "./styles.scss";
interface iMioloProps {
  title: string;
  subtitle: string;
  image: string;
}

export const Miolo = (props: iMioloProps) => {
  const { title, subtitle, image } = props;
  return (
    <section className="miolo-container">
      <h2 className="miolo-container__title">{title}</h2>
      <p className="miolo-container__subtitle">{subtitle}</p>
      <img src={image} alt="imagem do miolo" />
      <p className="miolo-container__text">
        This is <span className="negrito">Lorem Ipsum</span> is simply dummy
        text of the printing and typesetting industry.{" "}
        <span className="sublinhado">Lorem Ipsum</span> has been the industry's
        standard dummy text ever since the 1500s, when an unknown{" "}
        <span className="negrito">printer took</span>a galley of type and
        scrambled it to make a type specimen book.{" "}
        <span className="negrito">It has survived</span> not only five
        centuries, but also the leap into{" "}
        <span className="sublinhado">electronic typesetting</span>
        <br />
        <br />
        Remaining essentially unchanged. It was popularised in the 1960s with
        the release of <span className="sublinhado">Letraset</span> sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus{" "}
        <span className="negrito">PageMaker</span> including versions of{" "}
        <span className="negrito">Lorem Ipsum</span>.
      </p>
    </section>
  );
};
