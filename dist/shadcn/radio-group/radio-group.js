"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { jsx as n } from "react/jsx-runtime";
import { RadioGroup as r } from "radix-ui";
import "react";
//#region src/shadcn/radio-group/radio-group.tsx
var i = ({ className: e, ...i }) => /* @__PURE__ */ n(r.Root, {
	"data-slot": "radio-group",
	className: t("grid gap-3", e),
	...i
}), a = ({ className: i, ...a }) => /* @__PURE__ */ n(r.Item, {
	"data-slot": "radio-group-item",
	className: t("shadow-xs aspect-square size-4 shrink-0 rounded-full border border-input text-primary transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", i),
	...a,
	children: /* @__PURE__ */ n(r.Indicator, {
		"data-slot": "radio-group-indicator",
		className: "relative flex items-center justify-center",
		children: /* @__PURE__ */ n(e.Circle, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
	})
});
//#endregion
export { i as RadioGroup, a as RadioGroupItem };
