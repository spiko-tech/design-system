import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Button as n } from "../button/button.js";
import { InputGroup as r, InputGroupAddon as i, InputGroupButton as a, InputGroupInput as o } from "../input-group/input-group.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import * as l from "react";
import { Combobox as u } from "@base-ui/react";
//#region src/shadcn/combobox/combobox.tsx
var d = u.Root, f = ({ ...e }) => /* @__PURE__ */ s(u.Value, {
	"data-slot": "combobox-value",
	...e
}), p = ({ className: n, children: r, ...i }) => /* @__PURE__ */ c(u.Trigger, {
	"data-slot": "combobox-trigger",
	className: t("[&_svg:not([class*='size-'])]:size-4", n),
	...i,
	children: [r, /* @__PURE__ */ s(e.ChevronDown, { className: "pointer-events-none size-4 text-muted-foreground" })]
}), m = ({ className: n, ...r }) => /* @__PURE__ */ s(u.Clear, {
	"data-slot": "combobox-clear",
	className: t(n),
	...r,
	render: /* @__PURE__ */ s(a, {
		variant: "ghost",
		size: "icon-xs",
		children: /* @__PURE__ */ s(e.X, { className: "pointer-events-none" })
	})
}), h = ({ className: e, children: n, disabled: l = !1, showTrigger: d = !0, showClear: f = !1, ...h }) => /* @__PURE__ */ c(r, {
	className: t("w-auto", e),
	children: [
		/* @__PURE__ */ s(u.Input, {
			render: /* @__PURE__ */ s(o, { disabled: l }),
			...h
		}),
		/* @__PURE__ */ c(i, {
			align: "inline-end",
			children: [d && /* @__PURE__ */ s(a, {
				size: "icon-xs",
				variant: "ghost",
				asChild: !0,
				"data-slot": "input-group-button",
				className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
				disabled: l,
				children: /* @__PURE__ */ s(p, {})
			}), f && /* @__PURE__ */ s(m, { disabled: l })]
		}),
		n
	]
}), g = ({ className: e, side: n = "bottom", sideOffset: r = 6, align: i = "start", alignOffset: a = 0, anchor: o, container: c, ...l }) => /* @__PURE__ */ s(u.Portal, {
	container: c,
	children: /* @__PURE__ */ s(u.Positioner, {
		side: n,
		sideOffset: r,
		align: i,
		alignOffset: a,
		anchor: o,
		className: "isolate z-50",
		children: /* @__PURE__ */ s(u.Popup, {
			"data-slot": "combobox-content",
			"data-chips": !!o,
			className: t("group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none", e),
			...l
		})
	})
}), _ = ({ className: e, ...n }) => /* @__PURE__ */ s(u.List, {
	"data-slot": "combobox-list",
	className: t("no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0", e),
	...n
}), v = ({ className: n, children: r, ...i }) => /* @__PURE__ */ c(u.Item, {
	"data-slot": "combobox-item",
	className: t("relative flex w-full cursor-default items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", n),
	...i,
	children: [r, /* @__PURE__ */ s(u.ItemIndicator, { render: /* @__PURE__ */ s("span", {
		className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
		children: /* @__PURE__ */ s(e.Check, { className: "pointer-events-none" })
	}) })]
}), y = ({ className: e, ...n }) => /* @__PURE__ */ s(u.Group, {
	"data-slot": "combobox-group",
	className: t(e),
	...n
}), b = ({ className: e, ...n }) => /* @__PURE__ */ s(u.GroupLabel, {
	"data-slot": "combobox-label",
	className: t("px-2 py-1.5 text-xs text-muted-foreground", e),
	...n
}), x = ({ ...e }) => /* @__PURE__ */ s(u.Collection, {
	"data-slot": "combobox-collection",
	...e
}), S = ({ className: e, ...n }) => /* @__PURE__ */ s(u.Empty, {
	"data-slot": "combobox-empty",
	className: t("hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex", e),
	...n
}), C = ({ className: e, ...n }) => /* @__PURE__ */ s(u.Separator, {
	"data-slot": "combobox-separator",
	className: t("-mx-1 my-1 h-px bg-border", e),
	...n
}), w = ({ className: e, ...n }) => /* @__PURE__ */ s(u.Chips, {
	"data-slot": "combobox-chips",
	className: t("flex min-h-8 flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40", e),
	...n
}), T = ({ className: r, children: i, showRemove: a = !0, ...o }) => /* @__PURE__ */ c(u.Chip, {
	"data-slot": "combobox-chip",
	className: t("flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0", r),
	...o,
	children: [i, a && /* @__PURE__ */ s(u.ChipRemove, {
		className: "-ml-1 opacity-50 hover:opacity-100",
		"data-slot": "combobox-chip-remove",
		render: /* @__PURE__ */ s(n, {
			variant: "ghost",
			className: "size-2 p-0",
			children: /* @__PURE__ */ s(e.X, { className: "pointer-events-none" })
		})
	})]
}), E = ({ className: e, ...n }) => /* @__PURE__ */ s(u.Input, {
	"data-slot": "combobox-chip-input",
	className: t("min-w-16 flex-1 outline-none", e),
	...n
}), D = () => l.useRef(null);
//#endregion
export { d as Combobox, T as ComboboxChip, w as ComboboxChips, E as ComboboxChipsInput, x as ComboboxCollection, g as ComboboxContent, S as ComboboxEmpty, y as ComboboxGroup, h as ComboboxInput, v as ComboboxItem, b as ComboboxLabel, _ as ComboboxList, C as ComboboxSeparator, p as ComboboxTrigger, f as ComboboxValue, D as useComboboxAnchor };
