import "../editor.scss";

import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
	BlockControls,
} from "@wordpress/block-editor";
import { Button, ToolbarGroup, ToolbarButton } from "@wordpress/components";

import { createBlocksFromInnerBlocksTemplate } from "@wordpress/blocks";

import { memo, useState, useEffect } from "@wordpress/element";

import { select, dispatch } from "@wordpress/data";

import { CTHFBlockControls } from "./components/InspectorControls.js";
import { renderBlockStyles } from "./style.js";
import { blankTemplate } from "./utils.js";
import { PatternModal } from "./components/PatternModal.js";

import { replace } from "@wordpress/icons";

const HeaderBuilder = memo(
	({ blockID, attributes, startBlank, headerContent }) => {
		return (
			<>
				<div id={blockID} className="cthf-block__header">
					{!startBlank && <InnerBlocks template={headerContent} />}

					{startBlank && <InnerBlocks template={blankTemplate} />}
				</div>
			</>
		);
	},
);

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	const blockProps = useBlockProps({ className: "cthf-block__wrapper" });

	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	const [startBlank, setStartBlank] = useState(false);

	const [innerBlocks, setInnerBlocks] = useState([]);
	useEffect(() => {
		const content = select(blockEditorStore).getBlock(clientId).innerBlocks;
		setInnerBlocks(content);

		if (content.length <= 0) {
			setHeaderContent([]);
			setStartBlank(false);
		}
	}, [innerBlocks, select(blockEditorStore).getBlock(clientId)]);

	const [headerContent, setHeaderContent] = useState([]);
	function handlePatternImport(blocks) {
		if (innerBlocks.length <= 0) {
			setHeaderContent(blocks);
		} else {
			dispatch(blockEditorStore).replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate(blocks),
			);
		}

		handleCloseModal();
	}

	return (
		<>
			{innerBlocks.length > 0 && (
				<>
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton
								icon={replace}
								onClick={() => {
									setOpenModal(true);
								}}
							>
								{__("Replace Layout", "ct-header-footer-blocks")}
							</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>
				</>
			)}

			<div {...blockProps}>
				<style
					dangerouslySetInnerHTML={{
						__html: renderBlockStyles(blockID, attributes),
					}}
				/>

				<HeaderBuilder
					blockID={blockID}
					attributes={attributes}
					startBlank={startBlank}
					headerContent={headerContent}
				/>
			</div>

			<CTHFBlockControls
				attributes={attributes}
				setAttributes={setAttributes}
			/>

			{innerBlocks.length <= 0 && headerContent.length <= 0 && !startBlank && (
				<>
					<div className="cthf__starter-wrap">
						<div className="cthf__starter-header">
							<figure className="starter__img">
								<img src={`${cthfAssets.img}header-starter.png`} />
							</figure>
							<h4 className="starter__title">
								{__("Header", "ct-header-footer-blocks")}
							</h4>
						</div>
						<p className="cthf__starter-content">
							{__(
								"Quickly start your site with pre-designed header patterns.",
								"ct-header-footer-blocks",
							)}
						</p>
						<div className="cthf__starter-btn-wrap">
							<Button variant="secondary" onClick={handleOpenModal}>
								{__("Add a Pattern", "ct-header-footer-blocks")}
							</Button>

							<Button variant="secondary" onClick={() => setStartBlank(true)}>
								{__("Start Blank", "ct-header-footer-blocks")}
							</Button>
						</div>
					</div>
				</>
			)}

			{openModal && (
				<PatternModal
					handleCloseModal={handleCloseModal}
					handlePatternImport={handlePatternImport}
				/>
			)}
		</>
	);
}
