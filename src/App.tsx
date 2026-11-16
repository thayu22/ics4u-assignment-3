import { Analysis } from "./components/Analysis";
import { DrawGraph } from "./components/DrawGraph";
import { FormSection } from "./components/FormSection";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { drawGraph } from "./utils/drawGraph";

export const App = () => {
  drawGraph(
    { a: 0, b: 0, c: 0, d: 0 },
    {
      r1: { x: 0, y: 0 },
      r2: { x: 0, y: 0 },
      r3: { x: 0, y: 0 },
    },
    canvas,
  );
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <FormSection />
        <div className="grid grid-cols-2 gap-12">
          <Analysis />
          <Summary />
          <DrawGraph />
        </div>
      </div>
    </div>
  );
};
