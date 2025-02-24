import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import Edit from "./edit.js";
import Save from "./save.js";

registerBlockType("cthf-blocks/header-bottom-bar", {
	title: __("Bottom Bar", "ct-header-footer-blocks"),
	description: __("Bottom bar element.", "ct-header-footer-blocks"),

	category: "widgets",

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
