export const History = () => {
  return (
    <section className="flex max-h-140 flex-col space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">HISTORY</h2>
      </div>
      <ul className="custom-scrollbar flex-1 space-y-2 overflow-y-auto pr-2 font-mono text-slate-400 text-xs" id="history"></ul>
    </section>
  );
};
