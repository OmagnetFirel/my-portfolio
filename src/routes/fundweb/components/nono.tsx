import React, {useState} from "react";

export const Nono = () => {
    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);
    const [p3, setP3] = useState(0);


  function calculaMedia() {
    return alert("A media final eh: " + (p1 * 2 + p2 * 3 + p3 * 5) / 10);
  }
  
  return <div> {" "}
  <h4>9. Calcula Media: </h4>
  <div>
    <input
      name="numero"
      type="number"
      placeholder="prova 1"
      value={p1}
      onChange={(e) => {
        setP1(parseInt(e.target.value));
      }}
    />
     <input
      name="numero"
      type="number"
      placeholder="prova 2"
      value={p2}
      onChange={(e) => {
        setP2(parseInt(e.target.value));
      }}
    />
     <input
      name="numero"
      type="number"
      placeholder="prova 3"
      value={p3}
      onChange={(e) => {
        setP3(parseInt(e.target.value));
      }}
    />
  </div>
  <button
    onClick={calculaMedia}
    className="border-0 border-transparente bg-violet-800 text-white p-2"
  >
    Calcule Media
  </button></div>;
};
