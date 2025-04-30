import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import { TabPanel } from "@wordpress/components";

import { cog, styles } from "@wordpress/icons";

import {
	memo,
	useState,
	useEffect,
	createContext,
	useContext,
} from "@wordpress/element";
import { Settings } from "./Settings.js";
import { Styles } from "./Styles.js";
import { CTHFBlockContext } from "../index.js";

export const CTHFBlockControlsContext = createContext(null);

export const CTHFBlockControls = memo(() => {
	const { attributes, setAttributes, deviceType, setSidebarPreview } =
		useContext(CTHFBlockContext);

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

	const [logoSelected, setLogoSelected] = useState(false);
	const [navigationSelected, setNavigationSelected] = useState(false);
	const [searchSelected, setSearchSelected] = useState(false);
	const [btnSelected, setBtnSelected] = useState(false);
	const [miniCartSelected, setMiniCartSelected] = useState(false);
	const [accSelected, setAccSelected] = useState(false);
	useEffect(() => {
		const remainingOptions = mobileOptions.flat();

		if (!remainingOptions.includes("Site Logo")) {
			setLogoSelected(true);
		} else {
			setLogoSelected(false);
		}

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

		if (!remainingOptions.includes("Mini Cart")) {
			setMiniCartSelected(true);
		} else {
			setMiniCartSelected(false);
		}

		if (!remainingOptions.includes("My Account")) {
			setAccSelected(true);
		} else {
			setAccSelected(false);
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
							<CTHFBlockControlsContext.Provider
								value={{
									attributes,
									setAttributes,
									deviceType,
									initialMobileOptions,
									mobileOptions,
									setMobileOptions,
									logoSelected,
									navigationSelected,
									searchSelected,
									btnSelected,
									miniCartSelected,
									accSelected,
									setSidebarPreview,
								}}
							>
								{tab.name === "cthf__tab-one" && <Settings />}

								{tab.name === "cthf__tab-two" && <Styles />}
							</CTHFBlockControlsContext.Provider>
						</>
					)}
				</TabPanel>
			</InspectorControls>
		</>
	);
});
