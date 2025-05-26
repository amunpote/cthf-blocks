import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";
import {
	CheckboxControl,
	Panel,
	PanelBody,
	RangeControl,
	SelectControl,
	TextareaControl,
	TextControl,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import {
	lineSolid,
	formatUppercase,
	formatLowercase,
	formatCapitalize,
	formatUnderline,
	formatStrikethrough,
} from "@wordpress/icons";

import { memo, useContext, useState } from "@wordpress/element";

import { CTHFBlockContext } from "../index.js";

import {
	AttrWrapper,
	fontWeights,
	getFontOptions,
	UpsellAttributeWrapper,
	BlockUpsellNotice,
} from "../../../../../resources/components/utility.js";

export const Styles = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState(null);

	return <></>;
});
