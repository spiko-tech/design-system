"use client";
import { cn as e } from "../../utils.js";
import { Label as t } from "../label/label.js";
import { jsx as n } from "react/jsx-runtime";
import { Slot as r } from "radix-ui";
import * as i from "react";
import { Controller as a, FormProvider as o, useFormContext as s, useFormState as c } from "react-hook-form";
//#region src/shadcn/form/form.tsx
var l = o, u = i.createContext({}), d = ({ ...e }) => /* @__PURE__ */ n(u.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ n(a, { ...e })
}), f = () => {
	let e = i.useContext(u), t = i.useContext(p), { getFieldState: n } = s(), r = c({ name: e.name }), a = n(e.name, r);
	if (!e) throw Error("useFormField should be used within <FormField>");
	let { id: o } = t;
	return {
		id: o,
		name: e.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, p = i.createContext({}), m = ({ className: t, ...r }) => {
	let a = i.useId();
	return /* @__PURE__ */ n(p.Provider, {
		value: { id: a },
		children: /* @__PURE__ */ n("div", {
			"data-slot": "form-item",
			className: e("grid gap-2", t),
			...r
		})
	});
}, h = ({ className: r, ...i }) => {
	let { error: a, formItemId: o } = f();
	return /* @__PURE__ */ n(t, {
		"data-slot": "form-label",
		"data-error": !!a,
		className: e("data-[error=true]:text-destructive-foreground", r),
		htmlFor: o,
		...i
	});
}, g = ({ ...e }) => {
	let { error: t, formItemId: i, formDescriptionId: a, formMessageId: o } = f();
	return /* @__PURE__ */ n(r.Slot, {
		"data-slot": "form-control",
		id: i,
		"aria-describedby": t ? `${a} ${o}` : `${a}`,
		"aria-invalid": !!t,
		...e
	});
}, _ = ({ className: t, ...r }) => {
	let { formDescriptionId: i } = f();
	return /* @__PURE__ */ n("p", {
		"data-slot": "form-description",
		id: i,
		className: e("spiko-text-xs-regular text-text-secondary", t),
		...r
	});
}, v = ({ className: t, ...r }) => {
	let { error: i, formMessageId: a } = f(), o = i ? String(i?.message ?? "") : r.children;
	return o ? /* @__PURE__ */ n("p", {
		"data-slot": "form-message",
		id: a,
		className: e("text-sm text-destructive-foreground", t),
		...r,
		children: o
	}) : null;
};
//#endregion
export { l as Form, g as FormControl, _ as FormDescription, d as FormField, m as FormItem, h as FormLabel, v as FormMessage, f as useFormField };
