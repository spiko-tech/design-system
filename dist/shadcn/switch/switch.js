"use client";
import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { Switch as n } from "radix-ui";
import "react";
//#region src/shadcn/switch/switch.tsx
var r = ({ className: r, ...i }) => /* @__PURE__ */ t(n.Root, {
	"data-slot": "switch",
	className: e("peer shadow-xs inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", r),
	...i,
	children: /* @__PURE__ */ t(n.Thumb, {
		"data-slot": "switch-thumb",
		className: e("shadow-lg pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
	})
});
//#endregion
export { r as Switch };
