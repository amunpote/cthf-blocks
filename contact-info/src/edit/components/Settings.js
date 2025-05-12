import { __ } from "@wordpress/i18n";

import {
	BaseControl,
	CheckboxControl,
	Panel,
	PanelBody,
	SelectControl,
	TextareaControl,
	TextControl,
	TimePicker,
	ToggleControl,
	Button,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";

import { memo, useState, useContext } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";
import { AttrWrapper } from "../../../../../resources/components/utility.js";
import {
	justifyBottom,
	justifyCenter,
	justifyTop,
	plusCircle,
} from "@wordpress/icons";

export const Settings = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState("general");

	return <></>;
});
