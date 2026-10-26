import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Button as n } from "../button/button.js";
import { Dialog as r, DialogClose as i, DialogContent as a, DialogDescription as o, DialogTitle as s } from "../dialog/dialog.js";
import { spikoDialogVariants as c } from "../spiko-dialog/SpikoDialog.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/shadcn/spiko-notice-dialog/SpikoNoticeDialog.tsx
var d = {
	neutral: "bg-linear-to-b from-background to-background-secondary-accent text-text shadow-sm shadow-black/10 ring-1 ring-border",
	warning: "bg-linear-to-b from-background to-warning-background text-warning shadow-sm shadow-warning/20 ring-1 ring-warning/15",
	destructive: "bg-linear-to-b from-background to-error-background text-error shadow-sm shadow-error/20 ring-1 ring-error/15"
}, f = ({ open: f, onOpenChange: p, badge: m, title: h, description: g, action: _, dismissLabel: v, closeLabel: y, children: b }) => /* @__PURE__ */ l(r, {
	open: f,
	onOpenChange: p,
	children: /* @__PURE__ */ u(a, {
		className: t(c({ size: "xs" }), "sm:max-w-[400px]"),
		onOpenAutoFocus: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ l(i, {
				"aria-label": y,
				className: "absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text",
				children: /* @__PURE__ */ l(e.X, { className: "size-4" })
			}),
			/* @__PURE__ */ u("div", {
				className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 pt-6 pb-5 sm:px-7 sm:pt-7",
				children: [
					m !== void 0 && /* @__PURE__ */ l("span", {
						className: t("flex size-12 shrink-0 items-center justify-center rounded-full [&>svg]:size-6", d[m.tone]),
						"aria-hidden": "true",
						children: m.icon
					}),
					/* @__PURE__ */ l(s, {
						className: "pr-6 spiko-heading-4-semibold text-balance text-text",
						children: h
					}),
					/* @__PURE__ */ l(o, {
						className: "spiko-text-sm-regular text-text-secondary [&_b]:font-semibold [&_b]:text-text",
						children: g
					}),
					b
				]
			}),
			/* @__PURE__ */ u("div", {
				className: "flex flex-col-reverse gap-2 px-5 pb-5 sm:flex-row sm:px-7 sm:pb-7",
				children: [/* @__PURE__ */ l(i, {
					asChild: !0,
					children: /* @__PURE__ */ l(n, {
						variant: _ === void 0 ? "default" : "outline",
						className: "sm:flex-1",
						children: v
					})
				}), _ !== void 0 && /* @__PURE__ */ l(n, {
					variant: _.variant,
					onClick: _.onAction,
					disabled: _.disabled,
					className: "sm:flex-1",
					children: _.label
				})]
			})
		]
	})
});
//#endregion
export { f as SpikoNoticeDialog };
