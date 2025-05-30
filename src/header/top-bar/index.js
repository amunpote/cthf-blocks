import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import Edit from "./edit.js";
import Save from "./save.js";
import blockIcon from "./icon.js";

registerBlockType("cthf-blocks/header-top-bar", {
	title: __("Top Bar", "rootblox"),
	description: __("Top bar element for Header block.", "rootblox"),

	category: "ct-header-footer",

	icon: {
		src: blockIcon,
	},

	attributes: {
		cover: {
			type: "string",
			default: "",
		},
		clientId: {
			type: "string",
			default: "",
		},
	},

	parent: ["cthf-blocks/header"],

	edit: Edit,
	save: Save,
});
