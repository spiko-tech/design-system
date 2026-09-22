import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { cva as n } from "class-variance-authority";
import { Slot as r } from "radix-ui";
import "react";
//#region src/shadcn/badge/badge.tsx
var i = n("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		info: "bg-information-background text-information [a&]:hover:bg-information-background/90",
		error: "bg-error-background text-error [a&]:hover:bg-error-background/90",
		destructive: "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
		success: "bg-success-background text-success [a&]:hover:bg-success-background/90"
	} },
	defaultVariants: { variant: "default" }
}), a = ({ className: n, variant: a = "default", asChild: o = !1, ...s }) => {
	let c = o ? r.Root : "span";
	return /* @__PURE__ */ t(c, {
		"data-slot": "badge",
		"data-variant": a,
		className: e(i({ variant: a }), n),
		...s
	});
};
//#endregion
export { a as Badge, i as badgeVariants };
