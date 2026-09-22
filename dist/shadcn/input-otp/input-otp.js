"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "react";
import { OTPInput as a, OTPInputContext as o } from "input-otp";
//#region src/shadcn/input-otp/input-otp.tsx
var s = () => {
	let [e, t] = i.useState(!1);
	return i.useEffect(() => {
		t("OTPCredential" in window && "credentials" in navigator);
	}, []), {
		isSupported: e,
		requestOTP: i.useCallback(async (t) => {
			if (!e) return null;
			try {
				return (await navigator.credentials.get({
					otp: { transport: ["sms"] },
					signal: t
				}))?.code || null;
			} catch (e) {
				return e instanceof Error && e.name, null;
			}
		}, [e])
	};
}, c = ({ className: e, containerClassName: r, onComplete: o, value: c = "", onChange: l, disabled: u, ...d }) => {
	let { requestOTP: f } = s(), p = i.useRef(null), m = i.useRef(!1), h = i.useCallback((e) => {
		l && l(e), o && o(e);
	}, [l, o]), g = i.useCallback(() => {
		m.current || u || c.length >= (d.maxLength ?? 6) || (m.current = !0, p.current = new AbortController(), f(p.current.signal).then((e) => {
			e && h(e);
		}).catch(() => {}).finally(() => {
			m.current = !1;
		}));
	}, [
		u,
		c,
		f,
		h,
		d.maxLength
	]);
	i.useEffect(() => (g(), () => {
		p.current &&= (p.current.abort(), null), m.current = !1;
	}), [g]);
	let _ = i.useCallback((e) => {
		p.current &&= (p.current.abort(), null), m.current = !1, l && l(e);
	}, [l]), v = i.useCallback((e) => {
		p.current &&= (p.current.abort(), null), m.current = !1, o && o(e);
	}, [o]);
	return /* @__PURE__ */ n(a, {
		"data-slot": "input-otp",
		containerClassName: t("flex items-center gap-2 has-disabled:opacity-50", r),
		className: t("disabled:cursor-not-allowed", e),
		autoComplete: "one-time-code",
		inputMode: "numeric",
		value: c,
		onChange: _,
		onComplete: v,
		onFocus: g,
		disabled: u,
		...d
	});
}, l = ({ className: e, ...r }) => /* @__PURE__ */ n("div", {
	"data-slot": "input-otp-group",
	className: t("flex items-center", e),
	...r
}), u = ({ index: e, className: a, ...s }) => {
	let { char: c, hasFakeCaret: l, isActive: u } = i.useContext(o)?.slots[e] ?? {};
	return /* @__PURE__ */ r("div", {
		"data-slot": "input-otp-slot",
		"data-active": u,
		className: t("shadow-xs relative flex h-9 w-9 items-center justify-center rounded-md border border-input spiko-text-sm-regular transition-all outline-none aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40", a),
		...s,
		children: [c, l && /* @__PURE__ */ n("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ n("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
}, d = ({ ...t }) => /* @__PURE__ */ n("div", {
	"data-slot": "input-otp-separator",
	role: "separator",
	...t,
	children: /* @__PURE__ */ n(e.Minus, {})
});
//#endregion
export { c as InputOTP, l as InputOTPGroup, d as InputOTPSeparator, u as InputOTPSlot };
