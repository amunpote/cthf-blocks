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
import {
	BackToTopIcon1,
	BackToTopIcon2,
	BackToTopIcon3,
	BackToTopIcon4,
	BackToTopIcon5,
	blankTemplate,
} from "./utils.js";
import { PatternModal } from "./components/PatternModal.js";

import { replace } from "@wordpress/icons";

const FooterBuilder = memo(
	({ blockID, attributes, startBlank, footerContent }) => {
		return (
			<>
				<style>
					{attributes.backToTop.font.family != "" &&
						attributes.backToTop.font.family != undefined && (
							<link
								rel="stylesheet"
								href={`https://fonts.googleapis.com/css2?family=${attributes.backToTop.font.family}:wght@100;200;300;400;500;600;700;800;900`}
							/>
						)}
				</style>

				<div id={blockID} className="cthf-block__header">
					{!startBlank && <InnerBlocks template={footerContent} />}

					{startBlank && <InnerBlocks template={blankTemplate} />}
				</div>

				{attributes.backToTop.enabled && (
					<>
						<div
							className={`cthf__back-to-top-wrapper position-${attributes.backToTop.position} element-${blockID}`}
						>
							{attributes.backToTop.enableIcon && (
								<div className="icon__wrapper">
									{attributes.backToTop.iconVariation === "variation-1" && (
										<BackToTopIcon1 />
									)}
									{attributes.backToTop.iconVariation === "variation-2" && (
										<BackToTopIcon2 />
									)}
									{attributes.backToTop.iconVariation === "variation-3" && (
										<BackToTopIcon3 />
									)}
									{attributes.backToTop.iconVariation === "variation-4" && (
										<BackToTopIcon4 />
									)}
									{attributes.backToTop.iconVariation === "variation-5" && (
										<BackToTopIcon5 />
									)}
								</div>
							)}

							{attributes.backToTop.enabled &&
								attributes.backToTop.enableLabel && (
									<p className="back-to-top__label">
										{attributes.backToTop.label}
									</p>
								)}
						</div>
					</>
				)}
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

	const blockProps = useBlockProps({
		className: "cthf-block__wrapper footer__wrap",
	});

	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	const [startBlank, setStartBlank] = useState(false);

	const [patternLoader, setPatternLoader] = useState(false);

	const [innerBlocks, setInnerBlocks] = useState([]);
	useEffect(() => {
		const content = select(blockEditorStore).getBlock(clientId).innerBlocks;
		setInnerBlocks(content);

		if (content.length <= 0) {
			setFooterContent([]);
			setStartBlank(false);
		}
	}, [innerBlocks, select(blockEditorStore).getBlock(clientId)]);

	const [footerContent, setFooterContent] = useState([]);
	function handlePatternImport(blocks) {
		setPatternLoader(true);

		if (innerBlocks.length <= 0) {
			setFooterContent(blocks);
		} else {
			dispatch(blockEditorStore).replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate(blocks),
			);
		}

		handleCloseModal();
		setPatternLoader(false);
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
								{__("Replace Layout", "rootblox")}
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

				<FooterBuilder
					blockID={blockID}
					attributes={attributes}
					startBlank={startBlank}
					footerContent={footerContent}
				/>
			</div>

			<CTHFBlockControls
				attributes={attributes}
				setAttributes={setAttributes}
			/>

			{innerBlocks.length <= 0 && footerContent.length <= 0 && !startBlank && (
				<>
					<div className="cthf__starter-wrap">
						<div className="cthf__starter-header">
							<figure className="starter__img">
								<img src={`${cthfAssets.img}footer-starter.png`} />
							</figure>
							<h4 className="starter__title">{__("Footer", "rootblox")}</h4>
						</div>
						<p className="cthf__starter-content">
							{__(
								"Quickly start your site with pre-designed footer patterns.",
								"rootblox",
							)}
						</p>
						<div className="cthf__starter-btn-wrap">
							<Button variant="secondary" onClick={handleOpenModal}>
								{__("Add a Pattern", "rootblox")}
							</Button>

							<Button variant="secondary" onClick={() => setStartBlank(true)}>
								{__("Start Blank", "rootblox")}
							</Button>
						</div>
					</div>
				</>
			)}

			{openModal && (
				<PatternModal
					handleCloseModal={handleCloseModal}
					handlePatternImport={handlePatternImport}
					patternLoader={patternLoader}
				/>
			)}
		</>
	);
}
