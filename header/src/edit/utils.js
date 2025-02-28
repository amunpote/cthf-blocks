import { __ } from "@wordpress/i18n";

// export function getFontOptions() {
// 	let fontOptions = [{ label: "Default", value: "" }];
// 	if (typeof cozyBlockAssets.googleFonts === "object") {
// 		// Loop through the array of objects using for...of
// 		for (let key in cozyBlockAssets.googleFonts) {
// 			fontOptions.push({
// 				label: cozyBlockAssets.googleFonts[key],
// 				value: key,
// 			});
// 		}
// 	}
// 	return fontOptions;
// }

export const blankTemplate = [
	["cthf-blocks/header-top-bar"],
	["core/group"],
];

export const freeHeaderPattern = [
	[
		"core/group",
		{
			style: {
				spacing: {
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
					padding: { top: "30px", bottom: "30px", left: "26px", right: "26px" },
				},
				color: { background: "#fffffe" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					style: { spacing: { margin: { top: "0", bottom: "0" } } },
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					["core/site-logo", { width: 80 }],
					[
						"core/navigation",
						{
							customTextColor: "#44464e",
							style: {
								typography: {
									fontSize: "16px",
									fontStyle: "normal",
									fontWeight: "500",
									textDecoration: "none",
								},
							},
						},
					],
					[
						"core/group",
						{
							style: {
								spacing: { blockGap: "0", margin: { top: "0", bottom: "0" } },
							},
							layout: {
								type: "flex",
								flexWrap: "nowrap",
								justifyContent: "center",
							},
						},
						[
							[
								"core/search",
								{
									label: "Search",
									showLabel: false,
									width: 100,
									widthUnit: "%",
									buttonText: "Search",
									buttonPosition: "button-only",
									buttonUseIcon: true,
									isSearchFieldHidden: true,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										color: { text: "#030821", background: "#fffffe00" },
										spacing: {
											margin: { top: "0", bottom: "0", left: "0", right: "0" },
										},
										layout: { selfStretch: "fit", flexSize: null },
										typography: { fontSize: "14px" },
									},
								},
							],
							[
								"core/buttons",
								{
									style: {
										typography: {
											fontStyle: "normal",
											fontWeight: "500",
											fontSize: "16px",
											textDecoration: "none",
										},
									},
								},
								[
									[
										"core/button",
										{
											text: "Book Now",
											style: {
												color: { background: "#3450e6" },
												border: { radius: "10px" },
											},
										},
									],
								],
							],
						],
					],
				],
			],
		],
	],
];

