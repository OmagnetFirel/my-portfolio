import React, { useState } from "react";

export const Decimo = () => {
  const [quantidade, setQuantidade] = useState(0);
  function calculaMacas() {
    if (quantidade >= 12) {
      return alert("O valor total é R$" + quantidade * 1.0);
    }
    return alert("O valor total é R$" + quantidade * 1.3);
  }
  return (
    <div>
      {" "}
      <h4>10. Calcula Quantidades: </h4>
      <div>
        <input
          name="numero"
          type="number"
          placeholder="numero"
          value={quantidade}
          onChange={(e) => {
            setQuantidade(parseInt(e.target.value));
          }}
        />
      </div>
      <button
        onClick={calculaMacas}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        Calcula Maças
      </button>
    </div>
  );
};
