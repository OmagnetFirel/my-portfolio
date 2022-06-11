import carro from "../../assets/images/carro.png";
import "./styles.scss";

export const P1FundWeb = () => {
  return (
    <>
      <div className="questao1 flex flex-col p-10">
        <h4 className="font-sans text-base tracking-wide leading-relaxed text-2xl text-slate-900 font-bold">
          Lista de Compras
        </h4>
        <ul className="list-disc list-outside pl-4">
          <li>
            <p>Alimentos</p>
            <ol className="list-decimal list-outside pl-10">
              <li>
                <p>Açúcar</p>
              </li>
              <li>
                <p>Café</p>
              </li>
              <li>
                <p>Gelatina</p>
              </li>
            </ol>
          </li>
          <li>
            <p>Bebidas</p>
            <ol className="list-decimal list-outside pl-10">
              <li>
                <p>Água de Coco</p>
              </li>
              <li>
                <p>Refrigerante</p>
              </li>
              <li>
                <p>Suco</p>
              </li>
            </ol>
          </li>
        </ul>
      </div>
      <div className="questao2 flex flex-col p-10">
        <h4>Questão 2</h4>
        <div className="questao2Wrapper flex flex-col mt-10">
          <div className="flex flex-row gap-x-40 ">
            <p className="tarifas ml-10 text-4xl font-serif red ">Tarifas</p>
            <img src={carro} alt="carro cinza" className=" w-52 " />
          </div>
          <table className="table-fixed border-4 w-full">
            <thead>
              <tr>
                <th rowSpan={3}>Grupo</th>
                <th colSpan={6}>Número de Diárias</th>
              </tr>
              <tr className="grupos-tr">
                <td colSpan={2}>1 a 7</td>
                <td colSpan={2}>8 a 21</td>
                <td colSpan={2}>maior que 21</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="index">A</td>
                <td colSpan={2}>R$ 60,00</td>
                <td colSpan={2}>R$ 54,00</td>
                <td colSpan={2}>R$ 48,00</td>
              </tr>
              <tr>
                <td className="index">C</td>
                <td colSpan={2}>R$ 90,00</td>
                <td colSpan={2}>R$ 81,00</td>
                <td colSpan={2}>R$ 72,00</td>
              </tr>
              <tr>
                <td className="index">L</td>
                <td colSpan={2}>R$ 150,00</td>
                <td colSpan={2}>R$ 135,00</td>
                <td colSpan={2}>R$ 120,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="questao3 flex flex-col p-10  border-2 border-stone-400 rounded">
        <div className="questao3__header flex flex-row justify-between">
          <p className="questao3__logo">CEFET</p>
          <nav className="questao3__nav">
            <ul className="questao3__nav__list flex flex-row  list-none gap-x-9 border border-stone-800 rounded">
              <li className="questao3__nav__list__item">
                <a href="/my-portfolio/" className="questao3__item_link">
                  Home
                </a>
              </li>
              <li className="questao3__nav__list__item">
                <a href="/my-portfolio/" className="questao3__item_link">
                  Generic
                </a>
              </li>
              <li className="questao3__nav__list__item">
                <a href="/my-portfolio/" className="questao3__item_link">
                  Elements
                </a>
              </li>
              <li className="questao3__nav__list__item">
                <a
                  href="/my-portfolio/"
                  className="questao3__item_link sign-up"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="questao3__banner flex flex-col  border-2 border-stone-600 rounded w-max mx-auto">
          <h4>Hi. This is Lorem Ipsun</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <a href="https://www.linkedin.com/in/victor-mouza-a8ab90174/">
            Lorem Ipsun Dolor
          </a>
        </div>
      </div>
      <section
        id="main-content"
        className="questao4 flex flex-col p-10 border-2 border-stone-400 rounded"
      >
        <h4 className="questao4__title">Lorem ipsum dolor sit</h4>
        <p className="questao4__subTitle">
          Lorem ipsum dolor sit amet, consectetur adispiscing etit. Distinctio,
          autem
        </p>
        <div className="flex flex-row border-y-2  border-stone-400 py-10 justify-center gap-10">
          <div className="flex flex-row border-2 border-stone-400 p-2 rounded gap-5">
            <span className="questao4__roda"></span>
            <div>
              <h6>Lorem ipsum</h6>
              <p>
                Lorem ipsum <br />
                dolor
              </p>
            </div>
          </div>
          <div className="flex flex-row border-2 border-stone-400 p-2 rounded gap-5">
            <span className="questao4__roda"></span>
            <div>
              <h6>Lorem ipsum</h6>
              <p>
                Lorem ipsum <br />
                dolor
              </p>
            </div>
          </div>
          <div className="flex flex-row border-2 border-stone-400 p-2 rounded gap-5">
            <span className="questao4__roda"></span>
            <div>
              <h6>Lorem ipsum</h6>
              <p className="questao4__card-text">
                Lorem ipsum <br />
                dolor
              </p>
            </div>
          </div>
          <div className="flex flex-row border-2 border-stone-400 p-2 rounded gap-5">
            <span className="questao4__roda"></span>
            <div>
              <h6>Lorem ipsum</h6>
              <p>
                Lorem ipsum <br />
                dolor
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-wrapper">
          <p className="questao4__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            dolore illum, temporibus
            <br />
            veritagis eligendi, aliquam, dolor enim itaque veniam aut eaque
            sequi qui quia vitae pariatur
            <br />
            repudiandae ab dignissimos ex!
          </p>

          <a href="/my-portfolio/" className="questao4__link">
            Lorem ipsum dolor sit
          </a>
        </div>
      </section>
      <div className="questao3 flex flex-col p-10  border-2 border-stone-400 rounded">
        <h1>Questao 5</h1>
        <ol>
          <li>adicionaria um favicon para dar mais personalidade a pagina</li>
          <li>
            trocaria a {'<div id="cabecalho">...</div>'} por um elemento{" "}
            <span className="font-bold">'header'</span> por questões de
            semantica
          </li>
          <li>
            removeria todo o css do código deixando-o mais legivel e organizado
          </li>
          <li>
            no head eu importaria o arquivo css, pois se não , não ia poder
            estilizar como apontado no item anterior
          </li>
          <li>
            trocaria a {'<div id="principal">...</div>'} pelo elemento{" "}
            <span className="font-bold">'main'</span>
          </li>
          <li>
            envolveria o texdo dentro da div principal , em um elemento{" "}
            <span className="font-bold">'p'</span>
          </li>
          <li>
            com a troca dos elementos apontado nos items 2 e 5, eu removeria
            todos os id's
          </li>
          <li>
            evitaria forçar quebra de linha utilizando o elemento {"<br />"} e
            criaria mais paragrafos pois Forçando quebras de linha com uma tag
            br, podemos estar condenando o nosso documento, a uma
            incompatibilidade entre SOs.
          </li>
          <li>
            removeria os elementos {"<b></b> e <i></i>"} e trocaria por um span
            sendo estilizado por uma classe no css, tornando assim o codigo mais
            legivel e eu poderia estilizar e reutilizar em outros locais.
          </li>
          <li>adicionaria a lang no meu {"<html> virar <html lang='en'>"} e adicionaria a linguagem desejada</li>
        </ol>
      </div>
    </>
  );
};
