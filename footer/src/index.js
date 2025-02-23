import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit/index.js";
import Save from "./save.js";
import metadata from "./block.json";
import blockIcon from "./icon.js";

import "../../../resources/components/utility.js";

registerBlockType(metadata.name, {
	title: __(metadata.title, "ct-header-footer-blocks"),

	description: __(metadata.description, "ct-header-footer-blocks"),

	icon: {
		src: blockIcon,
	},

	edit: Edit,

	save: Save,
});
