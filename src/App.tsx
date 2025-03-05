import "./App.css";

import { useState } from "react";

import HtTtc from "./assets/components/HtTtc";
import TtcHt from "./assets/components/TtcHt";

const App = () => {
  const [value, setValue] = useState<number>();
  const [taxe, setTaxe] = useState<number>();
  const [selected, setSelected] = useState<string>("ht");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ht">HT vers TTC</label>
        <input
          id="ht"
          type="radio"
          name="mode"
          value="ht"
          checked={selected === "ht"}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        />

        <label htmlFor="ttc">TTC vers HT</label>
        <input
          id="ttc"
          type="radio"
          name="mode"
          value="ttc"
          checked={selected === "ttc"}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        />

        <h1>
          Calculez votre prix {selected === "ht" ? "TTC" : "HT"} à partir du
          prix {selected === "ht" ? "HT" : "TTC"}
        </h1>

        <label htmlFor="value">
          Entrez votre prix {selected === "ht" ? "HT" : "TTC"}
        </label>
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
            setTaxe(parseFloat(e.target.value));
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
        <button type="submit">
          Calculez votre prix {selected === "ht" ? "TTC" : "HT"}
        </button>
      </form>
    </>
  );
};

export default App;
