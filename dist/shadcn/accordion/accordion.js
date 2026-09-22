"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { cva as i } from "class-variance-authority";
import { Accordion as a } from "radix-ui";
import * as o from "react";
//#region src/shadcn/accordion/accordion.tsx
var s = i("", {
	variants: { variant: {
		default: "",
		card: "flex flex-col gap-4"
	} },
	defaultVariants: { variant: "default" }
}), c = i("", {
	variants: { variant: {
		default: "border-b last:border-b-0",
		card: "rounded-md border px-4"
	} },
	defaultVariants: { variant: "default" }
}), l = i("flex flex-1 items-start justify-between gap-4 text-left transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", {
	variants: { variant: {
		default: "rounded-md py-4 spiko-text-sm-medium hover:underline",
		card: "rounded-md py-4 spiko-text-base-medium"
	} },
	defaultVariants: { variant: "default" }
}), u = i("pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200", {
	variants: { variant: {
		default: "size-4 text-text-secondary",
		card: "size-6 text-text"
	} },
	defaultVariants: { variant: "default" }
}), d = i("overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", {
	variants: { variant: {
		default: "spiko-text-sm-regular",
		card: "spiko-text-sm-regular"
	} },
	defaultVariants: { variant: "default" }
}), f = o.createContext("default"), p = ({ variant: e = "default", className: r, ...i }) => /* @__PURE__ */ n(f.Provider, {
	value: e,
	children: /* @__PURE__ */ n(a.Root, {
		"data-slot": "accordion",
		className: t(s({ variant: e }), r),
		...i
	})
}), m = ({ className: e, ...r }) => {
	let i = o.useContext(f);
	return /* @__PURE__ */ n(a.Item, {
		"data-slot": "accordion-item",
		className: t(c({ variant: i }), e),
		...r
	});
}, h = ({ className: i, children: s, ...c }) => {
	let d = o.useContext(f);
	return /* @__PURE__ */ n(a.Header, {
		className: "flex",
		children: /* @__PURE__ */ r(a.Trigger, {
			"data-slot": "accordion-trigger",
			className: t(l({ variant: d }), i),
			...c,
			children: [s, /* @__PURE__ */ n(e.ChevronDown, { className: u({ variant: d }) })]
		})
	});
}, g = ({ className: e, children: r, ...i }) => {
	let s = o.useContext(f);
	return /* @__PURE__ */ n(a.Content, {
		"data-slot": "accordion-content",
		className: d({ variant: s }),
		...i,
		children: /* @__PURE__ */ n("div", {
			className: t("pt-0 pb-4", e),
			children: r
		})
	});
};
//#endregion
export { p as Accordion, g as AccordionContent, m as AccordionItem, h as AccordionTrigger };
