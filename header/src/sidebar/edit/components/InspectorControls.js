import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import {
	TabPanel,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import { cog, styles } from "@wordpress/icons";

import { memo, useContext } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";

export const CTHFBlockControls = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);
	return (
		<>
			<InspectorControls>
				<UnitControl
					label={__("Width", "rootblox")}
					value={attributes.width}
					onChange={(newValue) =>
						setAttributes({
							...attributes,
							width: newValue,
						})
					}
				/>
			</InspectorControls>
		</>
	);
});
