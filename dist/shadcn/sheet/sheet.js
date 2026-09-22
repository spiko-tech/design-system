"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Dialog as i } from "radix-ui";
import "react";
//#region src/shadcn/sheet/sheet.tsx
var a = ({ ...e }) => /* @__PURE__ */ n(i.Root, {
	"data-slot": "sheet",
	...e
}), o = ({ ...e }) => /* @__PURE__ */ n(i.Trigger, {
	"data-slot": "sheet-trigger",
	...e
}), s = ({ ...e }) => /* @__PURE__ */ n(i.Close, {
	"data-slot": "sheet-close",
	...e
}), c = ({ ...e }) => /* @__PURE__ */ n(i.Portal, {
	"data-slot": "sheet-portal",
	...e
}), l = ({ className: e, ...r }) => /* @__PURE__ */ n(i.Overlay, {
	"data-slot": "sheet-overlay",
	className: t("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
	...r
}), u = ({ className: a, children: o, side: s = "right", ...u }) => /* @__PURE__ */ r(c, { children: [/* @__PURE__ */ n(l, {}), /* @__PURE__ */ r(i.Content, {
	"data-slot": "sheet-content",
	className: t("shadow-lg fixed z-50 flex flex-col gap-4 bg-background transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", s === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", s === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", s === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", s === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", a),
	...u,
	children: [o, /* @__PURE__ */ r(i.Close, {
		className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ n(e.X, { className: "size-4" }), /* @__PURE__ */ n("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }), d = ({ className: e, ...r }) => /* @__PURE__ */ n("div", {
	"data-slot": "sheet-header",
	className: t("flex flex-col gap-1.5 p-4", e),
	...r
}), f = ({ className: e, ...r }) => /* @__PURE__ */ n("div", {
	"data-slot": "sheet-footer",
	className: t("mt-auto flex flex-col gap-2 p-4", e),
	...r
}), p = ({ className: e, ...r }) => /* @__PURE__ */ n(i.Title, {
	"data-slot": "sheet-title",
	className: t("text-base-semibold text-foreground", e),
	...r
}), m = ({ className: e, ...r }) => /* @__PURE__ */ n(i.Description, {
	"data-slot": "sheet-description",
	className: t("text-sm text-text-secondary", e),
	...r
});
//#endregion
export { a as Sheet, s as SheetClose, u as SheetContent, m as SheetDescription, f as SheetFooter, d as SheetHeader, p as SheetTitle, o as SheetTrigger };
