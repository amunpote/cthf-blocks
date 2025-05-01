import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit/index.js";
import Save from "./save.js";
import metadata from "./block.json";
// import blockIcon from "./icon.js";

registerBlockType(metadata.name, {
    title: __(metadata.title, "rootblox"),

    description: __(metadata.description, "rootblox"),

    // icon: {
    //     src: blockIcon,
    // },

    edit: Edit,

    save: Save,
});
