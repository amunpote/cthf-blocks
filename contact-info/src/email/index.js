import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import Edit from "./edit.js";
import Save from "./save.js";

registerBlockType("cthf-blocks/contact-info-email", {
	title: __("Email", "rootblox"),
	description: __("Add your email here!", "rootblox"),

	category: "rootblox-footer",

	icon: {
		src: (
			<svg
				className="cthf-block__overview-icon"
				width="16"
				height="11"
				viewBox="0 0 16 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 0V11H16V0H0ZM1 4.1L4.9 6.1L1 9.5V4.1ZM1.9 10L5.9 6.5L8 7.6L10.1 6.5L14.1 10H1.9ZM15 9.5L11.1 6L15 4V9.5ZM15 2.9L8 6.4L1 2.9V1H15V2.9Z" />
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
