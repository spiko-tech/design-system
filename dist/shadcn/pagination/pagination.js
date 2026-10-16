import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { buttonVariants as n } from "../button/button.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import "react";
//#region src/shadcn/pagination/pagination.tsx
var a = ({ className: e, ...n }) => /* @__PURE__ */ r("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: t("mx-auto flex w-full justify-center", e),
	...n
});
a.displayName = "Pagination";
var o = ({ ref: e, className: n, ...i }) => /* @__PURE__ */ r("ul", {
	ref: e,
	className: t("flex flex-row items-center gap-1", n),
	...i
});
o.displayName = "PaginationContent";
var s = ({ ref: e, className: n, ...i }) => /* @__PURE__ */ r("li", {
	ref: e,
	className: t("", n),
	...i
});
s.displayName = "PaginationItem";
var c = ({ className: e, isActive: i, size: a = "icon", ...o }) => /* @__PURE__ */ r("a", {
	"aria-current": i ? "page" : void 0,
	className: t(n({
		variant: i ? "outline" : "ghost",
		size: a
	}), e),
	...o
});
c.displayName = "PaginationLink";
var l = ({ className: n, ...i }) => /* @__PURE__ */ r(c, {
	"aria-label": "Go to previous page",
	size: "sm",
	className: t("gap-1 pl-2.5", n),
	...i,
	children: /* @__PURE__ */ r(e.ChevronLeft, { className: "h-4 w-4" })
});
l.displayName = "PaginationPrevious";
var u = ({ className: n, ...i }) => /* @__PURE__ */ r(c, {
	"aria-label": "Go to next page",
	size: "sm",
	className: t("gap-1 pr-2.5", n),
	...i,
	children: /* @__PURE__ */ r(e.ChevronRight, { className: "h-4 w-4" })
});
u.displayName = "PaginationNext";
var d = ({ className: n, ...a }) => /* @__PURE__ */ i("span", {
	"aria-hidden": !0,
	className: t("flex h-9 w-9 items-center justify-center", n),
	...a,
	children: [/* @__PURE__ */ r(e.MoreHorizontal, { className: "h-4 w-4" }), /* @__PURE__ */ r("span", {
		className: "sr-only",
		children: "More pages"
	})]
});
d.displayName = "PaginationEllipsis";
//#endregion
export { a as Pagination, o as PaginationContent, d as PaginationEllipsis, s as PaginationItem, c as PaginationLink, u as PaginationNext, l as PaginationPrevious };
