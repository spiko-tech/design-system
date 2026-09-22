"use client";
import { cn as e } from "../../utils.js";
import { Button as t, buttonVariants as n } from "../button/button.js";
import { ChevronDownIcon as r, ChevronLeftIcon as i, ChevronRightIcon as a } from "@radix-ui/react-icons";
import { jsx as o } from "react/jsx-runtime";
import * as s from "react";
import { DayPicker as c, getDefaultClassNames as l } from "react-day-picker";
//#region src/shadcn/calendar/calendar.tsx
var u = ({ className: t, classNames: s, showOutsideDays: u = !0, fixedWeeks: f = !0, captionLayout: p = "label", buttonVariant: m = "ghost", formatters: h, components: g, ..._ }) => {
	let v = l();
	return /* @__PURE__ */ o(c, {
		showOutsideDays: u,
		fixedWeeks: f,
		className: e("group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, t),
		captionLayout: p,
		formatters: {
			formatMonthDropdown: (e) => e.toLocaleString("default", { month: "short" }),
			...h
		},
		classNames: {
			root: e("w-fit", v.root),
			months: e("relative flex flex-col gap-4 md:flex-row", v.months),
			month: e("flex w-full flex-col gap-4", v.month),
			nav: e("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", v.nav),
			button_previous: e(n({ variant: m }), "size-(--cell-size) p-0 opacity-50 hover:bg-accent hover:opacity-100 aria-disabled:opacity-50", v.button_previous),
			button_next: e(n({ variant: m }), "size-(--cell-size) p-0 opacity-50 hover:opacity-100 aria-disabled:opacity-50", v.button_next),
			month_caption: e("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", v.month_caption),
			dropdowns: e("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", v.dropdowns),
			dropdown_root: e("shadow-xs relative rounded-md border border-input has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", v.dropdown_root),
			dropdown: e("absolute inset-0 bg-popover opacity-0", v.dropdown),
			caption_label: e("font-medium select-none", p === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", v.caption_label),
			month_grid: "w-full border-collapse",
			weekdays: e("flex", v.weekdays),
			weekday: e("flex-1 rounded-md spiko-text-xs-regular text-text-secondary select-none", v.weekday),
			week: e("mt-2 flex w-full", v.week),
			day: e("group/day relative aspect-square h-full w-full p-0 text-center select-none [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", v.day),
			day_button: e(n({ variant: "ghost" }), "size-8 p-0 font-normal aria-selected:opacity-100", v.day_button),
			range_start: e("rounded-l-md bg-accent", v.range_start),
			range_middle: e("rounded-none", v.range_middle),
			range_end: e("rounded-r-md bg-accent", v.range_end),
			today: e("rounded-md bg-accent text-accent-foreground", v.today),
			outside: e("text-text-secondary hover:opacity-50 aria-selected:text-text-secondary", v.outside),
			disabled: e("text-text-secondary opacity-50", v.disabled),
			hidden: e("invisible", v.hidden),
			selected: e("rounded-md bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground", v.selected),
			...s
		},
		components: {
			Chevron: ({ className: t, orientation: n, ...s }) => o(n === "left" ? i : n === "right" ? a : r, {
				className: e("size-4", t),
				...s
			}),
			DayButton: d,
			...g
		},
		..._
	});
}, d = ({ className: n, day: r, modifiers: i, ...a }) => {
	let c = l(), u = s.useRef(null);
	return s.useEffect(() => {
		i.focused && u.current?.focus();
	}, [i.focused]), /* @__PURE__ */ o(t, {
		ref: u,
		variant: "ghost",
		size: "icon",
		"data-day": r.date.toLocaleDateString(),
		"data-selected-single": i.selected && !i.range_start && !i.range_end && !i.range_middle,
		"data-range-start": i.range_start,
		"data-range-end": i.range_end,
		"data-range-middle": i.range_middle,
		className: e("flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal", "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50", "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground", "data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground", "data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground", "data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground", "dark:hover:text-accent-foreground", "[&>span]:text-xs [&>span]:opacity-70", c.day_button, n),
		...a
	});
};
//#endregion
export { u as Calendar, d as CalendarDayButton };
