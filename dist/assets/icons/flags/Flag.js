import { jsx as e } from "react/jsx-runtime";
import t from "react-phone-number-input/flags";
//#region src/assets/icons/flags/Flag.tsx
var n = ({ country: n, countryName: r }) => {
	let i = t[n];
	return /* @__PURE__ */ e("span", {
		className: "flex h-4 w-6 overflow-hidden rounded-xs bg-foreground/20",
		children: i && /* @__PURE__ */ e(i, {
			title: r,
			className: "-mt-1 size-6 rounded-xs"
		})
	});
};
n.displayName = "Flag";
//#endregion
export { n as Flag };
