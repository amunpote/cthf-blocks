import { __ } from "@wordpress/i18n";

import { memo, useContext } from "@wordpress/element";

import { CTHFBlockContext } from "../index.js";

export const Styles = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	return <></>;
});