export const freeHeaderPattern2 = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						color: { background: "#040c36", text: "#fffffe" },
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								right: "26px",
								left: "26px",
								top: "8px",
								bottom: "8px",
							},
							blockGap: "0",
						},
						elements: { link: { color: { text: "#fffffe" } } },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: { spacing: { blockGap: "6px" } },
							layout: {
								type: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
							},
						},
						[
							[
								"core/group",
								{
									style: { spacing: { blockGap: "4px" } },
									layout: { type: "flex", flexWrap: "wrap" },
								},
								[
									[
										"core/image",
										{
											url: `${cthfAssets.img}header-2-1.png`,
											sizeSlug: "full",
											linkDestination: "none",
										},
									],
									[
										"core/paragraph",
										{
											style: {
												elements: { link: { color: { text: "#d9d9d9" } } },
												color: { text: "#d9d9d9" },
												typography: { fontSize: "14px" },
											},
											content: `<strong><mark style="background-color:rgba(0, 0, 0, 0);color:#f3f3f3" class="has-inline-color">Trending News:</mark></strong> Nasa Expects Humans to Live on Moon This Dec...`,
										},
									],
								],
							],
							[
								"core/social-links",
								{
									customIconColor: "#fffffe",
									iconColorValue: "#fffffe",
									customIconBackgroundColor: "#fffffe00",
									iconBackgroundColorValue: "#fffffe00",
									openInNewTab: true,
									size: "has-normal-icon-size",
									className: "is-style-default",
									style: { spacing: { blockGap: { top: "4px", left: "0px" } } },
								},
								[
									[
										"core/social-link",
										{ url: "#", service: "facebook", label: "" },
									],
									["core/social-link", { url: "#", service: "x", label: "" }],
									[
										"core/social-link",
										{ url: "#", service: "linkedin", label: "" },
									],
									[
										"core/social-link",
										{ url: "#", service: "pinterest", label: "" },
									],
									[
										"core/social-link",
										{ url: "#", service: "telegram", label: "" },
									],
									[
										"core/social-link",
										{ url: "#", service: "instagram", label: "" },
									],
								],
							],
						],
					],
				],
			],
		],
	],
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "20px", bottom: "20px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#fffffe" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					["core/site-logo", { width: 160 }],
					[
						"core/image",
						{
							url: `${cthfAssets.img}header-2-2.png`,
							sizeSlug: "full",
							linkDestination: "none",
						},
					],
				],
			],
		],
	],
	[
		"core/group",
		{
			style: {
				color: { background: "#040c36", text: "#fffffe" },
				spacing: {
					margin: { top: "0", bottom: "0" },
					padding: {
						right: "26px",
						left: "26px",
						top: "6px",
						bottom: "6px",
					},
					blockGap: "0",
				},
				elements: { link: { color: { text: "#fffffe" } } },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					[
						"core/navigation",
						{
							customTextColor: "#fffffe",
							customOverlayTextColor: "#333333",
							style: {
								typography: {
									fontSize: "16px",
									fontStyle: "normal",
									fontWeight: "500",
								},
							},
						},
					],
					[
						"core/search",
						{
							label: "Search",
							showLabel: false,
							width: 100,
							widthUnit: "%",
							buttonText: "Search",
							buttonPosition: "button-only",
							buttonUseIcon: true,
							isSearchFieldHidden: true,
							style: {
								elements: { link: { color: { text: "#fffffe" } } },
								color: { background: "#fffffe00", text: "#fffffe" },
								spacing: {
									margin: { top: "0", bottom: "0", left: "0", right: "0" },
								},
								layout: { selfStretch: "fit", flexSize: null },
								typography: { fontSize: "14px" },
							},
						},
					],
				],
			],
		],
	],
];

