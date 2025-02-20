import { __ } from "@wordpress/i18n";

// export function getFontOptions() {
// 	let fontOptions = [{ label: "Default", value: "" }];
// 	if (typeof cozyBlockAssets.googleFonts === "object") {
// 		// Loop through the array of objects using for...of
// 		for (let key in cozyBlockAssets.googleFonts) {
// 			fontOptions.push({
// 				label: cozyBlockAssets.googleFonts[key],
// 				value: key,
// 			});
// 		}
// 	}
// 	return fontOptions;
// }

export const fontWeights = [
	{
		label: __("Thin", "cozy-addons"),
		value: "100",
	},
	{
		label: __("Extra Light", "cozy-addons"),
		value: "200",
	},
	{
		label: __("Light", "cozy-addons"),
		value: "300",
	},
	{
		label: __("Normal", "cozy-addons"),
		value: "400",
	},
	{
		label: __("Medium", "cozy-addons"),
		value: "500",
	},
	{
		label: __("Semi Bold", "cozy-addons"),
		value: "600",
	},
	{
		label: __("Bold", "cozy-addons"),
		value: "700",
	},
	{
		label: __("Extra Bold", "cozy-addons"),
		value: "800",
	},
	{
		label: __("Black", "cozy-addons"),
		value: "900",
	},
];

