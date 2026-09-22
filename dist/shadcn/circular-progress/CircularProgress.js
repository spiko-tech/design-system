import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/shadcn/circular-progress/CircularProgress.tsx
var n = ({ initialPercentage: n = 0, animateDurationMs: r, innerColor: i = "#16A34A", outerColor: a = "#DCFCE7", padding: o = 2, size: s = 16, outerLoopDurationMs: c = 1e4, borderColor: l = "#16A34A", borderWidth: u = 1 }) => {
	let d = s / 2, f = d - u, p = f - o, m = 2 * Math.PI * (d - u / 2), h = (c ?? 0) > 0, g = 2 * Math.PI * p, _ = g * (1 - n / 100), v = h ? (c ?? 0) / 1e3 : 0, y = r / 1e3;
	return /* @__PURE__ */ t("svg", {
		width: s,
		height: s,
		viewBox: `0 0 ${s} ${s}`,
		children: [
			/* @__PURE__ */ e("circle", {
				cx: d,
				cy: d,
				r: f,
				fill: a
			}),
			h && /* @__PURE__ */ e("circle", {
				cx: d,
				cy: d,
				r: d - u / 2,
				fill: "none",
				stroke: l,
				strokeWidth: u,
				strokeDasharray: m,
				strokeDashoffset: m,
				style: {
					transform: "rotate(-90deg)",
					transformOrigin: "50% 50%"
				},
				children: /* @__PURE__ */ e("animate", {
					attributeName: "stroke-dashoffset",
					from: m,
					to: 0,
					dur: `${v}s`,
					repeatCount: "indefinite"
				})
			}),
			/* @__PURE__ */ e("circle", {
				cx: d,
				cy: d,
				r: p / 2,
				fill: "none",
				stroke: i,
				strokeWidth: p,
				strokeDasharray: g / 2,
				strokeDashoffset: _ / 2,
				style: {
					transform: "rotate(-90deg)",
					transformOrigin: "50% 50%"
				},
				children: /* @__PURE__ */ e("animate", {
					attributeName: "stroke-dashoffset",
					from: _ / 2,
					to: 0,
					dur: `${y}s`,
					fill: "freeze",
					calcMode: "linear"
				})
			})
		]
	});
};
//#endregion
export { n as CircularProgress };
