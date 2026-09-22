"use client";
import { cn as e } from "../../utils.js";
import { toggleVariants as t } from "../toggle/toggle.js";
import { jsx as n } from "react/jsx-runtime";
import { ToggleGroup as r } from "radix-ui";
import * as i from "react";
//#region src/shadcn/toggle-group/toggle-group.tsx
var a = i.createContext({
	size: "default",
	variant: "default"
}), o = ({ className: t, variant: i, size: o, children: s, ...c }) => /* @__PURE__ */ n(r.Root, {
	"data-slot": "toggle-group",
	"data-variant": i,
	"data-size": o,
	className: e("group/toggle-group data-[variant=outline]:shadow-xs flex w-fit items-center rounded-md", t),
	...c,
	children: /* @__PURE__ */ n(a.Provider, {
		value: {
			variant: i,
			size: o
		},
		children: s
	})
}), s = ({ className: o, children: s, variant: c, size: l, ...u }) => {
	let d = i.useContext(a);
	return /* @__PURE__ */ n(r.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": d.variant || c,
		"data-size": d.size || l,
		className: e(t({
			variant: d.variant || c,
			size: d.size || l
		}), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", o),
		...u,
		children: s
	});
};
//#endregion
export { o as ToggleGroup, s as ToggleGroupItem };
