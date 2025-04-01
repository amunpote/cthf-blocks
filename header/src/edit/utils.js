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

export const blankTemplate = [["cthf-blocks/header-top-bar"], ["core/group"]];

export const mobileLayouts = ["mob-layout-1", "mob-layout-2"];

export const proMobileLayouts = [
	"mob-layout-pro",
	"mob-layout-pro-2",
	"mob-layout-pro-3",
	"mob-layout-pro-4",
	"mob-layout-pro-5",
];

export function mapObjectIntoOptions(originalArray) {
	const mappedArray = originalArray.map((item) => ({
		label: item.title?.rendered, // Use optional chaining to safely access title.rendered
		value: item.id,
	}));

	mappedArray.unshift({ label: "Select Menu", value: "", disabled: true });

	return mappedArray;
}
