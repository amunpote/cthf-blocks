import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockID = `cthf_${attributes.clientId.replace(/-/gi, "_")}`;

	return (
		<>
			<div className="cthf__sidebar-panel-wrap cthf__display-none">
				<div className="sidebar-panel__overlay" />

				<div className={`sidebar-panel__body position-${attributes.position}`}>
					<svg
						class="close__icon"
						width="10"
						height="10"
						viewBox="0 0 10 10"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.99999 4.058L8.29999 0.758003L9.24266 1.70067L5.94266 5.00067L9.24266 8.30067L8.29932 9.24334L4.99932 5.94334L1.69999 9.24334L0.757324 8.3L4.05732 5L0.757324 1.7L1.69999 0.75867L4.99999 4.058Z"
							fill="currentColor"
						/>
					</svg>

					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
