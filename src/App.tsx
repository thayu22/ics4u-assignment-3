import { Analysis } from "./components/Analysis";
import { FormSection } from "./components/FormSection";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";

export const App = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <FormSection />
      <div className="grid grid-cols-2 gap-12">
        <Analysis/>
        <Summary/>
      </div>
      </div>
    </div>
  );
};
