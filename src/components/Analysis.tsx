import { AnalysisLabel } from "./AnalysisLabel";

type AnalysisValue = {
  values: {
    pPara: string;
    qPara: string;
    discriminant: string;
    rootOne: string;
    rootTwo: string;
    rootThree: string;
    minimum: string;
    maximum: string;
  };
};

export const Analysis = ({values}: AnalysisValue) => {
  return (
    <section className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">ANALYSIS</h2>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <AnalysisLabel colour="text-slate-200" id="p" title="[p] parameter" value={values.pPara}></AnalysisLabel>
        <AnalysisLabel colour="text-slate-200" id="q" title="[q] parameter" value={values.qPara}></AnalysisLabel>
        <AnalysisLabel colour="text-amber-400" id="discriminant" title="[Δ] discriminant" value={values.discriminant}></AnalysisLabel>
        <AnalysisLabel colour="text-emerald-400" id="root-one" title="[r1] root alpha" value={values.rootOne}></AnalysisLabel>
        <AnalysisLabel colour="text-emerald-400" id="root-two" title="[r2] root beta" value={values.rootTwo}></AnalysisLabel>
        <AnalysisLabel colour="text-emerald-400" id="root-three" title="[r3] root gamma" value={values.rootThree}></AnalysisLabel>
        <AnalysisLabel colour="text-cyan-400" id="minimum" title="[min] critical point" value={values.minimum}></AnalysisLabel>
        <AnalysisLabel colour="text-purple-400" id="maximum" title="[max] critical point" value={values.maximum}></AnalysisLabel>
      </div>
    </section>
  );
};
