"use client";
import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
//#region src/shadcn/label/label.tsx
function n({ className: n, ...r }) {
	return /* @__PURE__ */ t("label", {
		"data-slot": "label",
		className: e("flex items-center gap-2 spiko-text-sm-medium leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", n),
		...r
	});
}
//#endregion
export { n as Label };
