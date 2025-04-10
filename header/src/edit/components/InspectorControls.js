import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import { TabPanel } from "@wordpress/components";

import { cog, styles } from "@wordpress/icons";

import { memo, useState, useEffect, createContext } from "@wordpress/element";
import { Settings } from "./Settings.js";
import { Styles } from "./Styles.js";

export const CTHFBlockContext = createContext(null);

export const CTHFBlockControls = memo(({ attributes, setAttributes }) => {
	const initialMobileOptions = [
		"Site Logo",
		"Navigation",
		"My Account",
		"Search",
		"Mini Cart",
		"Button",
	];

	// Get selected items from the layout
	const allSelected = attributes.mobileMenu.layout.flat();

	// Filter the available mobile options on first render
	const [mobileOptions, setMobileOptions] = useState(() =>
		initialMobileOptions.filter((item) => !allSelected.includes(item)),
	);

	const [navigationSelected, setNavigationSelected] = useState(false);
	const [searchSelected, setSearchSelected] = useState(false);
	const [btnSelected, setBtnSelected] = useState(false);
	useEffect(() => {
		const remainingOptions = mobileOptions.flat();
		if (!remainingOptions.includes("Navigation")) {
			setNavigationSelected(true);
		} else {
			setNavigationSelected(false);
		}

		if (!remainingOptions.includes("Search")) {
			setSearchSelected(true);
		} else {
			setSearchSelected(false);
		}

		if (!remainingOptions.includes("Button")) {
			setBtnSelected(true);
		} else {
			setBtnSelected(false);
		}
	}, [mobileOptions]);

	return (
		<>
			<InspectorControls>
				<TabPanel
					className="cthf__tab-panel"
					tabs={[
						{
							title: __("Settings", "rootblox"),
							name: "cthf__tab-one",
							icon: cog,
							className: "cthf__tab",
						},
						{
							title: __("Styles", "rootblox"),
							name: "cthf__tab-two",
							icon: styles,
							className: "cthf__tab",
						},
					]}
				>
					{(tab) => (
						<>
							<CTHFBlockContext.Provider
								value={{
									attributes,
									setAttributes,
									initialMobileOptions,
									mobileOptions,
									setMobileOptions,
									navigationSelected,
									searchSelected,
									btnSelected,
								}}
							>
								{tab.name === "cthf__tab-one" && <Settings />}

								{tab.name === "cthf__tab-two" && <Styles />}
							</CTHFBlockContext.Provider>
						</>
					)}
				</TabPanel>
			</InspectorControls>
		</>
	);
});
