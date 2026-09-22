import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { cva as n } from "class-variance-authority";
import { Slot as r } from "radix-ui";
import "react";
//#region src/shadcn/button/button.tsx
var i = n("inline-flex shrink-0 items-center justify-center gap-2 rounded-md whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "shadow-xs bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "shadow-xs bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
			outline: "shadow-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary: "shadow-xs bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-information underline-offset-4 hover:underline",
			externalLink: "text-information underline underline-offset-4 hover:no-underline"
		},
		size: {
			sm: "h-10 px-4 text-sm font-medium has-[>svg]:px-4",
			md: "h-11 px-4 text-sm font-medium has-[>svg]:px-4",
			icon: "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
}), a = ({ className: n, variant: a, size: o, asChild: s = !1, ...c }) => {
	let l = s ? r.Slot : "button";
	return /* @__PURE__ */ t(l, {
		"data-slot": "button",
		className: e(i({
			variant: a,
			size: o,
			className: n
		})),
		...c
	});
};
//#endregion
export { a as Button, i as buttonVariants };
