"use client";
import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { Popover as n } from "radix-ui";
import "react";
//#region src/shadcn/popover/popover.tsx
var r = ({ ...e }) => /* @__PURE__ */ t(n.Root, {
	"data-slot": "popover",
	...e
}), i = ({ ...e }) => /* @__PURE__ */ t(n.Trigger, {
	"data-slot": "popover-trigger",
	...e
}), a = ({ className: r, align: i = "center", sideOffset: a = 4, ...o }) => /* @__PURE__ */ t(n.Portal, { children: /* @__PURE__ */ t(n.Content, {
	"data-slot": "popover-content",
	align: i,
	sideOffset: a,
	className: e("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", r),
	...o
}) });
//#endregion
export { r as Popover, a as PopoverContent, i as PopoverTrigger };
