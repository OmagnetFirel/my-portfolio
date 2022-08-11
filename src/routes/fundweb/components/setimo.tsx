import React, { useState } from "react";

export const Setimo = () => {
  const [carrosVendidos, setCarrosVendidos] = useState(0);
  const [comissaoPorCarro, setcomissaoPorCarro] = useState(0);
  const [valorTotalDeVendas, setvalorTotalDeVendas] = useState(0);
  const [salario, setsalario] = useState(0);

  function calculaSalarioVendedor() {
    const valorPorCarros = carrosVendidos * comissaoPorCarro;
    const valorEmCimaDaVenda =
      valorTotalDeVendas + (valorTotalDeVendas / 100) * 5;
    const salarioFinal = salario + valorPorCarros + valorEmCimaDaVenda;
    return alert("O salario final é: R$" + salarioFinal);
  }
  return (
    <div>
      {" "}
      <h4>
        7. Calcula Salario Final Vendedor.
      </h4>
      <div>
        <input
          name="numero 1"
          type="number"
          placeholder="Carros Vendidos"
          value={carrosVendidos}
          onChange={(e) => {
            setCarrosVendidos(parseInt(e.target.value));
          }}
        />
        <input
          type="number"
          name="numero 2"
          placeholder="comissao Por Carro"
          value={comissaoPorCarro}
          onChange={(e) => {
            setcomissaoPorCarro(parseInt(e.target.value));
          }}
        />
        <input
          type="number"
          name="numero 2"
          placeholder="comissao Por Carro"
          value={valorTotalDeVendas}
          onChange={(e) => {
            setvalorTotalDeVendas(parseInt(e.target.value));
          }}
        />
        <input
          type="number"
          name="numero 2"
          placeholder="comissao Por Carro"
          value={salario}
          onChange={(e) => {
            setsalario(parseInt(e.target.value));
          }}
        />
      </div>
      <button
        onClick={calculaSalarioVendedor}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        CALCULE SALARIO VENDEDOR
      </button>
    </div>
  );
};
