import { __ } from "@wordpress/i18n";

import { Modal } from "@wordpress/components";

import { memo } from "@wordpress/element";

import {
	freeFooterPattern,
	freeFooterPattern2,
	freeFooterPattern3,
	freeFooterPattern4,
	freeFooterPattern5,
} from "../utils.js";

export const PatternModal = memo(
	({ handleCloseModal, handlePatternImport }) => {
		return (
			<>
				<Modal
					title={__("Choose Footer Pattern", "ct-header-footer-blocks")}
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
							<img src={`${cthfAssets.img}footer.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeFooterPattern)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer-2.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeFooterPattern2)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer-3.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeFooterPattern3)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer-4.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeFooterPattern4)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer-5.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => handlePatternImport(freeFooterPattern5)}
							>
								{__("Import Pattern", "ct-header-footer-blocks")}
							</div>
						</figure>
					</div>
				</Modal>
			</>
		);
	}
);
