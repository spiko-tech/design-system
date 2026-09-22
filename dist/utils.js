import { createCn as e } from "cn/config";
//#region src/utils.ts
var t = e({ extend: {
	classGroups: {
		"spiko-heading": [(e) => e.startsWith("spiko-heading-")],
		"spiko-text": [(e) => e.startsWith("spiko-text-")]
	},
	conflictingClassGroups: { "spiko-heading": [
		"spiko-text",
		"font-size",
		"font-weight",
		"font-family",
		"font-style",
		"leading"
	] }
} });
//#endregion
export { t as cn };
