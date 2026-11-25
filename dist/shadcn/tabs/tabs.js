"use client";
import { cn as e } from "../../utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import * as r from "react";
import { cva as i } from "class-variance-authority";
import { Tabs as a } from "radix-ui";
//#region src/shadcn/tabs/tabs.tsx
var o = ({ className: n, ...r }) => /* @__PURE__ */ t(a.Root, {
	"data-slot": "tabs",
	className: e("flex flex-col gap-2", n),
	...r
}), s = i("inline-flex items-center justify-center text-text-secondary", {
	variants: { variant: {
		default: "h-9 w-fit rounded-lg bg-secondary p-1",
		underline: "relative h-auto w-full items-stretch justify-start gap-1 overflow-x-auto rounded-none bg-transparent p-0 shadow-[inset_0_-1px_0_0_var(--color-border)] sm:gap-4 lg:items-center lg:gap-6"
	} },
	defaultVariants: { variant: "default" }
}), c = i("inline-flex items-center justify-center gap-1.5 transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: { variant: {
		default: "data-[state=active]:shadow-sm flex-1 rounded-md px-3 py-1 spiko-text-sm-semibold whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
		underline: "min-w-0 flex-1 basis-0 rounded-none border-b-2 border-transparent px-1 py-2 text-center spiko-text-base-semibold whitespace-normal text-text data-[state=active]:text-information data-[state=inactive]:hover:border-border data-[state=inactive]:hover:text-information max-sm:spiko-text-xs-semibold sm:px-2 lg:flex-none lg:px-3 lg:whitespace-nowrap"
	} },
	defaultVariants: { variant: "default" }
}), l = (e) => {
	let t = r.useRef(null), n = r.useRef(null);
	return r.useLayoutEffect(() => {
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
}, u = ({ className: r, variant: i, children: o, ...c }) => {
	let { listRef: u, indicatorRef: d } = l(i === "underline");
	return /* @__PURE__ */ n(a.List, {
		ref: u,
		"data-slot": "tabs-list",
		className: e(s({
			variant: i,
			className: r
		})),
		...c,
		children: [o, i === "underline" && /* @__PURE__ */ t("span", {
			ref: d,
			className: "absolute bottom-0 h-0.5 bg-information"
		})]
	});
}, d = ({ className: n, variant: r, ...i }) => /* @__PURE__ */ t(a.Trigger, {
	"data-slot": "tabs-trigger",
	className: e(c({
		variant: r,
		className: n
	})),
	...i
}), f = ({ className: n, ...r }) => /* @__PURE__ */ t(a.Content, {
	"data-slot": "tabs-content",
	className: e("flex-1 outline-none", n),
	...r
});
//#endregion
export { o as Tabs, f as TabsContent, u as TabsList, d as TabsTrigger };
