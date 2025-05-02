import "../editor.scss";

// import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
	BlockControls,
} from "@wordpress/block-editor";

import { memo, createContext, useContext } from "@wordpress/element";
import { CTHFBlockControls } from "./components/InspectorControls.js";
import { handleTimeFormat } from "./utils.js";
import { renderBlockStyles } from "./style.js";

export const CTHFBlockContext = createContext(null);

const BusinessHours = memo(() => {
	const { blockID, attributes } = useContext(CTHFBlockContext);

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: renderBlockStyles(blockID, attributes),
				}}
			/>

			<ul id={blockID} className="cthf-block__business-hours">
				{attributes.weekdays.map((item, _i) => {
					return (
						<>
							<li className="business-hour__item">
								<span className="weekday">{item.key}</span>
								{item.opened && (
									<div className="active-hours">
										<span className="opening-hour">
											{handleTimeFormat(
												item.openTime?.hours,
												item.openTime?.minutes,
												attributes.timeFormat,
											)}
										</span>
										<span className="time-separator">
											{attributes.timeStyles.separator}
										</span>
										<span className="closing-hour">
											{handleTimeFormat(
												item.closeTime?.hours,
												item.closeTime?.minutes,
												attributes.timeFormat,
											)}
										</span>
									</div>
								)}

								{!item.opened && (
									<>
										<span className="closed-message">
											{attributes.notification.content}
										</span>
									</>
								)}
							</li>
						</>
					);
				})}
			</ul>
		</>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	const blockProps = useBlockProps({
		className: "cthf-block__wrapper",
	});

	return (
		<>
			<CTHFBlockContext.Provider
				value={{
					blockID,
					attributes,
					setAttributes,
				}}
			>
				<div {...blockProps}>
					<BusinessHours />
				</div>

				<CTHFBlockControls />
			</CTHFBlockContext.Provider>
		</>
	);
}
