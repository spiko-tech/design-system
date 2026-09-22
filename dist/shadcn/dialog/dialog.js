"use client";
import { cn as e } from "../../utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { Dialog as r } from "radix-ui";
import "react";
//#region src/shadcn/dialog/dialog.tsx
var i = ({ ...e }) => /* @__PURE__ */ t(r.Root, {
	"data-slot": "dialog",
	...e
}), a = ({ ...e }) => /* @__PURE__ */ t(r.Trigger, {
	"data-slot": "dialog-trigger",
	...e
}), o = ({ ...e }) => /* @__PURE__ */ t(r.Portal, {
	"data-slot": "dialog-portal",
	...e
}), s = ({ ...e }) => /* @__PURE__ */ t(r.Close, {
	"data-slot": "dialog-close",
	...e
}), c = ({ className: n, ...i }) => /* @__PURE__ */ t(r.Overlay, {
	"data-slot": "dialog-overlay",
	className: e("fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", n),
	...i
}), l = ({ className: i, children: a, overlayProps: s, ...l }) => /* @__PURE__ */ n(o, {
	"data-slot": "dialog-portal",
	children: [/* @__PURE__ */ t(c, { ...s }), /* @__PURE__ */ t(r.Content, {
		"data-slot": "dialog-content",
		className: e("shadow-lg fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", i),
		...l,
		children: a
	})]
}), u = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "dialog-header",
	className: e("flex flex-col gap-2 text-center sm:text-left", n),
	...r
}), d = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "dialog-footer",
	className: e("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", n),
	...r
}), f = ({ className: n, ...i }) => /* @__PURE__ */ t(r.Title, {
	"data-slot": "dialog-title",
	className: e("spiko-heading-4-semibold", n),
	...i
}), p = ({ className: n, ...i }) => /* @__PURE__ */ t(r.Description, {
	"data-slot": "dialog-description",
	className: e("spiko-text-sm-medium text-text", n),
	...i
});
//#endregion
export { i as Dialog, s as DialogClose, l as DialogContent, p as DialogDescription, d as DialogFooter, u as DialogHeader, c as DialogOverlay, o as DialogPortal, f as DialogTitle, a as DialogTrigger };
