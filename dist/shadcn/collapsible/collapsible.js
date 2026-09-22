"use client";
import { jsx as e } from "react/jsx-runtime";
import { Collapsible as t } from "radix-ui";
//#region src/shadcn/collapsible/collapsible.tsx
var n = ({ ...n }) => /* @__PURE__ */ e(t.Root, {
	"data-slot": "collapsible",
	...n
}), r = ({ ...n }) => /* @__PURE__ */ e(t.CollapsibleTrigger, {
	"data-slot": "collapsible-trigger",
	...n
}), i = ({ ...n }) => /* @__PURE__ */ e(t.CollapsibleContent, {
	"data-slot": "collapsible-content",
	...n
});
//#endregion
export { n as Collapsible, i as CollapsibleContent, r as CollapsibleTrigger };
