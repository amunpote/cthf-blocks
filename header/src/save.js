import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockID = `cthf_${attributes.clientId.replace(/-/gi, "_")}`;

	return (
		<>
			<div {...useBlockProps.save()}>
				<div
					id={blockID}
					className={`cthf-block__header${
						attributes.stickyHeader.enabled ? " is-sticky" : ""
					}${attributes.stickyHeader.topBar ? " top-bar__is-sticky" : ""}${
						attributes.stickyHeader.enabled &&
						attributes.stickyHeader.bottomScrollHide
							? " is-bottom-scroll__hidden"
							: ""
					}${
						attributes.mobileMenu.status === "mobile"
							? " cthf__display-none"
							: ""
					}${
						attributes.mobileMenu.status === "always"
							? " cthf__display-none"
							: ""
					}`}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
