"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { jsx as n } from "react/jsx-runtime";
import { Checkbox as r } from "radix-ui";
import "react";
//#region src/shadcn/checkbox/checkbox.tsx
var i = ({ className: i, ...a }) => /* @__PURE__ */ n(r.Root, {
	"data-slot": "checkbox",
	className: t("peer shadow-xs size-4 shrink-0 rounded-[4px] border-1 border-black transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:aria-invalid:ring-destructive/40", i),
	...a,
	children: /* @__PURE__ */ n(r.Indicator, {
		"data-slot": "checkbox-indicator",
		className: "flex items-center justify-center text-current transition-none",
		children: /* @__PURE__ */ n(e.Check, { className: "size-3.5" })
	})
});
//#endregion
export { i as Checkbox };
