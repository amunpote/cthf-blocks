import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	SelectControl,
	TabPanel,
	__experimentalUnitControl as UnitControl,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderBoxControl as BorderBoxControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
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
import { select } from "@wordpress/data";
import { CTHFBlockContext } from "../index.js";

import {
	AttrWrapper,
	fontWeights,
	getFontOptions,
} from "../../../../../resources/components/utility.js";

export const Styles = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState(null);

	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	const googleFonts = getFontOptions(cthfAssets.googleFonts);

	return <></>;
});
