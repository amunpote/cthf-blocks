import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import Edit from "./edit.js";
import Save from "./save.js";

registerBlockType("cthf-blocks/contact-info-phone", {
	title: __("Phone", "rootblox"),
	description: __("Add your phone here!", "rootblox"),

	category: ["rootblox-footer"],

	attributes: {
		cover: {
			type: "string",
			default: "",
		},
		clientId: {
			type: "string",
			default: "",
		},
		content: {
			type: "string",
			default: "",
		},
	},

	edit: Edit,

	save: Save,

	parent: ["cthf-blocks/contact-info"],

	supports: {
		inserter: false,
		html: false,
	},

	usesContext: ["icon"],
});
