import "./App.css";

import { useState } from "react";

import HtTtc from "./assets/components/HtTtc";
// import TtcHt from "./assets/components/TtcHt";

const App = () => {
  const [value, setValue] = useState<number>(0);
  const [taxe, setTaxe] = useState<number>(0);
  // const [selected, setSelected] = useState();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Calculez votre prix TTC</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="value">Entrez votre prix HT</label>
        <input
          id="value"
          type="number"
          value={value}
          onChange={(e) => {
            setValue(parseFloat(e.target.value));
          }}
        />
        <label htmlFor="taxe">Entrez la valeur de la taxe appliquée</label>

        <select
          name="taxe"
          id="taxe"
          required={true}
          onChange={(e) => {
            setTaxe(e.target.value);
          }}
          defaultValue=""
        >
          <option value="" disabled={true}>
            Choississez votre taxe
          </option>
          <option value={taxe}>2.2</option>
          <option value={taxe}>5.5</option>
          <option value={taxe}>10</option>
          <option value={20}>20</option>
        </select>
        <button type="submit">Calculez votre prix total</button>

        <label htmlFor="ht">HT vers TTC</label>
        <input id="ht" type="radio" name="mode" value="ht" />
        <label htmlFor="ttc">TTC vers HT</label>
        <input id="ttc" type="radio" name="mode" value="ttc" />
      </form>

      <HtTtc value={value} taxe={taxe} />
    </>
  );
};

export default App;
