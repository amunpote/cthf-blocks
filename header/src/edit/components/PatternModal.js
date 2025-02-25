import { __ } from "@wordpress/i18n";

import { Modal, Spinner } from "@wordpress/components";

import { memo } from "@wordpress/element";

import {
	freeHeaderPattern,
	freeHeaderPattern2,
	freeHeaderPattern3,
	freeHeaderPattern4,
	freeHeaderPattern5,
} from "../utils.js";

export const PatternModal = memo(
	({ handleCloseModal, handlePatternImport, patternLoader }) => {
		return (
			<>
				<Modal
					title={__("Choose Header Pattern", "rootblox")}
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
								onClick={() => {
									if (patternLoader) {
										return;
									}

									handlePatternImport(freeHeaderPattern);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-2.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}

									handlePatternImport(freeHeaderPattern2);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-3.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}

									handlePatternImport(freeHeaderPattern3);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-4.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}

									handlePatternImport(freeHeaderPattern4);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}header-5.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}

									handlePatternImport(freeHeaderPattern5);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>
					</div>
				</Modal>
			</>
		);
	},
);
