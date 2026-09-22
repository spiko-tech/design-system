"use client";
import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { Separator as n } from "radix-ui";
import "react";
//#region src/shadcn/separator/separator.tsx
var r = ({ className: r, orientation: i = "horizontal", decorative: a = !0, ...o }) => /* @__PURE__ */ t(n.Root, {
	"data-slot": "separator-root",
	decorative: a,
	orientation: i,
	className: e("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", r),
	...o
});
//#endregion
export { r as Separator };
