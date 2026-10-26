import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
import { Progress as n } from "radix-ui";
//#region src/shadcn/progress/progress.tsx
var r = ({ className: r, value: i, marker: a, ...o }) => /* @__PURE__ */ t(n.Root, {
	"data-slot": "progress",
	className: e("relative h-1 w-full rounded-full bg-muted", !a && "overflow-hidden", r),
	...o,
	children: /* @__PURE__ */ t(n.Indicator, {
		"data-slot": "progress-indicator",
		className: e("spiko-gradient-bg-black-to-spiko-blue h-full w-full flex-1 transition-all", a && "relative rounded-full"),
		style: { width: `${i || 0}%` },
		children: a === "dot" && /* @__PURE__ */ t("div", { className: "absolute top-1/2 right-0 size-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-information" })
	})
});
//#endregion
export { r as Progress };
