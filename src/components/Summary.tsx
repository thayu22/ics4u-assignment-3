import { SummaryLabel } from "./SummaryLabel";

export const Summary = () => {
  return (
    <section className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">SUMMARY</h2>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <SummaryLabel colour="text-slate-200" id="equation" title="f(x) expanded polynomial" value="N/A"></SummaryLabel>
        <SummaryLabel colour="text-cyan-400" id="first-derivative" title="f'(x) first derivative" value="N/A"></SummaryLabel>
        <SummaryLabel colour="text-purple-400" id="second-derivative" title="f''(x) second derivative" value="N/A"></SummaryLabel>
        <SummaryLabel colour="text-emerald-400" id="roots" title="roots" value="N/A"></SummaryLabel>
        <SummaryLabel colour="text-white" id="factored" title="factored form" value="No real factorization"></SummaryLabel>
      </div>
    </section>
  );
};
