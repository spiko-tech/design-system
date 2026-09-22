"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Button as n } from "../button/button.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import * as a from "react";
import o from "embla-carousel-react";
//#region src/shadcn/carousel/carousel.tsx
var s = a.createContext(null), c = () => {
	let e = a.useContext(s);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}, l = () => {
	let { api: e } = c(), [t, n] = a.useState(0), [r, i] = a.useState(null);
	return a.useEffect(() => {
		if (!e) return;
		let t = () => {
			n(e.selectedScrollSnap()), i(e.scrollSnapList().length);
		};
		return t(), e.on("select", t), e.on("reInit", t), e.on("resize", t), () => {
			e.off("select", t), e.off("reInit", t), e.off("resize", t);
		};
	}, [e]), {
		totalSnapCount: r,
		currentSnapIndex: t
	};
}, u = ({ ref: e, orientation: n = "horizontal", opts: i, setApi: c, plugins: l, className: u, children: d, ...f }) => {
	let [p, m] = o({
		...i,
		axis: n === "horizontal" ? "x" : "y"
	}, l), [h, g] = a.useState(!1), [_, v] = a.useState(!1), y = a.useCallback((e) => {
		e && (g(e.canScrollPrev()), v(e.canScrollNext()));
	}, []), b = a.useCallback(() => {
		m?.scrollPrev();
	}, [m]), x = a.useCallback(() => {
		m?.scrollNext();
	}, [m]), S = a.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), b()) : e.key === "ArrowRight" && (e.preventDefault(), x());
	}, [b, x]);
	return a.useEffect(() => {
		m && c && c(m);
	}, [m, c]), a.useEffect(() => {
		if (m) return y(m), m.on("reInit", y), m.on("select", y), () => {
			m?.off("select", y);
		};
	}, [m, y]), /* @__PURE__ */ r(s.Provider, {
		value: {
			carouselRef: p,
			api: m,
			opts: i,
			orientation: n || (i?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: b,
			scrollNext: x,
			canScrollPrev: h,
			canScrollNext: _
		},
		children: /* @__PURE__ */ r("div", {
			ref: e,
			onKeyDownCapture: S,
			className: t("relative", u),
			role: "region",
			"aria-roledescription": "carousel",
			...f,
			children: d
		})
	});
};
u.displayName = "Carousel";
var d = ({ ref: e, className: n, ...i }) => {
	let { carouselRef: a, orientation: o } = c();
	return /* @__PURE__ */ r("div", {
		ref: a,
		className: "overflow-hidden",
		children: /* @__PURE__ */ r("div", {
			ref: e,
			className: t("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", n),
			...i
		})
	});
};
d.displayName = "CarouselContent";
var f = ({ ref: e, className: n, ...i }) => {
	let { orientation: a } = c();
	return /* @__PURE__ */ r("div", {
		ref: e,
		role: "group",
		"aria-roledescription": "slide",
		className: t("min-w-0 shrink-0 grow-0 basis-full", a === "horizontal" ? "pl-4" : "pt-4", n),
		...i
	});
};
f.displayName = "CarouselItem";
var p = ({ ref: a, className: o, variant: s = "outline", size: u = "icon", ...d }) => {
	let { scrollPrev: f, canScrollPrev: p } = c(), { totalSnapCount: m } = l();
	return m === null || m <= 1 ? null : /* @__PURE__ */ i(n, {
		ref: a,
		variant: s,
		size: u,
		className: t("size-9 rounded-md", o),
		disabled: !p,
		onClick: f,
		...d,
		children: [/* @__PURE__ */ r(e.ChevronLeft, { className: "size-4" }), /* @__PURE__ */ r("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
};
p.displayName = "CarouselPrevious";
var m = ({ ref: a, className: o, variant: s = "outline", size: u = "icon", ...d }) => {
	let { scrollNext: f, canScrollNext: p } = c(), { totalSnapCount: m } = l();
	return m === null || m <= 1 ? null : /* @__PURE__ */ i(n, {
		ref: a,
		variant: s,
		size: u,
		className: t("size-9 rounded-md", o),
		disabled: !p,
		onClick: f,
		...d,
		children: [/* @__PURE__ */ r(e.ChevronRight, { className: "size-4" }), /* @__PURE__ */ r("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
};
m.displayName = "CarouselNext";
var h = ({ ref: e, className: n, ...i }) => {
	let { api: a } = c(), { totalSnapCount: o, currentSnapIndex: s } = l();
	return o === null || o <= 1 ? null : /* @__PURE__ */ r("div", {
		ref: e,
		className: t("mt-6 flex items-center justify-center gap-1", n),
		...i,
		children: Array.from({ length: o }, (e, n) => /* @__PURE__ */ r("button", {
			disabled: n === s,
			onClick: () => a?.scrollTo(n),
			className: t("transition-all duration-200", n === s ? "h-2 w-[18px] rounded-full bg-primary" : "size-2 cursor-pointer rounded-full bg-border hover:mx-0.5 hover:scale-140")
		}, n))
	});
};
h.displayName = "CarouselIndicator";
//#endregion
export { u as Carousel, d as CarouselContent, h as CarouselIndicator, f as CarouselItem, m as CarouselNext, p as CarouselPrevious };
