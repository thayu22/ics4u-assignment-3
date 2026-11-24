import { AnalysisLabel } from "./AnalysisLabel";

type AnalysisValue = {
  values: {
    pPara: string | number;
    qPara: string | number;
    discriminant: string | number;
    rootOne: string;
    rootTwo: string;
    rootThree: string;
    minimum: string;
    maximum: string;
  };
};

export const Analysis = ({ values }: AnalysisValue) => {
  return (
    <section className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">ANALYSIS</h2>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <AnalysisLabel colour="text-slate-200" id="p" title="[p] parameter" value={String(values.pPara)} />
        <AnalysisLabel colour="text-slate-200" id="q" title="[q] parameter" value={String(values.qPara)} />
        <AnalysisLabel colour="text-amber-400" id="discriminant" title="[Δ] discriminant" value={String(values.discriminant)} />
        <AnalysisLabel colour="text-emerald-400" id="root-one" title="[r1] root alpha" value={String(values.rootOne)} />
        <AnalysisLabel colour="text-emerald-400" id="root-two" title="[r2] root beta" value={String(values.rootTwo)} />
        <AnalysisLabel colour="text-emerald-400" id="root-three" title="[r3] root gamma" value={String(values.rootThree)} />
        <AnalysisLabel colour="text-cyan-400" id="minimum" title="[min] critical point" value={String(values.minimum)} />
        <AnalysisLabel colour="text-purple-400" id="maximum" title="[max] critical point" value={String(values.maximum)} />
      </div>
    </section>
  );
};
