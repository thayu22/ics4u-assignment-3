import { AnalysisLabel } from "./AnalysisLabel";

export const Analysis = () => {
  return (
    <section className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">ANALYSIS</h2>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <AnalysisLabel colour="" id="" title="[p] parameter" value="0.0000"></AnalysisLabel>
        <AnalysisLabel colour="" id="" title="[q] parameter" value="0.0000"></AnalysisLabel>
        <AnalysisLabel colour="" id="" title="[Δ] discriminant" value="0.0000"></AnalysisLabel>
        <AnalysisLabel colour="" id="" title="[r1] root alpha" value="x: N/A | y: N/A"></AnalysisLabel>
        <AnalysisLabel colour="" id="" title="[r2] root beta" value="x: N/A | y: N/A"></AnalysisLabel>
        <AnalysisLabel colour="" id="" title="[r3] root gamma" value="x: N/A | y: N/A"></AnalysisLabel>
        <AnalysisLabel colour="" id="" title="[min] critical point" value="x: N/A | y: N/A"></AnalysisLabel>
        <AnalysisLabel colour="" id="" title="[max] critical point" value="x: N/A | y: N/A"></AnalysisLabel>
      </div>
    </section>
  );
};
