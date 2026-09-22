import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
//#region src/shadcn/card/card.tsx
var n = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "card",
	className: e("shadow-sm flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground", n),
	...r
}), r = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "card-header",
	className: e("flex flex-col gap-1.5 px-6", n),
	...r
}), i = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "card-title",
	className: e("text-base-semibold leading-none", n),
	...r
}), a = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "card-description",
	className: e("text-sm text-text-secondary", n),
	...r
}), o = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "card-content",
	className: e("px-6", n),
	...r
}), s = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "card-footer",
	className: e("flex items-center px-6", n),
	...r
});
//#endregion
export { n as Card, o as CardContent, a as CardDescription, s as CardFooter, r as CardHeader, i as CardTitle };
