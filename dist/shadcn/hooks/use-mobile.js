import * as e from "react";
//#region src/shadcn/hooks/use-mobile.ts
var t = 1024, n = () => {
	let [n, r] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 1023px)"), n = () => {
			r(window.innerWidth < t);
		};
		return e.addEventListener("change", n), r(window.innerWidth < t), () => e.removeEventListener("change", n);
	}, []), !!n;
};
//#endregion
export { n as useIsMobile };
