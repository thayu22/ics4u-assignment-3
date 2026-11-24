import type { Coefficients, Coordinate } from "@ics4u-assignment-02/types";
import { drawGraph } from "@ics4u-assignment-02/utils/drawGraph";
import { useEffect, useRef } from "react";

type GraphType = {
  coValues: Coefficients;
  rootOne: Coordinate;
  rootTwo: Coordinate;
  rootThree: Coordinate;
};

export const DrawGraph = ({ coValues, rootOne, rootTwo, rootThree }: GraphType) => {
  const graphRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!graphRef.current) {
      return;
    }
    drawGraph(coValues, { r1: rootOne, r2: rootThree, r3: rootTwo }, graphRef.current);
  }, [coValues, rootOne, rootTwo, rootThree]);

  return (
    <section className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">GRAPH</h2>
      </div>
      <div className="flex-1 rounded-xl border border-slate-900 bg-[#0b0f19]/50 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[16px_16px] p-6 shadow-2xl">
        <canvas
          className="w-full rounded-md border border-slate-900 bg-[#04060a] shadow-inner"
          height="400"
          id="graph"
          ref={graphRef}
          width="400"
        ></canvas>
      </div>
    </section>
  );
};
