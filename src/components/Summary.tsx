import { SummaryLabel } from "./SummaryLabel"

export const Summary = () => {
  return (
    <section className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">SUMMARY</h2>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <SummaryLabel title = "f(x) expanded polynomial" value = "N/A"></SummaryLabel>
        <SummaryLabel title = "f'(x) first derivative" value = "N/A"></SummaryLabel>
        <SummaryLabel title = "f''(x) second derivative" value = "N/A"></SummaryLabel>
        <SummaryLabel title = "roots" value = "N/A"></SummaryLabel>
        <SummaryLabel title = "factored form" value = "No real factorization"></SummaryLabel>
      </div>
    </section>
  );
};
