import { __ } from "@wordpress/i18n";

import {
	Panel,
	PanelBody,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import { memo, useContext, useState } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";

import { AttrWrapper } from "../../../../../resources/components/utility.js";

export const Styles = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState(null);

	return (
		<>
			<Panel>
				<PanelBody
					title={__("Weekday Styles", "rootblox")}
					opened={openPanel === "weekday-styles"}
					onToggle={() => setOpenPanel("weekday-styles")}
				>
					<AttrWrapper styles={{ maxWidth: "50%" }}>
						<UnitControl
							label={__("Gap", "rootblox")}
							value={attributes.itemStyles.gap}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									itemStyles: {
										...attributes.itemStyles,
										gap: newValue,
									},
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>
				</PanelBody>
			</Panel>
		</>
	);
});
