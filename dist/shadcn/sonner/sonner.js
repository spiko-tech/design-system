"use client";
import { jsx as e } from "react/jsx-runtime";
import { useTheme as t } from "next-themes";
import { Toaster as n } from "sonner";
//#region src/shadcn/sonner/sonner.tsx
var r = ({ ...r }) => {
	let { theme: i = "system" } = t();
	return /* @__PURE__ */ e(n, {
		theme: i,
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-text-secondary",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground spiko-text-base-medium",
			cancelButton: "group-[.toast]:bg-secondary group-[.toast]:text-text-secondary spiko-text-base-medium"
		} },
		...r
	});
};
//#endregion
export { r as Toaster };
