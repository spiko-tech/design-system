"use client";
import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import "react";
//#region src/shadcn/table/table.tsx
var n = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "table-container",
	className: "relative w-full overflow-x-auto",
	children: /* @__PURE__ */ t("table", {
		"data-slot": "table",
		className: e("w-full caption-bottom text-sm", n),
		...r
	})
}), r = ({ className: n, ...r }) => /* @__PURE__ */ t("thead", {
	"data-slot": "table-header",
	className: e("[&_tr]:border-b", n),
	...r
}), i = ({ className: n, ...r }) => /* @__PURE__ */ t("tbody", {
	"data-slot": "table-body",
	className: e("[&_tr:last-child]:border-0", n),
	...r
}), a = ({ className: n, ...r }) => /* @__PURE__ */ t("tfoot", {
	"data-slot": "table-footer",
	className: e("border-t bg-secondary/50 spiko-text-base-medium [&>tr]:last:border-b-0", n),
	...r
}), o = ({ className: n, ...r }) => /* @__PURE__ */ t("tr", {
	"data-slot": "table-row",
	className: e("border-b transition-colors hover:bg-secondary/50 data-[state=selected]:bg-secondary", n),
	...r
}), s = ({ className: n, ...r }) => /* @__PURE__ */ t("th", {
	"data-slot": "table-head",
	className: e("h-10 px-2 text-left align-middle spiko-text-base-medium whitespace-nowrap text-text-secondary [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", n),
	...r
}), c = ({ className: n, ...r }) => /* @__PURE__ */ t("td", {
	"data-slot": "table-cell",
	className: e("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", n),
	...r
}), l = ({ className: n, ...r }) => /* @__PURE__ */ t("caption", {
	"data-slot": "table-caption",
	className: e("mt-4 text-sm text-text-secondary", n),
	...r
});
//#endregion
export { n as Table, i as TableBody, l as TableCaption, c as TableCell, a as TableFooter, s as TableHead, r as TableHeader, o as TableRow };
