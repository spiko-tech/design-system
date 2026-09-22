"use client";
import { Icon as e } from "../../assets/icons/core/Icon.js";
import { cn as t } from "../../utils.js";
import { Button as n } from "../button/button.js";
import { Input as r } from "../input/input.js";
import { useIsMobile as i } from "../hooks/use-mobile.js";
import { Skeleton as a } from "../skeleton/skeleton.js";
import { Separator as o } from "../separator/separator.js";
import { Sheet as s, SheetContent as c, SheetDescription as l, SheetHeader as u, SheetTitle as d } from "../sheet/sheet.js";
import { Tooltip as f, TooltipContent as p, TooltipProvider as m, TooltipTrigger as h } from "../tooltip/tooltip.js";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
import { cva as v } from "class-variance-authority";
import { Slot as y } from "radix-ui";
import * as b from "react";
//#region src/shadcn/sidebar/sidebar.tsx
var x = "sidebar_state", S = 604800, C = "16rem", w = "18rem", T = "3rem", E = "b", D = b.createContext(null), O = () => {
	let e = b.useContext(D);
	if (!e) throw Error("useSidebar must be used within a SidebarProvider.");
	return e;
}, k = ({ defaultOpen: e = !0, open: n, onOpenChange: r, className: a, style: o, children: s, ...c }) => {
	let l = i(), [u, d] = b.useState(!1), [f, p] = b.useState(e), h = n ?? f, _ = b.useCallback((e) => {
		let t = typeof e == "function" ? e(h) : e;
		r ? r(t) : p(t), document.cookie = `${x}=${t}; path=/; max-age=${S}`;
	}, [r, h]), v = b.useCallback(() => l ? d((e) => !e) : _((e) => !e), [
		l,
		_,
		d
	]);
	b.useEffect(() => {
		let e = (e) => {
			e.key === E && (e.metaKey || e.ctrlKey) && (e.preventDefault(), v());
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [v]);
	let y = h ? "expanded" : "collapsed", w = b.useMemo(() => ({
		state: y,
		open: h,
		setOpen: _,
		isMobile: l,
		openMobile: u,
		setOpenMobile: d,
		toggleSidebar: v
	}), [
		y,
		h,
		_,
		l,
		u,
		d,
		v
	]);
	return /* @__PURE__ */ g(D.Provider, {
		value: w,
		children: /* @__PURE__ */ g(m, {
			delayDuration: 0,
			children: /* @__PURE__ */ g("div", {
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": C,
					"--sidebar-width-icon": T,
					...o
				},
				className: t("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", a),
				...c,
				children: s
			})
		})
	});
}, A = ({ side: e = "left", variant: n = "sidebar", collapsible: r = "offcanvas", className: i, children: a, ...o }) => {
	let { isMobile: f, state: p, openMobile: m, setOpenMobile: h } = O();
	return r === "none" ? /* @__PURE__ */ g("div", {
		"data-slot": "sidebar",
		className: t("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", i),
		...o,
		children: a
	}) : f ? /* @__PURE__ */ g(s, {
		open: m,
		onOpenChange: h,
		...o,
		children: /* @__PURE__ */ _(c, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": w },
			side: e,
			children: [/* @__PURE__ */ _(u, {
				className: "sr-only",
				children: [/* @__PURE__ */ g(d, { children: "Sidebar" }), /* @__PURE__ */ g(l, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ g("div", {
				className: "flex h-full w-full flex-col",
				children: a
			})]
		})
	}) : /* @__PURE__ */ _("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": p,
		"data-collapsible": p === "collapsed" ? r : "",
		"data-variant": n,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ g("div", {
			"data-slot": "sidebar-gap",
			className: t("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", n === "floating" || n === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ g("div", {
			"data-slot": "sidebar-container",
			className: t("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", n === "floating" || n === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", i),
			...o,
			children: /* @__PURE__ */ g("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "group-data-[variant=floating]:shadow-sm flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border",
				children: a
			})
		})]
	});
}, j = ({ className: r, onClick: i, ...a }) => {
	let { toggleSidebar: o } = O();
	return /* @__PURE__ */ _(n, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: t("size-7", r),
		onClick: (e) => {
			i?.(e), o();
		},
		...a,
		children: [/* @__PURE__ */ g(e.PanelLeft, {}), /* @__PURE__ */ g("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}, M = ({ className: e, ...n }) => {
	let { toggleSidebar: r } = O();
	return /* @__PURE__ */ g("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: r,
		title: "Toggle Sidebar",
		className: t("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...n
	});
}, N = ({ className: e, ...n }) => /* @__PURE__ */ g("main", {
	"data-slot": "sidebar-inset",
	className: t("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
	...n
}), P = ({ className: e, ...n }) => /* @__PURE__ */ g(r, {
	"data-slot": "sidebar-input",
	"data-sidebar": "input",
	className: t("h-8 w-full bg-background shadow-none", e),
	...n
}), F = ({ className: e, ...n }) => /* @__PURE__ */ g("div", {
	"data-slot": "sidebar-header",
	"data-sidebar": "header",
	className: t("flex flex-col gap-2 p-2", e),
	...n
}), I = ({ className: e, ...n }) => /* @__PURE__ */ g("div", {
	"data-slot": "sidebar-footer",
	"data-sidebar": "footer",
	className: t("flex flex-col gap-2 p-2", e),
	...n
}), L = ({ className: e, ...n }) => /* @__PURE__ */ g(o, {
	"data-slot": "sidebar-separator",
	"data-sidebar": "separator",
	className: t("mx-2 w-auto bg-sidebar-border", e),
	...n
}), R = ({ className: e, ...n }) => /* @__PURE__ */ g("div", {
	"data-slot": "sidebar-content",
	"data-sidebar": "content",
	className: t("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
	...n
}), z = ({ className: e, ...n }) => /* @__PURE__ */ g("div", {
	"data-slot": "sidebar-group",
	"data-sidebar": "group",
	className: t("relative flex w-full min-w-0 flex-col p-2", e),
	...n
}), B = ({ className: e, asChild: n = !1, ...r }) => {
	let i = n ? y.Slot : "div";
	return /* @__PURE__ */ g(i, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: t("flex h-8 shrink-0 items-center rounded-md px-2 spiko-text-xs-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...r
	});
}, V = ({ className: e, asChild: n = !1, ...r }) => {
	let i = n ? y.Slot : "button";
	return /* @__PURE__ */ g(i, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: t("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...r
	});
}, H = ({ className: e, ...n }) => /* @__PURE__ */ g("div", {
	"data-slot": "sidebar-group-content",
	"data-sidebar": "group-content",
	className: t("w-full text-sm", e),
	...n
}), U = ({ className: e, ...n }) => /* @__PURE__ */ g("ul", {
	"data-slot": "sidebar-menu",
	"data-sidebar": "menu",
	className: t("flex w-full min-w-0 flex-col gap-1", e),
	...n
}), W = ({ className: e, ...n }) => /* @__PURE__ */ g("li", {
	"data-slot": "sidebar-menu-item",
	"data-sidebar": "menu-item",
	className: t("group/menu-item relative", e),
	...n
}), G = v("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left spiko-text-sm-regular ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:spiko-text-sm-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 spiko-text-sm-regular group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), K = ({ asChild: e = !1, isActive: n = !1, variant: r = "default", size: i = "default", tooltip: a, className: o, ...s }) => {
	let c = e ? y.Slot : "button", { isMobile: l, state: u } = O(), d = /* @__PURE__ */ g(c, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": i,
		"data-active": n,
		className: t(G({
			variant: r,
			size: i
		}), o),
		...s
	});
	return a ? (typeof a == "string" && (a = { children: a }), /* @__PURE__ */ _(f, { children: [/* @__PURE__ */ g(h, {
		asChild: !0,
		children: d
	}), /* @__PURE__ */ g(p, {
		side: "right",
		align: "center",
		hidden: u !== "collapsed" || l,
		...a
	})] })) : d;
}, q = ({ className: e, asChild: n = !1, showOnHover: r = !1, ...i }) => {
	let a = n ? y.Slot : "button";
	return /* @__PURE__ */ g(a, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: t("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", r && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...i
	});
}, J = ({ className: e, ...n }) => /* @__PURE__ */ g("div", {
	"data-slot": "sidebar-menu-badge",
	"data-sidebar": "menu-badge",
	className: t("pointer-events-none absolute right-1 flex size-4 min-w-4 items-center justify-center rounded bg-red-400 px-0 text-[9px] text-white tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
	...n
}), Y = ({ className: e, showIcon: n = !1, ...r }) => {
	let i = b.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
	return /* @__PURE__ */ _("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: t("flex h-8 items-center gap-2 rounded-md px-2", e),
		...r,
		children: [n && /* @__PURE__ */ g(a, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ g(a, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": i }
		})]
	});
}, X = ({ className: e, ...n }) => /* @__PURE__ */ g("ul", {
	"data-slot": "sidebar-menu-sub",
	"data-sidebar": "menu-sub",
	className: t("ml-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border py-0.5 pl-2.5", "group-data-[collapsible=icon]:hidden", e),
	...n
}), Z = ({ className: e, ...n }) => /* @__PURE__ */ g("li", {
	"data-slot": "sidebar-menu-sub-item",
	"data-sidebar": "menu-sub-item",
	className: t("group/menu-sub-item relative", e),
	...n
}), Q = ({ asChild: e = !1, size: n = "md", isActive: r = !1, className: i, ...a }) => {
	let o = e ? y.Slot : "a";
	return /* @__PURE__ */ g(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": n,
		"data-active": r,
		className: t("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", n === "sm" && "text-xs", n === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", i),
		...a
	});
};
//#endregion
export { A as Sidebar, R as SidebarContent, I as SidebarFooter, z as SidebarGroup, V as SidebarGroupAction, H as SidebarGroupContent, B as SidebarGroupLabel, F as SidebarHeader, P as SidebarInput, N as SidebarInset, U as SidebarMenu, q as SidebarMenuAction, J as SidebarMenuBadge, K as SidebarMenuButton, W as SidebarMenuItem, Y as SidebarMenuSkeleton, X as SidebarMenuSub, Q as SidebarMenuSubButton, Z as SidebarMenuSubItem, k as SidebarProvider, M as SidebarRail, L as SidebarSeparator, j as SidebarTrigger, O as useSidebar };