export const freeHeaderPattern3 = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						color: { background: "#3450e6", text: "#fffffe" },
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								right: "26px",
								left: "26px",
								top: "6px",
								bottom: "6px",
							},
							blockGap: "0",
						},
						elements: { link: { color: { text: "#fffffe" } } },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: { spacing: { blockGap: "6px" } },
							layout: {
								type: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
							},
						},
						[
							[
								"core/paragraph",
								{
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: { fontSize: "14px" },
										color: { text: "#fffffe" },
									},
									content:
										"Get a 30% discount on all services when you refer someone.",
								},
							],
							[
								"core/social-links",
								{
									customIconColor: "#fffffe",
									iconColorValue: "#fffffe",
									customIconBackgroundColor: "#fffffe00",
									iconBackgroundColorValue: "#fffffe00",
									openInNewTab: true,
									size: "has-normal-icon-size",
									className: "is-style-default",
									style: {
										spacing: { blockGap: { top: "4px", left: "0px" } },
										layout: { selfStretch: "fit", flexSize: null },
									},
								},
								[
									[
										"core/social-link",
										{ url: "#", service: "facebook", label: "" },
									],
									["core/social-link", { url: "#", service: "x", label: "" }],
									[
										"core/social-link",
										{ url: "#", service: "pinterest", label: "" },
									],
									[
										"core/social-link",
										{ url: "#", service: "instagram", label: "" },
									],
								],
							],
						],
					],
				],
			],
		],
	],
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "20px", bottom: "20px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#fffffe" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					["core/site-logo", { width: 160 }],
					[
						"core/group",
						{
							style: {
								spacing: {
									blockGap: "16px",
									margin: { top: "0", bottom: "0" },
									padding: { right: "0", left: "0", top: "0", bottom: "0" },
								},
							},
							layout: { type: "flex", flexWrap: "wrap" },
						},
						[
							[
								"core/group",
								{
									style: {
										spacing: {
											blockGap: "0",
											margin: { top: "0", bottom: "0" },
											padding: { right: "0", left: "0", top: "0", bottom: "0" },
										},
									},
									layout: {
										type: "flex",
										flexWrap: "nowrap",
										verticalAlignment: "center",
									},
								},
								[
									[
										"core/image",
										{
											url: `${cthfAssets.img}header-3-1.png`,
											lightbox: { enabled: false },
											width: "72px",
											height: "72px",
											scale: "cover",
											sizeSlug: "full",
											linkDestination: "custom",
										},
									],
									[
										"core/group",
										{
											style: { spacing: { blockGap: "0" } },
											layout: { type: "constrained" },
										},
										[
											[
												"core/paragraph",
												{
													content: "Call Us",
													style: {
														elements: { link: { color: { text: "#333333" } } },
														color: { text: "#333333" },
														typography: {
															fontSize: "14px",
														},
													},
												},
											],
											[
												"core/paragraph",
												{
													content: "(123) 456-7890",
													style: {
														elements: { link: { color: { text: "#333333" } } },
														color: { text: "#333333" },
														typography: {
															fontSize: "16px",
															fontStyle: "normal",
															fontWeight: "600",
														},
													},
												},
											],
										],
									],
								],
							],
							[
								"core/group",
								{
									style: {
										spacing: {
											blockGap: "0",
											margin: { top: "0", bottom: "0" },
											padding: { right: "0", left: "0", top: "0", bottom: "0" },
										},
									},
									layout: {
										type: "flex",
										flexWrap: "nowrap",
										verticalAlignment: "center",
									},
								},
								[
									[
										"core/image",
										{
											url: `${cthfAssets.img}header-3-2.png`,
											lightbox: { enabled: false },
											width: "72px",
											height: "72px",
											scale: "cover",
											sizeSlug: "full",
											linkDestination: "custom",
										},
									],
									[
										"core/group",
										{
											style: { spacing: { blockGap: "0" } },
											layout: { type: "constrained" },
										},
										[
											[
												"core/paragraph",
												{
													content: "Location",
													style: {
														elements: { link: { color: { text: "#333333" } } },
														color: { text: "#333333" },
														typography: {
															fontSize: "14px",
														},
													},
												},
											],
											[
												"core/paragraph",
												{
													content: "New York, NY 10011, USA",
													style: {
														elements: { link: { color: { text: "#333333" } } },
														color: { text: "#333333" },
														typography: {
															fontSize: "16px",
															fontStyle: "normal",
															fontWeight: "600",
														},
													},
												},
											],
										],
									],
								],
							],
							[
								"core/buttons",
								{
									style: {
										typography: {
											fontSize: "16px",
											fontStyle: "normal",
											fontWeight: "500",
											textDecoration: "none",
										},
									},
								},
								[
									[
										"core/button",
										{
											text: "Request Quote",
											style: {
												border: { radius: "100px" },
												spacing: {
													padding: {
														left: "34px",
														right: "34px",
														top: "16px",
														bottom: "16px",
													},
												},
												color: { background: "#3450e6", text: "#fffffe" },
												elements: { link: { color: { text: "#fffffe" } } },
											},
										},
									],
								],
							],
						],
					],
				],
			],
		],
	],
	[
		"core/group",
		{
			style: {
				color: { text: "#fffffe", background: "#fffffe" },
				spacing: {
					margin: { top: "0", bottom: "0" },
					padding: {
						right: "26px",
						left: "26px",
						top: "6px",
						bottom: "6px",
					},
					blockGap: "0",
				},
				elements: { link: { color: { text: "#fffffe" } } },
				shadow: "var:preset|shadow|natural",
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					[
						"core/navigation",
						{
							customTextColor: "#4b4b4b",
							style: {
								typography: {
									fontSize: "16px",
									fontStyle: "normal",
									fontWeight: "500",
								},
							},
						},
					],
					[
						"core/search",
						{
							label: "Search",
							showLabel: false,
							width: 100,
							widthUnit: "%",
							buttonText: "Search",
							buttonPosition: "button-only",
							buttonUseIcon: true,
							isSearchFieldHidden: true,
							style: {
								elements: { link: { color: { text: "#030821" } } },
								color: { background: "#fffffe00", text: "#030821" },
								spacing: {
									margin: { top: "0", bottom: "0", left: "0", right: "0" },
								},
								layout: { selfStretch: "fit", flexSize: null },
								typography: { fontSize: "14px" },
							},
						},
					],
				],
			],
		],
	],
];

