type SummaryStatus = {
    title: string;
    value: string;
}

export const SummaryLabel = ({ title, value }: SummaryStatus) => {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
      <span className="text-[10px] text-slate-500 uppercase tracking-wider">{title}</span>
      <span className="break-all text-slate-200 text-sm tracking-wide" id="equation">
        {value}
      </span>
    </div>
  );
};
