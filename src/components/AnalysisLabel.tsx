export type AnalysisStatus = {
  id: string;
  title: string;
  colour: string;
  value: string;
};

export const AnalysisLabel = ({ id, title, colour, value }: AnalysisStatus) => {
  return (
    <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
      <span className="text-slate-500">{title}</span>
      <span className={`font-medium ${colour}`} id={id}>{value}</span>
    </div>
  );
};
