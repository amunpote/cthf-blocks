import "../editor.scss";

import { __ } from "@wordpress/i18n";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { Modal, Button } from "@wordpress/components";

import { memo, useState } from "@wordpress/element";

import { CTHFBlockControls } from "./components/InspectorControls.js";
import { renderBlockStyles } from "./style.js";

const HeaderBuilder = memo(({ blockID, attributes }) => {
	return (
		<>
			<div id={blockID} className="cthf-block__header">
				{(attributes.topBarHTML ||
					attributes.mainHTML ||
					attributes.bottomBarHTML) && <InnerBlocks />}
			</div>
		</>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cozyBlock_${clientId.replace(/-/gi, "_")}`;

	const blockProps = useBlockProps({ className: "cthf-block__wrapper" });

	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	return (
		<>
			<div {...blockProps}>
				<style
					dangerouslySetInnerHTML={{
						__html: renderBlockStyles(blockID, attributes),
					}}
				/>

				<HeaderBuilder blockID={blockID} attributes={attributes} />
			</div>

			<CTHFBlockControls
				attributes={attributes}
				setAttributes={setAttributes}
			/>

			{!attributes.topBarHTML &&
				!attributes.mainHTML &&
				!attributes.bottomBarHTML && (
					<>
						<div className="cthf__starter-btn-wrap">
							<Button variant="secondary" onClick={handleOpenModal}>
								Add a pattern
							</Button>

							<Button variant="secondary" onClick={handleOpenModal}>
								Start Blank
							</Button>
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
							<div className="pattern__import-btn">Import Pattern</div>
						</figure>

						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-2.png`} />
							<div className="pattern__import-btn">Import Pattern</div>
						</figure>

						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-3.png`} />
							<div className="pattern__import-btn">Import Pattern</div>
						</figure>

						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-4.png`} />
							<div className="pattern__import-btn">Import Pattern</div>
						</figure>

						<figure className="cthf-header__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-5.png`} />
							<div className="pattern__import-btn">Import Pattern</div>
						</figure>
					</div>
				</Modal>
			)}
		</>
	);
}
