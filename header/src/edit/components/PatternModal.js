import { __ } from "@wordpress/i18n";

import { Modal } from "@wordpress/components";

import { memo } from "@wordpress/element";

import {
	freeHeaderPattern,
	freeHeaderPattern2,
	freeHeaderPattern3,
	freeHeaderPattern4,
	freeHeaderPattern5,
} from "../utils.js";

export const PatternModal = memo(
	({ handleCloseModal, handlePatternImport }) => {
		return (
			<>
				<Modal
					title={__("Choose Header Pattern", "ct-header-footer-blocks")}
					onRequestClose={handleCloseModal}
					size="large"
					className="cthf__pattern-modal"
				>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(1, 1fr)",
							gap: "16px",
						}}
					>
						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-2.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern2)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-3.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern3)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-4.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeHeaderPattern4)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
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
			</>
		);
	},
);
