import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import Edit from "./edit.js";
import Save from "./save.js";

registerBlockType("cthf-blocks/contact-info-phone", {
	title: __("Phone", "rootblox"),
	description: __(
		"Display your phone number with a clickable link for quick and easy contact.",
		"rootblox",
	),

	category: "rootblox-footer",

	icon: {
		src: (
			<svg
				className="cthf-block__overview-icon"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M15.5437 11.3062L12.0436 9.80614C11.8941 9.74242 11.728 9.72899 11.5701 9.76788C11.4123 9.80677 11.2714 9.89587 11.1686 10.0218L9.61861 11.9156C7.18598 10.7686 5.22828 8.81089 4.08132 6.37827L5.9751 4.82824C6.10126 4.72564 6.19054 4.58473 6.22945 4.42684C6.26836 4.26896 6.25477 4.10269 6.19073 3.95322L4.69071 0.453162C4.62043 0.292037 4.49613 0.160484 4.33925 0.0811864C4.18236 0.00188914 4.00273 -0.0201818 3.83132 0.0187795L0.58126 0.768793C0.415998 0.806955 0.26855 0.900007 0.162983 1.03276C0.0574151 1.16552 -3.80697e-05 1.33013 1.8926e-08 1.49974C1.8926e-08 9.51551 6.49699 16 14.5003 16C14.6699 16.0001 14.8346 15.9427 14.9674 15.8371C15.1002 15.7315 15.1933 15.5841 15.2315 15.4187L15.9815 12.1687C16.0202 11.9964 15.9977 11.8161 15.9178 11.6587C15.8379 11.5012 15.7056 11.3766 15.5437 11.3062Z" />
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
