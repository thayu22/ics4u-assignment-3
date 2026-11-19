type InputStatus = {
  id: string;
  label: string;
  value: number;
  setValue: (val: number) => void;
};

export const InputLabel = ({ id, label, value, setValue }: InputStatus) => {
  return (
    <label className="group flex flex-col gap-1.5">
      <span className="font-mono text-slate-500 text-xs transition group-focus-within:text-cyan-400">{label}</span>
      <input
        className="w-24 rounded-md border border-slate-800 bg-[#121824] px-3 py-2 text-center font-mono text-white transition focus:border-cyan-500 focus:outline-none"
        name={id}
        onChange={(event) => setValue(Number(event.target.value))}
        type="number"
        value={value}
      />
    </label>
  );
};
