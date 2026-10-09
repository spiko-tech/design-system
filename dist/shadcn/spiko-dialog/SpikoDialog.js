import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Button as n } from "../button/button.js";
import { Dialog as r, DialogClose as i, DialogContent as a, DialogDescription as o, DialogFooter as s, DialogHeader as c, DialogTitle as l, DialogTrigger as u } from "../dialog/dialog.js";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { useCallback as m, useState as h } from "react";
import { cva as g } from "class-variance-authority";
import { motion as _, useReducedMotion as v } from "motion/react";
//#region src/shadcn/spiko-dialog/SpikoDialog.tsx
var y = g(t("top-auto right-0 bottom-0 left-0 w-screen max-w-none translate-x-0 translate-y-0 rounded-t-xl rounded-b-none", "flex max-h-[95svh] flex-col gap-0 overflow-hidden overscroll-contain p-0", "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", "sm:top-[50%] sm:right-auto sm:bottom-auto sm:left-[50%] sm:w-full sm:max-w-[calc(100%-4rem)] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-xl", "sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95"), {
	variants: { size: {
		xs: "sm:max-w-[480px]",
		sm: "sm:max-w-[576px]",
		md: "sm:max-w-[768px]",
		lg: "sm:max-w-[960px]"
	} },
	defaultVariants: { size: "sm" }
}), b = {
	duration: .2,
	ease: "easeOut"
}, x = () => {
	let [e, t] = h("auto");
	return {
		height: e,
		measure: m((e) => {
			if (!e) return;
			let n = new ResizeObserver(() => t(e.offsetHeight));
			return n.observe(e), () => n.disconnect();
		}, [])
	};
}, S = ({ children: e }) => {
	let { height: n, measure: r } = x(), [i, a] = h(!1), o = v();
	return /* @__PURE__ */ f(_.div, {
		className: t("min-h-0", i ? "overflow-clip" : "overflow-y-auto"),
		initial: !1,
		animate: { height: n },
		transition: o ? { duration: 0 } : b,
		onAnimationStart: () => a(!0),
		onAnimationComplete: () => a(!1),
		children: /* @__PURE__ */ f("div", {
			ref: r,
			className: "flex flex-col gap-6 p-4 sm:p-6",
			children: e
		})
	});
}, C = ({ title: r, description: u, children: m, submit: h, cancelLabel: g, size: _, contentProps: v, secondaryAction: b, steps: x, animateHeight: C }) => {
	let { className: T, ...E } = v ?? {}, D = x?.onPrevious !== void 0 || x?.onNext !== void 0, O = /* @__PURE__ */ p(d, { children: [u !== void 0 && /* @__PURE__ */ f(o, { children: u }), m] });
	return /* @__PURE__ */ p(a, {
		className: t(y({
			size: _,
			className: T
		})),
		onOpenAutoFocus: (e) => e.preventDefault(),
		...E,
		children: [
			/* @__PURE__ */ f(c, {
				className: "px-6 py-4",
				children: /* @__PURE__ */ f(l, {
					className: "spiko-gradient-text-black-to-spiko-blue mx-auto w-fit text-center",
					children: r
				})
			}),
			C === !0 ? /* @__PURE__ */ f(S, { children: O }) : /* @__PURE__ */ f("div", {
				className: "flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-4 sm:p-6",
				children: O
			}),
			(g !== void 0 || b !== void 0 || h !== void 0 || D) && /* @__PURE__ */ p(s, {
				className: "sticky -bottom-6 -mx-4 bg-background px-8 pt-4 pb-6 sm:static sm:bottom-0 sm:mx-0 sm:px-6 sm:py-4",
				children: [
					D && /* @__PURE__ */ p("div", {
						className: t("order-last flex sm:order-none sm:mr-auto sm:gap-4", x?.onPrevious === void 0 ? "justify-end" : "justify-between"),
						children: [x?.onPrevious !== void 0 && /* @__PURE__ */ f(n, {
							variant: "outline",
							size: "icon",
							className: "size-10",
							"aria-label": "Previous",
							onClick: x.onPrevious,
							disabled: x.disablePrevious,
							children: /* @__PURE__ */ f(e.ArrowLeft, {})
						}), x?.onNext !== void 0 && /* @__PURE__ */ f(n, {
							variant: "outline",
							size: "icon",
							className: "size-10",
							"aria-label": "Next",
							onClick: x.onNext,
							disabled: x.disableNext,
							children: /* @__PURE__ */ f(e.ArrowRight, {})
						})]
					}),
					g !== void 0 && /* @__PURE__ */ f(i, {
						asChild: !0,
						children: /* @__PURE__ */ f(n, {
							variant: "outline",
							size: "sm",
							children: g
						})
					}),
					b,
					h !== void 0 && /* @__PURE__ */ f(n, {
						size: "sm",
						variant: h.variant,
						...w(h.target),
						disabled: h.disabled === !0 || h.isSubmitting,
						className: "min-w-24",
						children: h.isSubmitting ? /* @__PURE__ */ f(e.Loader, { className: "animate-spin" }) : h.label
					})
				]
			})
		]
	});
}, w = (e) => e.type === "inner-form" ? {
	type: "submit",
	form: e.formId
} : {
	type: "button",
	onClick: e.onClick
}, T = ({ trigger: e, children: t, ...n }) => /* @__PURE__ */ p(r, { children: [/* @__PURE__ */ f(u, {
	asChild: !0,
	children: e
}), /* @__PURE__ */ f(C, {
	...n,
	children: t
})] }), E = ({ open: e, onOpenChange: t, children: n = null, ...i }) => /* @__PURE__ */ f(r, {
	open: e,
	onOpenChange: t,
	children: /* @__PURE__ */ f(C, {
		...i,
		children: n
	})
});
//#endregion
export { E as ControlledSpikoDialog, T as SpikoDialog, y as spikoDialogVariants };
