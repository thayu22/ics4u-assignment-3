import { type SyntheticEvent, useState } from "react";
import { Analysis } from "./components/Analysis";
import { DrawGraph } from "./components/DrawGraph";
import { Header } from "./components/Header";
import { InputLabel } from "./components/InputLabel";
import { Summary } from "./components/Summary";
import type { Results } from "./types";
import { solveCubic } from "./utils/solveCubic";

export const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [results, setResults] = useState<Results | null>(null);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const p = (3 * a * c - b * b) / (3 * a * a);
    const q = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);

    const discriminant = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);

    setResults(solveCubic(p, q, a, b, c, d, discriminant));
  };
  console.log(results);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <section className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0b0f19] p-6 shadow-2xl">
          <div className="absolute top-0 left-0 h-full w-1 bg-cyan-500"></div>
          <form className="flex flex-wrap items-center justify-between gap-6" id="form">
            <div className="flex flex-1 flex-wrap justify-start gap-4 sm:gap-6">
              <form className="flex flex-wrap items-center justify-between gap-6" id="form" onInput={handleSubmit}>
                <InputLabel id="a" label="a-value [x³]" setValue={setA} value={a}></InputLabel>
                <InputLabel id="b" label="b-value [x²]" setValue={setB} value={b}></InputLabel>
                <InputLabel id="c" label="c-value [x]" setValue={setC} value={c}></InputLabel>
                <InputLabel id="d" label="d-value [c]" setValue={setD} value={d}></InputLabel>
              </form>
            </div>
            <input
              className="w-full cursor-pointer self-end rounded-md bg-cyan-500 px-6 py-3 text-center font-bold font-mono text-[#07090e] text-xs tracking-wider shadow-cyan-500/10 shadow-lg transition duration-150 hover:bg-cyan-400 active:scale-95 sm:w-auto sm:self-auto"
              type="submit"
              value="SAVE"
            />
          </form>
        </section>
        <div className="grid grid-cols-2 gap-12">
          <Analysis
            values={{
              discriminant: results?.discriminant ?? "N/A",
              maximum: `x: ${results?.maximum.x ?? "N/A"} | y: ${results?.maximum.y ?? "N/A"}`,
              minimum: `x: ${results?.minimum.x ?? "N/A"} | y: ${results?.minimum.y ?? "N/A"}`,
              pPara: results?.p ?? "N/A",
              qPara: results?.q ?? "N/A",
              rootOne: `x: ${results?.r1.x ?? "N/A"} | y: ${results?.r1.y ?? "N/A"}`,
              rootThree: `x: ${results?.r3.x ?? "N/A"} | y: ${results?.r3.y ?? "N/A"}`,
              rootTwo: `x: ${results?.r2.x ?? "N/A"} | y: ${results?.r2.y ?? "N/A"}`,
            }}
          />
          <Summary />
          <DrawGraph />
        </div>
      </div>
    </div>
  );
};
