import "../editor.scss";

import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { Modal, Button } from "@wordpress/components";

import { memo, useState, useEffect } from "@wordpress/element";

import { select, dispatch } from "@wordpress/data";

import { CTHFBlockControls } from "./components/InspectorControls.js";
import { renderBlockStyles } from "./style.js";
import {
	blankTemplate,
	freeHeaderPattern,
	freeHeaderPattern2,
	freeHeaderPattern3,
	freeHeaderPattern4,
	freeHeaderPattern5,
} from "./utils.js";

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

	const [headerContent, setHeaderContent] = useState([]);
	function handlePatternImport(blocks) {
		setHeaderContent(blocks);
		handleCloseModal();
	}

	const [innerBlocks, setInnerBlocks] = useState([]);
	useEffect(() => {
		const content = select(blockEditorStore).getBlock(clientId).innerBlocks;
		setInnerBlocks(content);

		if (content.length <= 0) {
			setHeaderContent([]);
		}
	}, [innerBlocks, select(blockEditorStore).getBlock(clientId)]);

	return (
		<>
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
								<img src={`${cthfAssets.img}starter-img.png`} />
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
								Add a pattern
							</Button>

							<Button variant="secondary" onClick={() => setStartBlank(true)}>
								Start Blank
							</Button>
						</div>
					</div>
				</>
			)}

			{openModal && (
				<Modal
					title={__("Choose Header Pattern", "ct-header-footer-blocks")}
					onRequestClose={handleCloseModal}
					size="large"
					className="cthf__header-modal"
				>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(1, 1fr)",
							gap: "16px",
						}}
					>
						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-2.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern2)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-3.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern3)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-4.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern4)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-5.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern5)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>
					</div>
				</Modal>
			)}
		</>
	);
}