export const freeHeaderPattern4 = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						color: { background: "#3450e6", text: "#fffffe" },
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								right: "26px",
								left: "26px",
								top: "8px",
								bottom: "8px",
							},
							blockGap: "0",
						},
						elements: { link: { color: { text: "#fffffe" } } },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: { spacing: { blockGap: "6px" } },
							layout: {
								type: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
							},
						},
						[
							[
								"core/group",
								{
									style: { spacing: { blockGap: "10px" } },
									layout: { type: "flex", flexWrap: "wrap" },
								},
								[
									[
										"core/group",
										{
											style: {
												spacing: { blockGap: "0", padding: { right: "10px" } },
											},
											layout: {
												type: "flex",
												flexWrap: "nowrap",
												verticalAlignment: "center",
											},
										},
										[
											[
												"core/image",
												{
													lightbox: { enabled: false },
													url: `${cthfAssets.img}header-4-1.png`,
													scale: "cover",
													sizeSlug: "full",
													linkDestination: "custom",
													style: {
														spacing: { margin: { top: "-4px", right: "4px" } },
													},
												},
											],
											[
												"core/paragraph",
												{
													content: "(123) 456-7890",
													style: {
														elements: { link: { color: { text: "#fffffe" } } },
														typography: { fontSize: "14px" },
														color: { text: "#fffffe" },
													},
												},
											],
										],
									],
									[
										"core/group",
										{
											style: {
												spacing: { blockGap: "0", padding: { right: "10px" } },
											},
											layout: {
												type: "flex",
												flexWrap: "nowrap",
												verticalAlignment: "center",
											},
										},
										[
											[
												"core/image",
												{
													lightbox: { enabled: false },
													url: `${cthfAssets.img}header-4-2.png`,
													scale: "cover",
													sizeSlug: "full",
													linkDestination: "custom",
													style: {
														spacing: { margin: { top: "-4px", right: "4px" } },
													},
												},
											],
											[
												"core/paragraph",
												{
													content: "sample@example.com",
													style: {
														elements: { link: { color: { text: "#fffffe" } } },
														typography: { fontSize: "14px" },
														color: { text: "#fffffe" },
													},
												},
											],
										],
									],
									[
										"core/group",
										{
											style: {
												spacing: { blockGap: "0", padding: { right: "10px" } },
											},
											layout: {
												type: "flex",
												flexWrap: "nowrap",
												verticalAlignment: "center",
											},
										},
										[
											[
												"core/image",
												{
													lightbox: { enabled: false },
													url: `${cthfAssets.img}header-4-3.png`,
													scale: "cover",
													sizeSlug: "full",
													linkDestination: "custom",
													style: {
														spacing: { margin: { top: "-4px", right: "4px" } },
													},
												},
											],
											[
												"core/paragraph",
												{
													content: "New York, NY 10011, USA",
													style: {
														elements: { link: { color: { text: "#fffffe" } } },
														typography: { fontSize: "14px" },
														color: { text: "#fffffe" },
													},
												},
											],
										],
									],
								],
							],
							[
								"core/social-links",
								{
									customIconColor: "#fffffe",
									iconColorValue: "#fffffe",
									customIconBackgroundColor: "#fffffe00",
									iconBackgroundColorValue: "#fffffe00",
									openInNewTab: true,
									size: "has-normal-icon-size",
									className: "is-style-default",
									style: {
										spacing: { blockGap: { top: "4px", left: "0px" } },
										layout: { selfStretch: "fit", flexSize: null },
									},
								},
								[
									[
										"core/social-link",
										{ url: "#", service: "facebook", label: "" },
									],
									["core/social-link", { url: "#", service: "x", label: "" }],
									[
										"core/social-link",
										{ url: "#", service: "pinterest", label: "" },
									],
									[
										"core/social-link",
										{ url: "#", service: "instagram", label: "" },
									],
								],
							],
						],
					],
				],
			],
		],
	],
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "20px", bottom: "20px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#fffffe" },
				shadow: "var:preset|shadow|natural",
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					["core/site-logo", { width: 160 }],
					[
						"core/navigation",
						{
							customTextColor: "#4b4b4b",
							style: {
								typography: {
									fontSize: "16px",
									fontStyle: "normal",
									fontWeight: "500",
								},
							},
						},
					],
					[
						"core/buttons",
						{
							style: {
								typography: {
									fontSize: "16px",
									fontStyle: "normal",
									fontWeight: "500",
									textDecoration: "none",
								},
							},
						},
						[
							[
								"core/button",
								{
									text: "Request Quote",
									style: {
										spacing: {
											padding: {
												left: "34px",
												right: "34px",
												top: "16px",
												bottom: "16px",
											},
										},
										color: { background: "#3450e6", text: "#fffffe" },
										elements: { link: { color: { text: "#fffffe" } } },
										border: { radius: "0px" },
									},
								},
							],
						],
					],
				],
			],
		],
	],
];

