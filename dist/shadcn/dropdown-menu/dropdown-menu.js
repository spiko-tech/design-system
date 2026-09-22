"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { DropdownMenu as i } from "radix-ui";
import "react";
//#region src/shadcn/dropdown-menu/dropdown-menu.tsx
var a = ({ ...e }) => /* @__PURE__ */ n(i.Root, {
	"data-slot": "dropdown-menu",
	...e
}), o = ({ ...e }) => /* @__PURE__ */ n(i.Portal, {
	"data-slot": "dropdown-menu-portal",
	...e
}), s = ({ ...e }) => /* @__PURE__ */ n(i.Trigger, {
	"data-slot": "dropdown-menu-trigger",
	...e
}), c = ({ className: e, sideOffset: r = 4, ...a }) => /* @__PURE__ */ n(i.Portal, { children: /* @__PURE__ */ n(i.Content, {
	"data-slot": "dropdown-menu-content",
	sideOffset: r,
	className: t("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
	...a
}) }), l = ({ ...e }) => /* @__PURE__ */ n(i.Group, {
	"data-slot": "dropdown-menu-group",
	...e
}), u = ({ className: e, inset: r, variant: a = "default", ...o }) => /* @__PURE__ */ n(i.Item, {
	"data-slot": "dropdown-menu-item",
	"data-inset": r,
	"data-variant": a,
	className: t("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 spiko-text-sm-regular outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive-foreground dark:data-[variant=destructive]:focus:bg-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-secondary data-[variant=destructive]:*:[svg]:!text-destructive-foreground", e),
	...o
}), d = ({ className: a, children: o, checked: s, ...c }) => /* @__PURE__ */ r(i.CheckboxItem, {
	"data-slot": "dropdown-menu-checkbox-item",
	className: t("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 spiko-text-sm-regular outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", a),
	...s ? { checked: s } : {},
	...c,
	children: [/* @__PURE__ */ n("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ n(i.ItemIndicator, { children: /* @__PURE__ */ n(e.Check, { className: "size-4" }) })
	}), o]
}), f = ({ ...e }) => /* @__PURE__ */ n(i.RadioGroup, {
	"data-slot": "dropdown-menu-radio-group",
	...e
}), p = ({ className: a, children: o, ...s }) => /* @__PURE__ */ r(i.RadioItem, {
	"data-slot": "dropdown-menu-radio-item",
	className: t("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 spiko-text-sm-regular outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", a),
	...s,
	children: [/* @__PURE__ */ n("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ n(i.ItemIndicator, { children: /* @__PURE__ */ n(e.Circle, { className: "size-2 fill-current" }) })
	}), o]
}), m = ({ className: e, inset: r, ...a }) => /* @__PURE__ */ n(i.Label, {
	"data-slot": "dropdown-menu-label",
	"data-inset": r,
	className: t("px-2 py-1.5 spiko-text-sm-medium data-[inset]:pl-8", e),
	...a
}), h = ({ className: e, ...r }) => /* @__PURE__ */ n(i.Separator, {
	"data-slot": "dropdown-menu-separator",
	className: t("-mx-1 my-1 h-px bg-border", e),
	...r
}), g = ({ className: e, ...r }) => /* @__PURE__ */ n("span", {
	"data-slot": "dropdown-menu-shortcut",
	className: t("ml-auto text-xs tracking-widest text-text-secondary", e),
	...r
}), _ = ({ ...e }) => /* @__PURE__ */ n(i.Sub, {
	"data-slot": "dropdown-menu-sub",
	...e
}), v = ({ className: a, inset: o, children: s, ...c }) => /* @__PURE__ */ r(i.SubTrigger, {
	"data-slot": "dropdown-menu-sub-trigger",
	"data-inset": o,
	className: t("flex cursor-default items-center rounded-sm px-2 py-1.5 spiko-text-sm-regular outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", a),
	...c,
	children: [s, /* @__PURE__ */ n(e.ChevronRight, { className: "ml-auto size-4" })]
}), y = ({ className: e, ...r }) => /* @__PURE__ */ n(i.SubContent, {
	"data-slot": "dropdown-menu-sub-content",
	className: t("shadow-lg z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
	...r
});
//#endregion
export { a as DropdownMenu, d as DropdownMenuCheckboxItem, c as DropdownMenuContent, l as DropdownMenuGroup, u as DropdownMenuItem, m as DropdownMenuLabel, o as DropdownMenuPortal, f as DropdownMenuRadioGroup, p as DropdownMenuRadioItem, h as DropdownMenuSeparator, g as DropdownMenuShortcut, _ as DropdownMenuSub, y as DropdownMenuSubContent, v as DropdownMenuSubTrigger, s as DropdownMenuTrigger };
