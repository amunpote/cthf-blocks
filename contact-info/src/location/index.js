import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import Edit from "./edit.js";
import Save from "./save.js";

registerBlockType("cthf-blocks/contact-info-location", {
	title: __("Location", "rootblox"),
	description: __(
		"Show your business location with a clickable address linked to Google Maps.",
		"rootblox",
	),

	category: "rootblox-footer",

	icon: {
		src: (
			<svg
				className="cthf-block__overview-icon"
				width="10"
				height="16"
				viewBox="0 0 10 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4 9.90438V14.8009L4.68813 15.8328C4.83656 16.0553 5.16375 16.0553 5.31219 15.8328L6 14.8009V9.90438C5.67531 9.96438 5.34187 10 5 10C4.65813 10 4.32469 9.96438 4 9.90438ZM5 0C2.51469 0 0.5 2.01469 0.5 4.5C0.5 6.98531 2.51469 9 5 9C7.48531 9 9.5 6.98531 9.5 4.5C9.5 2.01469 7.48531 0 5 0ZM5 2.375C3.82812 2.375 2.875 3.32812 2.875 4.5C2.875 4.70687 2.70687 4.875 2.5 4.875C2.29313 4.875 2.125 4.70687 2.125 4.5C2.125 2.91469 3.415 1.625 5 1.625C5.20687 1.625 5.375 1.79313 5.375 2C5.375 2.20687 5.20687 2.375 5 2.375Z" />
			</svg>
		),
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
		content: {
			type: "string",
			default: "",
		},
		icon: {
			type: "object",
			default: {},
		},
		iconVariation: {
			type: "string",
			default: "variation-1",
		},
		url: {
			type: "string",
			default: "",
		},
		openNewTab: {
			type: "boolean",
			default: false,
		},
		noFollow: {
			type: "boolean",
			default: false,
		},
	},

	edit: Edit,

	save: Save,

	parent: ["cthf-blocks/contact-info"],

	supports: {
		// inserter: false,
		html: false,
	},

	usesContext: ["icon"],
});
