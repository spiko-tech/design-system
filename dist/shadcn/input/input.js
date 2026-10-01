import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
//#region src/shadcn/input/input.tsx
var n = ({ className: n, type: r, ...i }) => /* @__PURE__ */ t("input", {
	type: r,
	"data-slot": "input",
	className: e("shadow-xs flex h-11 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:spiko-text-base-medium file:text-sm file:text-foreground placeholder:text-text-secondary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", n),
	...i
});
//#endregion
export { n as Input };
