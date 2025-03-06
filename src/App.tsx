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
      <div className="bg-[#C3BAC7] min-h-screen flex justify-center items-center overflow-hidden">
        <div className="bg-[#CDC9CF] w-[700px] min-h-[550px] rounded-4xl py-15 px-25">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex justify-evenly">
              <input
                className="w-6 h-6 outline-2 outline-offset-2  outline-[#58B525] "
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
                className="w-6 h-6 border border-red "
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

            <h1 className="flex justify-center text-[#365E31] text-xl text-extrabold uppercase tracking-wide">
              Calculez votre prix {selected === "ht" ? "TTC" : "HT"} à partir du
              prix {selected === "ht" ? "HT" : "TTC"}
            </h1>

            <label htmlFor="value" className="uppercase text-[#365E31]">
              Entrez votre prix {selected === "ht" ? "HT" : "TTC"}{" "}
            </label>
            <input
              className="border-3 border-[#118525] rounded-xl h-10 text-lg pl-3 "
              id="value"
              type="number"
              value={value}
              onChange={(e) => {
                setValue(parseFloat(e.target.value));
                setSubmitted(false);
              }}
            />
            <label htmlFor="taxe" className="uppercase text-[#365E31]">
              Entrez la valeur de la taxe appliquée
            </label>

            <select
              className="border-3 border-[#118525] rounded-xl h-10 text-lg pl-3 appearance-none"
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
            <button
              type="submit"
              className="bg-[#118525] hover:bg-[#365E31] rounded-xl h-10 text-white uppercase text-lg mt-3"
            >
              Calculez votre prix {selected === "ht" ? "TTC" : "HT"}
            </button>
          </form>

          {submitted && (
            <p className="mt-6 text-[#365E31] text-lg uppercase ">
              Votre prix {selected === "ht" ? "TTC" : "HT"} est{" "}
              {selected === "ht" ? (
                <HtTtc value={value} taxe={taxe} />
              ) : (
                <TtcHt value={value} taxe={taxe} />
              )}{" "}
              €
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
