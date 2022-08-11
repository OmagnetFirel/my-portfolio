import React, { useState } from "react";

export const Quarto = () => {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);

  function valorHipotenusa() {
    alert("A hipotenusa é : " + Math.hypot(c1, c2).toFixed(2));
  }

  return (
    <div>
      {" "}
      <h4>
        4. Calcula Hipotenusa:{" "}
      </h4>
      <div>
        <input
          name="numero 1"
          type="number"
          placeholder="numero 1"
          value={c1}
          onChange={(e) => {
            setC1(parseInt(e.target.value));
          }}
        />
        <input
          type="number"
          name="numero 2"
          placeholder="numero 2"
          value={c2}
          onChange={(e) => {
            setC2(parseInt(e.target.value));
          }}
        />
      </div>
      <button
        onClick={valorHipotenusa}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        CALCULE HIPOTENUSA
      </button>
    </div>
  );
};
