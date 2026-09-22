import { Icon as e } from "../../assets/icons/core/Icon.js";
import { Button as t } from "../button/button.js";
import { Calendar as n } from "../calendar/calendar.js";
import { Popover as r, PopoverContent as i, PopoverTrigger as a } from "../popover/popover.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { useState as c } from "react";
//#region src/shadcn/date-picker/DatePicker.tsx
var l = ({ date: l, formatDate: u = (e) => e.toISOString(), disabled: d = !1, locale: f, placeholder: p, onChange: m, availableDate: h = (e) => !0 }) => {
	let [g, _] = c(!1);
	return /* @__PURE__ */ s(r, {
		open: g,
		onOpenChange: _,
		children: [/* @__PURE__ */ o(a, {
			asChild: !0,
			children: /* @__PURE__ */ s(t, {
				variant: "outline",
				className: "spiko-text-sm-regular",
				disabled: d,
				children: [l ? u(l) : /* @__PURE__ */ o("span", { children: p }), /* @__PURE__ */ o(e.Calendar, { className: "ml-auto size-4 opacity-50" })]
			})
		}), /* @__PURE__ */ o(i, {
			align: "start",
			children: /* @__PURE__ */ o(n, {
				mode: "single",
				selected: l,
				onSelect: (e) => {
					e !== void 0 && m(new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()))), _(!1);
				},
				disabled: (e) => !h(new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()))),
				locale: f
			})
		})]
	});
};
//#endregion
export { l as DatePicker };
