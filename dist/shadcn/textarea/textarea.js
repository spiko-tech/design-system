import { cn as e } from "../../utils.js";
import { Label as t } from "../label/label.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "react";
//#region src/shadcn/textarea/textarea.tsx
var a = ({ id: a, label: o, caption: s, captionPosition: c = "top", className: l, "aria-describedby": u, ...d }) => {
	let f = i.useId(), p = a ?? f, m = `${p}-caption`, h = s && /* @__PURE__ */ n("p", {
		id: m,
		"data-slot": "textarea-caption",
		className: "spiko-text-sm-regular text-text-secondary",
		children: s
	});
	return /* @__PURE__ */ r("div", {
		"data-slot": "textarea-field",
		className: "flex w-full flex-col gap-1.5",
		children: [
			o && /* @__PURE__ */ n(t, {
				htmlFor: p,
				className: "leading-5 text-text",
				children: o
			}),
			c === "top" && h,
			/* @__PURE__ */ n("textarea", {
				id: p,
				"data-slot": "textarea",
				"aria-describedby": [s && m, u].filter(Boolean).join(" ") || void 0,
				className: e("focus-visible:shadow-xs flex field-sizing-content min-h-15 w-full rounded-md border border-border bg-transparent px-3 py-2 spiko-text-base-regular text-text transition-[color,box-shadow] outline-none placeholder:text-text-secondary focus-visible:border-information disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive md:spiko-text-sm-regular dark:bg-input/30", l),
				...d
			}),
			c === "bottom" && h
		]
	});
};
//#endregion
export { a as Textarea };
