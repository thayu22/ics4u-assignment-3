type SummaryStatus = {
  title: string;
  value: string;
  colour: string;
  id: string;
};

export const SummaryLabel = ({ title, value, colour, id }: SummaryStatus) => {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
      <span className="text-[10px] text-slate-500 uppercase tracking-wider">{title}</span>
      <span className={`break-all ${colour} text-sm tracking-wide`} id={id}>
        {value}
      </span>
    </div>
  );
};
