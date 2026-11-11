"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "react";
import { cva as a } from "class-variance-authority";
import { Accordion as o } from "radix-ui";
//#region src/shadcn/accordion/accordion.tsx
var s = a("", {
	variants: { variant: {
		default: "",
		card: "flex flex-col gap-4"
	} },
	defaultVariants: { variant: "default" }
}), c = a("", {
	variants: { variant: {
		default: "border-b last:border-b-0",
		card: "rounded-md border px-4"
	} },
	defaultVariants: { variant: "default" }
}), l = a("flex flex-1 items-start justify-between gap-4 text-left transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", {
	variants: { variant: {
		default: "rounded-md py-4 spiko-text-sm-medium hover:underline",
		card: "rounded-md py-4 spiko-text-base-medium"
	} },
	defaultVariants: { variant: "default" }
}), u = a("pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200", {
	variants: { variant: {
		default: "size-4 text-text-secondary",
		card: "size-6 text-text"
	} },
	defaultVariants: { variant: "default" }
}), d = a("overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", {
	variants: { variant: {
		default: "spiko-text-sm-regular",
		card: "spiko-text-sm-regular"
	} },
	defaultVariants: { variant: "default" }
}), f = i.createContext("default"), p = ({ variant: e = "default", className: r, ...i }) => /* @__PURE__ */ n(f.Provider, {
	value: e,
	children: /* @__PURE__ */ n(o.Root, {
		"data-slot": "accordion",
		className: t(s({ variant: e }), r),
		...i
	})
}), m = ({ className: e, ...r }) => {
	let a = i.useContext(f);
	return /* @__PURE__ */ n(o.Item, {
		"data-slot": "accordion-item",
		className: t(c({ variant: a }), e),
		...r
	});
}, h = ({ className: a, children: s, ...c }) => {
	let d = i.useContext(f);
	return /* @__PURE__ */ n(o.Header, {
		className: "flex",
		children: /* @__PURE__ */ r(o.Trigger, {
			"data-slot": "accordion-trigger",
			className: t(l({ variant: d }), a),
			...c,
			children: [s, /* @__PURE__ */ n(e.ChevronDown, { className: u({ variant: d }) })]
		})
	});
}, g = ({ className: e, children: r, ...a }) => {
	let s = i.useContext(f);
	return /* @__PURE__ */ n(o.Content, {
		"data-slot": "accordion-content",
		className: d({ variant: s }),
		...a,
		children: /* @__PURE__ */ n("div", {
			className: t("pt-0 pb-4", e),
			children: r
		})
	});
};
//#endregion
export { p as Accordion, g as AccordionContent, m as AccordionItem, h as AccordionTrigger };
