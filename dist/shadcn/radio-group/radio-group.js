"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Label as n } from "../label/label.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import "react";
import { RadioGroup as a } from "radix-ui";
//#region src/shadcn/radio-group/radio-group.tsx
var o = ({ className: e, ...n }) => /* @__PURE__ */ r(a.Root, {
	"data-slot": "radio-group",
	className: t("grid gap-3", e),
	...n
}), s = ({ className: n, ...i }) => /* @__PURE__ */ r(a.Item, {
	"data-slot": "radio-group-item",
	className: t("shadow-xs aspect-square size-4 shrink-0 rounded-full border border-input text-primary transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", n),
	...i,
	children: /* @__PURE__ */ r(a.Indicator, {
		"data-slot": "radio-group-indicator",
		className: "relative flex items-center justify-center",
		children: /* @__PURE__ */ r(e.Circle, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
	})
}), c = ({ label: e, description: a, className: o, ...c }) => /* @__PURE__ */ i(n, {
	"data-slot": "radio-group-card",
	className: t("flex items-center gap-4 rounded-[6px] border p-3 spiko-text-sm-regular has-data-[state=checked]:border-border-accent", o),
	children: [/* @__PURE__ */ r(s, { ...c }), /* @__PURE__ */ i("div", {
		className: "flex flex-col gap-1.5 leading-5",
		children: [/* @__PURE__ */ r("span", { children: e }), a && /* @__PURE__ */ r("p", {
			className: "text-text-secondary",
			children: a
		})]
	})]
});
//#endregion
export { o as RadioGroup, c as RadioGroupCard, s as RadioGroupItem };
