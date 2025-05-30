import { IconVariation1, IconVariation2, IconVariation3 } from "./utils.js";

export default function Save({ attributes }) {
	const blockID = `cthf_${attributes.clientId.replace(/-/gi, "_")}`;

	const openNewTab = attributes.openNewTab ? "_blank" : "";
	const noFollow = attributes.noFollow ? "nofollow" : "";

	return (
		<>
			<div id={blockID} className="cthf-block__contact-info-email">
				<a
					className="contact__link contact-info-email__link"
					href={attributes.url}
					target={openNewTab}
					rel={noFollow}
				>
					{attributes.icon.enabled && (
						<>
							<div className="icon__wrapper">
								{attributes.iconVariation === "variation-1" && (
									<IconVariation1 />
								)}
								{attributes.iconVariation === "variation-2" && (
									<IconVariation2 />
								)}
								{attributes.iconVariation === "variation-3" && (
									<IconVariation3 />
								)}
							</div>
						</>
					)}
					<span> {attributes.content}</span>
				</a>
			</div>
		</>
	);
}
