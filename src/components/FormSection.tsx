import { InputLabel } from "./InputLabel";
 
export const FormSection = () => {
  return (
    <section className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0b0f19] p-6 shadow-2xl">
      <div className="absolute top-0 left-0 h-full w-1 bg-cyan-500"></div>
      <form className="flex flex-wrap items-center justify-between gap-6" id="form">
        <div className="flex flex-1 flex-wrap justify-start gap-4 sm:gap-6">
          <InputLabel title="a-value [x³]"></InputLabel>
          <InputLabel title="b-value [x²]"></InputLabel>
          <InputLabel title="c-value [x]"></InputLabel>
          <InputLabel title="d-value [c]"></InputLabel>
        </div>
        <input
          className="w-full cursor-pointer self-end rounded-md bg-cyan-500 px-6 py-3 text-center font-bold font-mono text-[#07090e] text-xs tracking-wider shadow-cyan-500/10 shadow-lg transition duration-150 hover:bg-cyan-400 active:scale-95 sm:w-auto sm:self-auto"
          type="submit"
          value="SAVE"
        />
      </form>
    </section>
  );
};
