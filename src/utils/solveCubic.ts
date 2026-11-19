import type { Results, RootCoordinate } from "@ics4u-assignment-02/types";
import { cardano } from "./cardano";
import { firstDer } from "./firstDer";
import { round } from "./round";
import { trigonometry } from "./trigonometry";

export function solveCubic(pValue: number, qValue: number, a: number, b: number, c: number, d: number, discriminants: number) {
  const firDer = firstDer(a, b, c);
  let rootFinal: RootCoordinate;
  if (discriminants < 0) {
    rootFinal = trigonometry(pValue, qValue, a, b);
  } else {
    rootFinal = cardano(pValue, qValue, a, b, discriminants);
  }

  const { rootOne, rootTwo, rootThr } = rootFinal;
  const { aCoef, bCoef, cCoef } = firDer;
  const firstDisc = 2 * b * (2 * b) - 4 * 3 * a * c;

  let xValueOne: number;
  let xValueTwo: number;
  let yValueOne: number;
  let yValueTwo: number;

  if (firstDisc > 0) {
    xValueOne = (-2 * b + Math.sqrt(firstDisc)) / (a * 6);
    xValueTwo = (-2 * b - Math.sqrt(firstDisc)) / (a * 6);
    yValueOne = a * xValueOne * xValueOne * xValueOne + b * xValueOne * xValueOne + c * xValueOne + d;
    yValueTwo = a * xValueTwo * xValueTwo * xValueTwo + b * xValueTwo * xValueTwo + c * xValueTwo + d;
  } else if (firstDisc === 0) {
    xValueOne = (-2 * b) / (a * 6);
    xValueTwo = xValueOne;
    yValueOne = a * xValueOne * xValueOne * xValueOne + b * xValueOne * xValueOne + c * xValueOne + d;
    yValueTwo = yValueOne;
  } else {
    xValueOne = NaN;
    xValueTwo = NaN;
    yValueOne = NaN;
    yValueTwo = NaN;
  }
  let status: string;

  if (discriminants < 0) {
    status = "3 Distinct Real Roots";
  } else if (discriminants > 0) {
    status = "1 Real root, 2 Complex Roots";
  } else {
    if (pValue === 0 && qValue === 0) {
      status = "Triple Real Roots";
    } else if (pValue === 0) {
      status = "Double Real Roots, Single Real Root";
    } else {
      status = "N/A";
    }
  }
  const secondDerivativeOne = 6 * a * xValueOne + 2 * b;
  const secondDerivativeTwo = 6 * a * xValueTwo + 2 * b;

  const result: Results = {
    discriminant: discriminants,
    equation: `${a}x³ ${b >= 0 ? "+" : ""} ${b}x² ${c >= 0 ? "+" : ""} ${c}x ${d >= 0 ? "+" : ""} ${d}`,
    factored: `${!Number.isNaN(rootTwo.x) || !Number.isNaN(rootThr.x) ? `${a === -1 ? "-" : a === 1 ? "" : a} (x ${(Number(rootOne.x)) < 0 ? "+" : "-"} ${Math.abs(Number(round(rootOne.x)))}) ${typeof rootTwo.x === "number" && !Number.isNaN(rootTwo.x) ? `(x ${rootTwo.x < 0 ? "+" : "-"} ${Math.abs(Number(round(rootTwo.x)))})` : ""} ${typeof rootThr.x === "number" && !Number.isNaN(rootThr.x) ? `(x ${rootThr.x < 0 ? "+" : "-"} ${Math.abs(Number(round(rootThr.x)))})` : ""}` : `No real factorization`}`,
    firstDerivative: `${aCoef}x² ${bCoef > 0 ? "+" : ""} ${bCoef === 0 ? "" : `${bCoef}x`} ${cCoef > 0 ? "+" : ""} ${cCoef === 0 ? "" : cCoef}`,
    maximum: { x: "x: N/A", y: "y: N/A" },
    minimum: { x: "x: N/A", y: "y: N/A" },
    p: pValue,
    q: qValue,
    r1: { x: rootOne.x, y: rootOne.y },
    r2: { x: rootTwo.x, y: rootTwo.y },
    r3: { x: rootThr.x, y: rootThr.y },
    roots: status,
    secondDerivative: `${aCoef === 0 ? "" : `${aCoef * 2}x`} ${bCoef > 0 ? "+" : ""} ${bCoef === 0 ? "" : bCoef}`,
  };

  if (secondDerivativeOne < 0) {
    result.maximum = {
      x: xValueOne,
      y: yValueOne,
    };
  } else if (secondDerivativeOne > 0) {
    result.minimum = {
      x: xValueOne,
      y: yValueOne,
    };
  }

  if (secondDerivativeTwo < 0) {
    result.maximum = {
      x: xValueTwo,
      y: yValueTwo,
    };
  } else if (secondDerivativeTwo > 0) {
    result.minimum = {
      x: xValueTwo,
      y: yValueTwo,
    };
  }

  return result;
}
