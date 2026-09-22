"use client";
import { cn as e } from "../../utils.js";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "react";
import * as a from "recharts";
//#region src/shadcn/chart/chart.tsx
var o = {
	light: "",
	dark: ".dark"
}, s = i.createContext(null), c = () => {
	let e = i.useContext(s);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}, l = ({ id: t, className: o, children: c, config: l, ...d }) => {
	let f = i.useId(), p = `chart-${t || f.replace(/:/g, "")}`;
	return /* @__PURE__ */ n(s.Provider, {
		value: { config: l },
		children: /* @__PURE__ */ r("div", {
			"data-slot": "chart",
			"data-chart": p,
			className: e("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-secondary-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-secondary [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", o),
			...d,
			children: [/* @__PURE__ */ n(u, {
				id: p,
				config: l
			}), /* @__PURE__ */ n(a.ResponsiveContainer, { children: c })]
		})
	});
}, u = ({ id: e, config: t }) => {
	let r = Object.entries(t).filter(([, e]) => e.theme || e.color);
	return r.length ? /* @__PURE__ */ n("style", { dangerouslySetInnerHTML: { __html: Object.entries(o).map(([t, n]) => `
${n} [data-chart=${e}] {
${r.map(([e, n]) => {
		let r = n.theme?.[t] || n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`).join("\n") } }) : null;
}, d = a.Tooltip, f = ({ active: a, payload: o, className: s, indicator: l = "dot", hideLabel: u = !1, hideIndicator: d = !1, label: f, labelFormatter: p, labelClassName: m, formatter: g, color: _, nameKey: v, labelKey: y }) => {
	let { config: b } = c(), x = i.useMemo(() => {
		if (u || !o?.length) return null;
		let [t] = o, r = `${y || t?.dataKey || t?.name || "value"}`, i = h(b, t, r), a = !y && typeof f == "string" ? b[f]?.label || f : i?.label;
		return p ? /* @__PURE__ */ n("div", {
			className: e("spiko-text-base-medium", m),
			children: p(a, o)
		}) : a ? /* @__PURE__ */ n("div", {
			className: e("spiko-text-base-medium", m),
			children: a
		}) : null;
	}, [
		f,
		p,
		o,
		u,
		m,
		b,
		y
	]);
	if (!a || !o?.length) return null;
	let S = o.length === 1 && l !== "dot";
	return /* @__PURE__ */ r("div", {
		className: e("shadow-xl grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs", s),
		children: [S ? null : x, /* @__PURE__ */ n("div", {
			className: "grid gap-1.5",
			children: o.map((i, a) => {
				let o = `${v || i.name || i.dataKey || "value"}`, s = h(b, i, o), c = _ || i.payload.fill || i.color;
				return /* @__PURE__ */ n("div", {
					className: e("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-text-secondary", l === "dot" && "items-center"),
					children: g && i?.value !== void 0 && i.name ? g(i.value, i.name, i, a, i.payload) : /* @__PURE__ */ r(t, { children: [s?.icon ? /* @__PURE__ */ n(s.icon, {}) : !d && /* @__PURE__ */ n("div", {
						className: e("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": l === "dot",
							"w-1": l === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": l === "dashed",
							"my-0.5": S && l === "dashed"
						}),
						style: {
							"--color-bg": c,
							"--color-border": c
						}
					}), /* @__PURE__ */ r("div", {
						className: e("flex flex-1 justify-between leading-none", S ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ r("div", {
							className: "grid gap-1.5",
							children: [S ? x : null, /* @__PURE__ */ n("span", {
								className: "text-text-secondary",
								children: s?.label || i.name
							})]
						}), i.value && /* @__PURE__ */ n("span", {
							className: "spiko-text-base-medium font-mono text-foreground tabular-nums",
							children: i.value.toLocaleString()
						})]
					})] })
				}, i.dataKey);
			})
		})]
	});
}, p = a.Legend, m = ({ className: t, hideIcon: i = !1, payload: a, verticalAlign: o = "bottom", nameKey: s }) => {
	let { config: l } = c();
	return a?.length ? /* @__PURE__ */ n("div", {
		className: e("flex items-center justify-center gap-4", o === "top" ? "pb-3" : "pt-3", t),
		children: a.map((t) => {
			let a = `${s || t.dataKey || "value"}`, o = h(l, t, a);
			return /* @__PURE__ */ r("div", {
				className: e("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-text-secondary"),
				children: [o?.icon && !i ? /* @__PURE__ */ n(o.icon, {}) : /* @__PURE__ */ n("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: t.color }
				}), o?.label]
			}, t.value);
		})
	}) : null;
}, h = (e, t, n) => {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
};
//#endregion
export { l as ChartContainer, p as ChartLegend, m as ChartLegendContent, u as ChartStyle, d as ChartTooltip, f as ChartTooltipContent };
