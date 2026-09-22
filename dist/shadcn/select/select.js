"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Skeleton as n } from "../skeleton/skeleton.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { Select as a } from "radix-ui";
import "react";
//#region src/shadcn/select/select.tsx
var o = ({ ...e }) => /* @__PURE__ */ r(a.Root, {
	"data-slot": "select",
	...e
}), s = ({ ...e }) => /* @__PURE__ */ r(a.Group, {
	"data-slot": "select-group",
	...e
}), c = ({ className: e, ...n }) => /* @__PURE__ */ r(a.Value, {
	"data-slot": "select-value",
	className: t("min-w-0 truncate text-left", e),
	...n
}), l = ({ className: n, children: o, ...s }) => /* @__PURE__ */ i(a.Trigger, {
	"data-slot": "select-trigger",
	className: t("shadow-xs flex h-11 items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-placeholder:text-text-secondary *:data-[slot=select-value]:min-w-0 *:data-[slot=select-value]:flex-1 *:data-[slot=select-value]:items-center *:data-[slot=select-value]:justify-start *:data-[slot=select-value]:gap-2 *:data-[slot=select-value]:truncate *:data-[slot=select-value]:overflow-hidden *:data-[slot=select-value]:text-left dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-secondary", n),
	...s,
	children: [o, /* @__PURE__ */ r(a.Icon, {
		asChild: !0,
		children: /* @__PURE__ */ r(e.ChevronDown, { className: "size-4 opacity-50" })
	})]
}), u = ({ className: o, children: s }) => /* @__PURE__ */ i("div", {
	className: t("shadow-xs flex h-11 items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-placeholder:text-text-secondary *:data-[slot=select-value]:min-w-0 *:data-[slot=select-value]:flex-1 *:data-[slot=select-value]:items-center *:data-[slot=select-value]:justify-start *:data-[slot=select-value]:gap-2 *:data-[slot=select-value]:truncate *:data-[slot=select-value]:overflow-hidden *:data-[slot=select-value]:text-left dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-secondary", o),
	children: [
		s,
		/* @__PURE__ */ r(n, { className: "h-4 w-20" }),
		/* @__PURE__ */ r(a.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ r(e.ChevronDown, { className: "size-4 opacity-50" })
		})
	]
}), d = ({ className: e, children: n, position: o = "popper", ...s }) => /* @__PURE__ */ r(a.Portal, { children: /* @__PURE__ */ i(a.Content, {
	"data-slot": "select-content",
	className: t("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", o === "popper" && "w-max max-w-(--radix-select-content-available-width) data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
	position: o,
	...s,
	children: [
		/* @__PURE__ */ r(g, {}),
		/* @__PURE__ */ r(a.Viewport, {
			className: t("p-1", o === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width) scroll-my-1"),
			children: n
		}),
		/* @__PURE__ */ r(_, {})
	]
}) }), f = ({ className: e, ...n }) => /* @__PURE__ */ r(a.Label, {
	"data-slot": "select-label",
	className: t("mb-1 border-b border-border px-2 py-1.5 spiko-text-sm-semibold", e),
	...n
}), p = ({ className: n, children: o, ...s }) => /* @__PURE__ */ i(a.Item, {
	"data-slot": "select-item",
	className: t("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-[state=checked]:bg-secondary [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text *:[span]:last:flex *:[span]:last:w-full *:[span]:last:items-center *:[span]:last:gap-2", n),
	...s,
	children: [/* @__PURE__ */ r("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ r(a.ItemIndicator, { children: /* @__PURE__ */ r(e.Check, {
			className: "size-4",
			strokeWidth: 2.5
		}) })
	}), /* @__PURE__ */ r(a.ItemText, { children: o })]
}), m = ({ className: e, children: n, ...i }) => /* @__PURE__ */ r(a.Item, {
	"data-slot": "select-item-simple",
	className: t("flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-[state=checked]:bg-secondary [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text *:[span]:last:flex *:[span]:last:w-full *:[span]:last:items-center *:[span]:last:gap-2", e),
	...i,
	children: /* @__PURE__ */ r(a.ItemText, { children: n })
}), h = ({ className: e, ...n }) => /* @__PURE__ */ r(a.Separator, {
	"data-slot": "select-separator",
	className: t("pointer-events-none -mx-1 my-1 h-px bg-border", e),
	...n
}), g = ({ className: n, ...i }) => /* @__PURE__ */ r(a.ScrollUpButton, {
	"data-slot": "select-scroll-up-button",
	className: t("flex cursor-default items-center justify-center py-1", n),
	...i,
	children: /* @__PURE__ */ r(e.ChevronUp, { className: "size-4" })
}), _ = ({ className: n, ...i }) => /* @__PURE__ */ r(a.ScrollDownButton, {
	"data-slot": "select-scroll-down-button",
	className: t("flex cursor-default items-center justify-center py-1", n),
	...i,
	children: /* @__PURE__ */ r(e.ChevronDown, { className: "size-4" })
});
//#endregion
export { o as Select, d as SelectContent, s as SelectGroup, p as SelectItem, m as SelectItemSimple, f as SelectLabel, _ as SelectScrollDownButton, g as SelectScrollUpButton, h as SelectSeparator, l as SelectTrigger, u as SelectTriggerSkeleton, c as SelectValue };
