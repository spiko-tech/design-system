"use client";
import { cn as e } from "../../utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { Tooltip as r } from "radix-ui";
import "react";
//#region src/shadcn/tooltip/tooltip.tsx
var i = ({ delayDuration: e = 0, ...n }) => /* @__PURE__ */ t(r.Provider, {
	"data-slot": "tooltip-provider",
	delayDuration: e,
	...n
}), a = ({ ...e }) => /* @__PURE__ */ t(i, { children: /* @__PURE__ */ t(r.Root, {
	"data-slot": "tooltip",
	...e
}) }), o = ({ ...e }) => /* @__PURE__ */ t(r.Trigger, {
	"data-slot": "tooltip-trigger",
	...e
}), s = ({ className: i, sideOffset: a = 0, children: o, showArrow: s = !0, ...c }) => /* @__PURE__ */ t(r.Portal, { children: /* @__PURE__ */ n(r.Content, {
	"data-slot": "tooltip-content",
	sideOffset: a,
	className: e("z-50 w-fit animate-in rounded-md bg-primary px-3 py-1.5 text-xs text-balance text-primary-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", i),
	...c,
	children: [o, s && /* @__PURE__ */ t(r.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-primary fill-primary" })]
}) });
//#endregion
export { a as Tooltip, s as TooltipContent, i as TooltipProvider, o as TooltipTrigger };
