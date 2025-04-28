import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import Edit from "./edit/index.js";
import Save from "./save.js";
// import blockIcon from "./icon.js";

registerBlockType("cthf-blocks/header-sidebar", {
	title: __("Sidebar", "rootblox"),
	description: __("Sidebar element for Header block.", "rootblox"),

	category: "ct-header-footer",

	// icon: {
	//     src: blockIcon,
	// },

	attributes: {
		cover: {
			type: "string",
			default: "",
		},
		clientId: {
			type: "string",
			default: "",
		},
		width: "450px",
		position: "left",
	},

	parent: ["cthf-blocks/header"],

	edit: Edit,
	save: Save,
});
