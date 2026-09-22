"use client";
import { cn as e } from "../../utils.js";
import { jsx as t } from "react/jsx-runtime";
import { Avatar as n } from "radix-ui";
import "react";
//#region src/shadcn/avatar/avatar.tsx
var r = ({ className: r, ...i }) => /* @__PURE__ */ t(n.Root, {
	"data-slot": "avatar",
	className: e("relative flex size-8 shrink-0 overflow-hidden rounded-full", r),
	...i
}), i = ({ className: r, ...i }) => /* @__PURE__ */ t(n.Image, {
	"data-slot": "avatar-image",
	className: e("aspect-square size-full", r),
	...i
}), a = ({ className: r, ...i }) => /* @__PURE__ */ t(n.Fallback, {
	"data-slot": "avatar-fallback",
	className: e("flex size-full items-center justify-center rounded-full bg-secondary", r),
	...i
}), o = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "avatar-group",
	className: e("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", n),
	...r
}), s = ({ className: n, ...r }) => /* @__PURE__ */ t("div", {
	"data-slot": "avatar-group-count",
	className: e("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", n),
	...r
});
//#endregion
export { r as Avatar, a as AvatarFallback, o as AvatarGroup, s as AvatarGroupCount, i as AvatarImage };
