import "./App.css";

import { useState } from "react";

import HtTtc from "./assets/components/HtTtc";
import TtcHt from "./assets/components/TtcHt";

const App = () => {
  const [value, setValue] = useState<number>(0);
  const [taxe, setTaxe] = useState<number>(0);
  const [selected, setSelected] = useState<string>("ht");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-[#C3BAC7] min-h-screen flex justify-center items-center">
        <div className="bg-[#D9D9D9] w-[732px] min-h-[663px] rounded-4xl p-10">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex justify-evenly  border-[#58B57F]  ">
              <input
                className="w-6 h-6 outline-2 outline-offset-2  outline-[#58B57F] "
                id="ht"
                type="radio"
                name="mode"
                value="ht"
                checked={selected === "ht"}
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
              />

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
            </div>

            <div className="flex justify-evenly text-[#365E31]">
              <label htmlFor="ht">HT vers TTC</label>
              <label htmlFor="ttc">TTC vers HT</label>
            </div>

            <h1>
              Calculez votre prix {selected === "ht" ? "TTC" : "HT"} à partir du
              prix {selected === "ht" ? "HT" : "TTC"}
            </h1>

            <label htmlFor="value">
              Entrez votre prix {selected === "ht" ? "HT" : "TTC"}{" "}
            </label>
            <input
              id="value"
              type="number"
              value={value}
              onChange={(e) => {
                setValue(parseFloat(e.target.value));
                setSubmitted(false);
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
              <option value="2.2">2.2</option>
              <option value="5.5">5.5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <button type="submit">
              Calculez votre prix {selected === "ht" ? "TTC" : "HT"}
            </button>
          </form>

          {submitted && (
            <p>
              Votre prix {selected === "ht" ? "TTC" : "HT"} est{" "}
              {selected === "ht" ? (
                <HtTtc value={value} taxe={taxe} />
              ) : (
                <TtcHt value={value} taxe={taxe} />
              )}{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
