import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
import { cva as n } from "class-variance-authority";
//#region src/shadcn/alert/alert.tsx
var r = n("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 spiko-text-sm-regular has-[>svg]:grid-cols-[calc(var(--spacing)*7)_1fr] [&:has([data-slot=alert-title])>svg]:translate-y-0.5 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
	variants: { variant: {
		default: "bg-background-secondary-accent text-text-secondary",
		destructive: "border-error bg-error-background text-error *:data-[slot=alert-description]:text-error/80 [&>svg]:text-current",
		information: "border-information bg-information-background text-information *:data-[slot=alert-description]:text-information/80 [&>svg]:text-current",
		warning: "border-warning bg-warning-background text-warning *:data-[slot=alert-description]:text-warning/80 [&>svg]:text-current",
		gradient: "border-transparent [background:linear-gradient(var(--background),var(--background))_padding-box,linear-gradient(90deg,var(--text)_0%,var(--core-blue)_100%)_border-box] has-[>svg]:grid-cols-[calc(var(--spacing)*9)_1fr] *:data-[slot=alert-action]:self-end *:data-[slot=alert-title]:justify-self-start *:data-[slot=alert-title]:bg-linear-to-r *:data-[slot=alert-title]:from-(--text) *:data-[slot=alert-title]:to-(--core-blue) *:data-[slot=alert-title]:bg-clip-text *:data-[slot=alert-title]:spiko-heading-5-semibold *:data-[slot=alert-title]:text-transparent [&:has([data-slot=alert-title])>svg]:translate-y-0 [&>svg]:size-6 [&>svg]:translate-y-0 [&>svg]:rounded-md [&>svg]:bg-background-secondary-accent [&>svg]:p-1"
	} },
	defaultVariants: { variant: "default" }
}), i = ({ className: n, variant: i, ...a }) => /* @__PURE__ */ t("div", {
	"data-slot": "alert",
	role: "alert",
	className: e(r({ variant: i }), n),
	...a
}), a = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "alert-title",
	className: e("col-start-2 line-clamp-1 min-h-4 spiko-text-sm-semibold tracking-tight", n),
	...r
}), o = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "alert-description",
	className: e("col-start-2 grid justify-items-start gap-1 spiko-text-sm-regular text-text-secondary [&_p]:leading-relaxed", n),
	...r
});
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-slot": "alert-action",
		className: e("col-start-3 row-span-2 row-start-1 ml-3 self-start", n),
		...r
	});
}
//#endregion
export { i as Alert, s as AlertAction, o as AlertDescription, a as AlertTitle };
