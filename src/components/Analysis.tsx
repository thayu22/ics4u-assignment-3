import { AnalysisLabel } from "./AnalysisLabel";

export const Analysis = () => {
  return (
    <section className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">ANALYSIS</h2>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <AnalysisLabel colour="text-slate-200" id="p" title="[p] parameter" value="0.0000"></AnalysisLabel>
        <AnalysisLabel colour="text-slate-200" id="q" title="[q] parameter" value="0.0000"></AnalysisLabel>
        <AnalysisLabel colour="text-amber-400" id="discriminant" title="[Δ] discriminant" value="0.0000"></AnalysisLabel>
        <AnalysisLabel colour="text-emerald-400" id="root-one" title="[r1] root alpha" value="x: N/A | y: N/A"></AnalysisLabel>
        <AnalysisLabel colour="text-emerald-400" id="root-two" title="[r2] root beta" value="x: N/A | y: N/A"></AnalysisLabel>
        <AnalysisLabel colour="text-emerald-400" id="root-three" title="[r3] root gamma" value="x: N/A | y: N/A"></AnalysisLabel>
        <AnalysisLabel colour="text-cyan-400" id="minimum" title="[min] critical point" value="x: N/A | y: N/A"></AnalysisLabel>
        <AnalysisLabel colour="text-purple-400" id="maximum" title="[max] critical point" value="x: N/A | y: N/A"></AnalysisLabel>
      </div>
    </section>
  );
};
