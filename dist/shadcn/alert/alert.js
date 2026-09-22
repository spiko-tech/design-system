import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { cva as n } from "class-variance-authority";
import "react";
//#region src/shadcn/alert/alert.tsx
var r = n("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 spiko-text-sm-regular has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "text-destructive-foreground *:data-[slot=alert-description]:text-destructive-foreground/80 [&>svg]:text-current",
		informative: "text-informative-foreground *:data-[slot=alert-description]:text-informative-foreground/80 [&>svg]:text-current",
		warning: "bg-informative-background text-warning *:data-[slot=alert-description]:text-warning/80 [&>svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
}), i = ({ className: n, variant: i, ...a }) => /* @__PURE__ */ t("div", {
	"data-slot": "alert",
	role: "alert",
	className: e(r({ variant: i }), n),
	...a
}), a = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "alert-title",
	className: e("col-start-2 line-clamp-1 min-h-4 spiko-text-base-medium tracking-tight", n),
	...r
}), o = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "alert-description",
	className: e("col-start-2 grid justify-items-start gap-1 spiko-text-sm-regular text-text-secondary [&_p]:leading-relaxed", n),
	...r
});
//#endregion
export { i as Alert, o as AlertDescription, a as AlertTitle };
