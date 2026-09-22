import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Button as n } from "../button/button.js";
import { Dialog as r, DialogClose as i, DialogContent as a, DialogDescription as o, DialogFooter as s, DialogHeader as c, DialogTitle as l, DialogTrigger as u } from "../dialog/dialog.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { cva as p } from "class-variance-authority";
//#region src/shadcn/spiko-dialog/SpikoDialog.tsx
var m = p(t("top-auto right-0 bottom-0 left-0 w-screen max-w-none translate-x-0 translate-y-0 rounded-t-xl rounded-b-none", "flex max-h-[95svh] flex-col gap-0 overflow-hidden overscroll-contain p-0", "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", "sm:top-[50%] sm:right-auto sm:bottom-auto sm:left-[50%] sm:w-full sm:max-w-[calc(100%-4rem)] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-xl", "sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95"), {
	variants: { size: {
		xs: "sm:max-w-[480px]",
		sm: "sm:max-w-[576px]",
		md: "sm:max-w-[768px]",
		lg: "sm:max-w-[960px]"
	} },
	defaultVariants: { size: "sm" }
}), h = ({ title: r, description: u, children: p, submitLabel: h, cancelLabel: g, onSubmit: _, size: v, isSubmitting: y, disableSubmit: b, submitVariant: x, contentProps: S, secondaryAction: C }) => {
	let { className: w, ...T } = S ?? {};
	return /* @__PURE__ */ f(a, {
		className: t(m({
			size: v,
			className: w
		})),
		onOpenAutoFocus: (e) => e.preventDefault(),
		...T,
		children: [
			/* @__PURE__ */ d(c, {
				className: "px-6 py-4",
				children: /* @__PURE__ */ d(l, {
					className: "spiko-gradient-text-black-to-spiko-blue mx-auto w-fit text-center",
					children: r
				})
			}),
			/* @__PURE__ */ f("div", {
				className: "flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-4 sm:p-6",
				children: [u !== void 0 && /* @__PURE__ */ d(o, { children: u }), p]
			}),
			(g !== void 0 || C !== void 0 || h !== void 0 && _ !== void 0) && /* @__PURE__ */ f(s, {
				className: "sticky -bottom-6 -mx-4 bg-background px-8 pt-4 pb-6 sm:static sm:bottom-0 sm:mx-0 sm:px-6 sm:py-4",
				children: [
					g !== void 0 && /* @__PURE__ */ d(i, {
						asChild: !0,
						children: /* @__PURE__ */ d(n, {
							variant: "outline",
							size: "sm",
							children: g
						})
					}),
					C,
					h !== void 0 && _ !== void 0 && /* @__PURE__ */ d(n, {
						size: "sm",
						variant: x,
						onClick: _,
						disabled: b === !0 || y,
						className: "min-w-24",
						children: y ? /* @__PURE__ */ d(e.Loader, { className: "animate-spin" }) : h
					})
				]
			})
		]
	});
}, g = ({ trigger: e, children: t, ...n }) => /* @__PURE__ */ f(r, { children: [/* @__PURE__ */ d(u, {
	asChild: !0,
	children: e
}), /* @__PURE__ */ d(h, {
	...n,
	children: t
})] }), _ = ({ open: e, onOpenChange: t, children: n = null, ...i }) => /* @__PURE__ */ d(r, {
	open: e,
	onOpenChange: t,
	children: /* @__PURE__ */ d(h, {
		...i,
		children: n
	})
});
//#endregion
export { _ as ControlledSpikoDialog, g as SpikoDialog };
