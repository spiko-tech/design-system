import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/shadcn/skeleton/skeleton.tsx
var n = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "skeleton",
	className: e("animate-pulse rounded-md bg-primary/10", n),
	...r
});
//#endregion
export { n as Skeleton };
