import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { Progress as n } from "radix-ui";
import "react";
//#region src/shadcn/progress/progress.tsx
var r = ({ className: r, value: i, ...a }) => /* @__PURE__ */ t(n.Root, {
	"data-slot": "progress",
	className: e("relative h-1 w-full overflow-hidden rounded-full bg-muted", r),
	...a,
	children: /* @__PURE__ */ t(n.Indicator, {
		"data-slot": "progress-indicator",
		className: "spiko-gradient-bg-black-to-spiko-blue h-full w-full flex-1 transition-all",
		style: { width: `${i || 0}%` }
	})
});
//#endregion
export { r as Progress };