export const freeHeaderPattern5 = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						color: { background: "#030821", text: "#fffffe" },
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								right: "26px",
								left: "26px",
								top: "10px",
								bottom: "10px",
							},
							blockGap: "0",
						},
						elements: { link: { color: { text: "#fffffe" } } },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/navigation",
						{
							customTextColor: "#fffffe",
							customOverlayTextColor: "#333333",
							style: {
								typography: {
									fontSize: "16px",
									fontStyle: "normal",
									fontWeight: "500",
								},
							},
							layout: { type: "flex", justifyContent: "center" },
						},
					],
				],
			],
		],
	],
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "26px", bottom: "26px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#fffffe" },
				shadow: "var:preset|shadow|natural",
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					[
						"core/group",
						{
							style: { spacing: { blockGap: "0" } },
							layout: { type: "constrained" },
						},
						[
							[
								"core/post-date",
								{
									format: "l",
									style: {
										color: { text: "#030821" },
										elements: { link: { color: { text: "#030821" } } },
										typography: {
											fontStyle: "normal",
											fontWeight: "500",
											fontSize: "16px",
											textTransform: "uppercase",
											lineHeight: "1.2",
										},
									},
								},
							],
							[
								"core/post-date",
								{
									format: "F d, Y",
									style: {
										color: { text: "#030821" },
										elements: { link: { color: { text: "#030821" } } },
										typography: {
											fontStyle: "normal",
											fontWeight: "500",
											fontSize: "14px",
											lineHeight: "1.2",
										},
									},
								},
							],
						],
					],
					["core/site-logo", { width: 160 }],
					[
						"core/social-links",
						{
							size: "has-small-icon-size",
							style: { spacing: { blockGap: { top: "8px", left: "8px" } } },
						},
						[
							["core/social-link", { url: "#", service: "facebook" }],
							["core/social-link", { url: "#", service: "x" }],
							["core/social-link", { url: "#", service: "instagram" }],
							["core/social-link", { url: "#", service: "youtube" }],
						],
					],
				],
			],
		],
	],
];
