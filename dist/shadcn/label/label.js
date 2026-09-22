"use client";
import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { Label as n } from "radix-ui";
import "react";
//#region src/shadcn/label/label.tsx
var r = ({ className: r, ...i }) => /* @__PURE__ */ t(n.Root, {
	"data-slot": "label",
	className: e("flex items-center gap-2 spiko-text-sm-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", r),
	...i
});
//#endregion
export { r as Label };
