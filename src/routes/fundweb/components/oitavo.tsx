import React, { useState } from "react";

export const Oitavo = () => {
  const [temperatura, setTemperatura] = useState(0);

  function FhtoCl() {
    return alert("A temperatura em C é: " + (temperatura - 32) / 1.8 + "Cº");
  }

  return (
    <div>
      {" "}
      <h4>3. Calcula Temperatura: </h4>
      <div>
        <input
          name="numero"
          type="number"
          placeholder="numero"
          value={temperatura}
          onChange={(e) => {
            setTemperatura(parseInt(e.target.value));
          }}
        />
      </div>
      <button
        onClick={FhtoCl}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        Converte Temperatura
      </button>
    </div>
  );
};
