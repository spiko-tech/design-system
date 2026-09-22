"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Dialog as n, DialogContent as r, DialogDescription as i, DialogHeader as a, DialogTitle as o } from "../dialog/dialog.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import "react";
import { Command as l } from "cmdk";
//#region src/shadcn/command/command.tsx
var u = ({ className: e, ...n }) => /* @__PURE__ */ s(l, {
	"data-slot": "command",
	className: t("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
	...n
}), d = ({ title: e = "Command Palette", description: t = "Search for a command to run...", children: l, ...d }) => /* @__PURE__ */ s(n, {
	...d,
	children: /* @__PURE__ */ c(r, {
		className: "overflow-hidden p-0",
		children: [/* @__PURE__ */ c(a, {
			className: "sr-only",
			children: [/* @__PURE__ */ s(o, { children: e }), /* @__PURE__ */ s(i, { children: t })]
		}), /* @__PURE__ */ s(u, {
			className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:spiko-text-base-medium [&_[cmdk-group-heading]]:text-text-secondary [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
			children: l
		})]
	})
}), f = ({ className: n, ...r }) => /* @__PURE__ */ c("div", {
	"data-slot": "command-input-wrapper",
	className: "flex h-9 items-center gap-2 border-b px-3",
	children: [/* @__PURE__ */ s(e.Search, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ s(l.Input, {
		"data-slot": "command-input",
		className: t("flex h-10 w-full rounded-md bg-transparent py-3 spiko-text-sm-regular outline-hidden placeholder:text-text-secondary disabled:cursor-not-allowed disabled:opacity-50", n),
		...r
	})]
}), p = ({ className: e, ...n }) => /* @__PURE__ */ s(l.Input, {
	className: t("shadow-sm flex h-12 w-full [appearance:textfield] rounded-md border border-input bg-transparent px-3 py-3 text-base transition-colors file:border-0 file:bg-transparent file:spiko-text-base-medium file:text-base placeholder:text-text-secondary focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none", e),
	...n
}), m = ({ className: e, ...n }) => /* @__PURE__ */ s(l.List, {
	"data-slot": "command-list",
	className: t("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
	...n
}), h = ({ ...e }) => /* @__PURE__ */ s(l.Empty, {
	"data-slot": "command-empty",
	className: "py-6 text-center spiko-text-sm-regular",
	...e
}), g = ({ className: e, ...n }) => /* @__PURE__ */ s(l.Group, {
	"data-slot": "command-group",
	className: t("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:spiko-text-base-medium [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-text-secondary", e),
	...n
}), _ = ({ className: e, ...n }) => /* @__PURE__ */ s(l.Separator, {
	"data-slot": "command-separator",
	className: t("-mx-1 h-px bg-border", e),
	...n
}), v = ({ className: e, ...n }) => /* @__PURE__ */ s(l.Item, {
	"data-slot": "command-item",
	className: t("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 spiko-text-sm-regular outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-secondary", e),
	...n
}), y = ({ className: e, ...n }) => /* @__PURE__ */ s("span", {
	"data-slot": "command-shortcut",
	className: t("ml-auto text-xs tracking-widest text-text-secondary", e),
	...n
});
//#endregion
export { u as Command, p as CommandDefaultInput, d as CommandDialog, h as CommandEmpty, g as CommandGroup, f as CommandInput, v as CommandItem, m as CommandList, _ as CommandSeparator, y as CommandShortcut };
