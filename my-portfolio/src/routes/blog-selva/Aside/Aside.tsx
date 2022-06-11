import { Card } from "./card/Card";
import "./card/Card.scss";
import mato from "../../../assets/images/blog-selva/pic06.jpg";
import arvores from "../../../assets/images/blog-selva/pic04.jpg";
import montanha from "../../../assets/images/blog-selva/pic05.jpg";

export const Aside = () => {
  return (
    <section className="blog-selva-aside flex flex-col w-2/4 gap-y-20 pl-10 ">
      <h4 className="font-sans text-base tracking-wide leading-relaxed text-2xl m-0 mt-4 ">
        PELLENTESQUE VULPTATE
      </h4>
      <Card
        date="AUGUST 11, 2002 (10) COMMENTS"
        image={arvores}
        description="Na cidade-selva de Ixaocan, 
        Qiyana planeja seu próprio e implacável caminho até o trono de Yun Tal. 
        Última na fila para suceder seus pais ..."
      />
      <Card
        date="AUGUST 11, 2002 (10) COMMENTS"
        image={montanha}
        description="Criado anos atrás como um brinquedo para um príncipe solitário,
        Shaco, a marionete encantada, agora se deleita com assassinatos e ..."
      />
      <Card
        date="AUGUST 11, 2002 (10) COMMENTS"
        image={mato}
        description="Nas ruelas sombrias de Runeterra, 
        a criatura demoníaca Evelynn busca sua próxima vítima.
        Ela atrai presas com sua voluptuosa aparência de fêmea humana."
      />
    </section>
  );
};
