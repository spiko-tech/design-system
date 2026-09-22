"use client";
import { cn as e } from "../../utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { cva as r } from "class-variance-authority";
import { Tabs as i } from "radix-ui";
import * as a from "react";
//#region src/shadcn/tabs/tabs.tsx
var o = ({ className: n, ...r }) => /* @__PURE__ */ t(i.Root, {
	"data-slot": "tabs",
	className: e("flex flex-col gap-2", n),
	...r
}), s = r("inline-flex items-center justify-center text-text-secondary", {
	variants: { variant: {
		default: "h-9 w-fit rounded-lg bg-secondary p-1",
		underline: "relative h-auto w-full items-stretch justify-start gap-1 overflow-x-auto rounded-none bg-transparent p-0 shadow-[inset_0_-1px_0_0_var(--color-border)] sm:gap-4 lg:items-center lg:gap-6"
	} },
	defaultVariants: { variant: "default" }
}), c = (e) => {
	let t = a.useRef(null), n = a.useRef(null);
	return a.useLayoutEffect(() => {
		let r = t.current, i = n.current;
		if (!e || !r || !i) return;
		let a = (e) => {
			let t = r.querySelector("[data-state=\"active\"]");
			if (!t) {
				i.style.width = "0";
				return;
			}
			let n = i.getBoundingClientRect().width, a = i.getBoundingClientRect().left - r.getBoundingClientRect().left + r.scrollLeft;
			for (let e of i.getAnimations()) e.cancel();
			let { offsetLeft: o, offsetWidth: s } = t;
			if (i.style.left = `${o}px`, i.style.width = `${s}px`, !e || n === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
			let c = o >= a ? {
				left: `${a}px`,
				width: `${o + s - a}px`
			} : {
				left: `${o}px`,
				width: `${a + n - o}px`
			};
			i.animate([
				{
					left: `${a}px`,
					width: `${n}px`
				},
				{
					...c,
					offset: .5
				},
				{
					left: `${o}px`,
					width: `${s}px`
				}
			], {
				duration: 300,
				easing: "ease-in-out"
			});
		};
		a(!1);
		let o = new ResizeObserver(() => a(!1)), s = () => {
			for (let e of r.children) e !== i && o.observe(e);
		};
		o.observe(r), s();
		let c = new MutationObserver((e) => {
			a(e.some((e) => e.type === "attributes")), s();
		});
		return c.observe(r, {
			subtree: !0,
			childList: !0,
			attributeFilter: ["data-state"]
		}), () => {
			c.disconnect(), o.disconnect();
		};
	}, [e]), {
		listRef: t,
		indicatorRef: n
	};
}, l = ({ className: r, variant: a, children: o, ...l }) => {
	let { listRef: u, indicatorRef: d } = c(a === "underline");
	return /* @__PURE__ */ n(i.List, {
		ref: u,
		"data-slot": "tabs-list",
		className: e(s({
			variant: a,
			className: r
		})),
		...l,
		children: [o, a === "underline" && /* @__PURE__ */ t("span", {
			ref: d,
			className: "absolute bottom-0 h-0.5 bg-information"
		})]
	});
}, u = r("inline-flex items-center justify-center gap-1.5 transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: { variant: {
		default: "data-[state=active]:shadow-sm flex-1 rounded-md px-2 py-1 spiko-text-sm-semibold whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
		underline: "min-w-0 flex-1 basis-0 rounded-none border-b-2 border-transparent px-1 py-2 text-center spiko-text-base-semibold whitespace-normal text-text data-[state=active]:text-information data-[state=inactive]:hover:border-border data-[state=inactive]:hover:text-information max-sm:spiko-text-xs-semibold sm:px-2 lg:flex-none lg:px-3 lg:whitespace-nowrap"
	} },
	defaultVariants: { variant: "default" }
}), d = ({ className: n, variant: r, ...a }) => /* @__PURE__ */ t(i.Trigger, {
	"data-slot": "tabs-trigger",
	className: e(u({
		variant: r,
		className: n
	})),
	...a
}), f = ({ className: n, ...r }) => /* @__PURE__ */ t(i.Content, {
	"data-slot": "tabs-content",
	className: e("flex-1 outline-none", n),
	...r
});
//#endregion
export { o as Tabs, f as TabsContent, l as TabsList, d as TabsTrigger };
