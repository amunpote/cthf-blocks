import { __ } from "@wordpress/i18n";

export const blankTemplate = [["core/group"]];

export const freeFooterPattern = [
	[
		"core/group",
		{
			style: {
				color: { background: "#040c36", text: "#fffffe" },
				elements: { link: { color: { text: "#fffffe" } } },
				spacing: {
					margin: { top: "0px", bottom: "0px" },
					padding: { top: "80px", bottom: "80px", left: "26px", right: "26px" },
				},
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					style: { spacing: { blockGap: "0" } },
					layout: { type: "constrained", contentSize: "625px" },
				},
				[
					[
						"core/paragraph",
						{
							content: "Looking for a great start",
							align: "center",
							style: {
								typography: {
									textTransform: "uppercase",
									letterSpacing: "2.8px",
									fontSize: "14px",
									fontStyle: "normal",
									fontWeight: "500",
									lineHeight: "1.2",
								},
							},
						},
					],
					[
						"core/heading",
						{
							content: "Let's Build Together",
							textAlign: "center",
							level: 3,
							style: {
								elements: { link: { color: { text: "#fffffe" } } },
								color: { text: "#fffffe" },
								typography: {
									fontSize: "48px",
									fontStyle: "normal",
									fontWeight: "500",
									lineHeight: "1.3",
								},
							},
						},
					],
					[
						"core/paragraph",
						{
							content:
								"Lorem ipsum is placeholder text commonly used in the publishing industries for previewing layouts and visual mockups.",
							align: "center",
							style: {
								typography: { fontSize: "16px" },
								spacing: { margin: { top: "20px", bottom: "36px" } },
							},
						},
					],
					[
						"core/buttons",
						{
							style: {
								typography: {
									fontSize: "14px",
									fontStyle: "normal",
									fontWeight: "500",
									textDecoration: "none",
								},
							},
							layout: { type: "flex", justifyContent: "center" },
						},
						[
							[
								"core/button",
								{
									text: "Contact Us",
									style: {
										color: { background: "#3450e6", text: "#fffffe" },
										elements: { link: { color: { text: "#fffffe" } } },
										border: { radius: "100px" },
										spacing: {
											padding: {
												left: "42px",
												right: "42px",
												top: "14px",
												bottom: "14px",
											},
										},
									},
								},
							],
						],
					],
					[
						"core/paragraph",
						{
							content:
								"Proudly powered by WordPress | Header Footer Blocks by CozyThemes",
							align: "center",
							style: {
								typography: { fontSize: "14px" },
								spacing: { margin: { top: "36px", bottom: "26px" } },
							},
						},
					],
				],
			],
			[
				"core/group",
				{
					style: {
						border: {
							top: { color: "#ffffff5c", style: "solid", width: "1px" },
						},
						spacing: {
							padding: { right: "26px", left: "26px", top: "26px" },
							margin: { top: "42px" },
						},
					},
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					["core/site-logo"],
					[
						"core/navigation",
						{
							customTextColor: "#fffffe",
							overlayMenu: "never",
							customOverlayTextColor: "#555555",
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
					[
						"core/social-links",
						{
							customIconColor: "#fffffe",
							iconColorValue: "#fffffe",
							customIconBackgroundColor: "#fffffe00",
							iconBackgroundColorValue: "#fffffe00",
							style: {
								spacing: {
									margin: { right: "0", left: "0" },
									blockGap: { top: "6px", left: "6px" },
								},
							},
							layout: { type: "flex", justifyContent: "center" },
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

export const freeFooterPattern2 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#fffffe", text: "#434343" },
				spacing: {
					padding: { right: "26px", left: "26px", top: "80px", bottom: "80px" },
					margin: { top: "0px", bottom: "0px" },
				},
				elements: { link: { color: { text: "#434343" } } },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{ style: { spacing: { blockGap: { top: "44px", left: "40px" } } } },
				[
					[
						"core/column",
						{ width: "30%", style: { spacing: { blockGap: "0" } } },
						[
							["core/site-logo"],
							[
								"core/paragraph",
								{
									content:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
									style: {
										typography: { fontSize: "15px" },
										spacing: { margin: { top: "26px", bottom: "28px" } },
									},
								},
							],
							[
								"core/social-links",
								{
									size: "has-small-icon-size",
									style: { spacing: { blockGap: { top: "6px", left: "8px" } } },
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
					[
						"core/column",
						{
							style: {
								typography: { fontSize: "16px" },
								spacing: { blockGap: "0" },
							},
						},
						[
							[
								"core/heading",
								{
									content: "Company",
									level: 4,
									style: {
										color: { text: "#040c36" },
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "500",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "Home",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "About Us",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: "Career",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: "Privacy Policy",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							["core/paragraph", { content: "Contact" }],
						],
					],
					[
						"core/column",
						{
							style: {
								typography: { fontSize: "16px" },
								spacing: { blockGap: "0" },
							},
						},
						[
							[
								"core/heading",
								{
									content: "Services",
									level: 4,
									style: {
										color: { text: "#040c36" },
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "500",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "Web Application",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "Digital Marketing",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: "Branding",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: "UI/UX",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							["core/paragraph", { content: "Startup Ideas" }],
						],
					],
					[
						"core/column",
						{ width: "25%", style: { typography: { fontSize: "16px" } } },
						[
							[
								"core/heading",
								{
									content: "Contact Info",
									level: 4,
									style: {
										color: { text: "#040c36" },
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "500",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content:
										"Location: <br>1234 Creative Avenue Los Angeles, CA 90001USA",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "E-mail: sample@example.com",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							["core/paragraph", { content: "Phone: (123) 456-7890" }],
						],
					],
				],
			],
			[
				"core/group",
				{
					style: {
						border: { top: { color: "#040c3642", width: "1px" } },
						spacing: {
							padding: { right: "26px", left: "26px", top: "26px" },
							margin: { top: "36px" },
						},
					},
					layout: { type: "constrained" },
				},
				[
					[
						"core/paragraph",
						{
							content:
								"Proudly powered by WordPress | Header Footer Blocks by CozyThemes",
							align: "center",
						},
					],
				],
			],
		],
	],
];

export const freeFooterPattern3 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#3450e6", text: "#f2f2f2" },
				spacing: {
					margin: { top: "0px", bottom: "0px" },
					padding: { right: "26px", left: "26px", top: "80px", bottom: "80px" },
				},
				elements: { link: { color: { text: "#f2f2f2" } } },
				typography: { fontSize: "16px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			["core/site-logo", { width: 318, align: "center" }],
			[
				"core/columns",
				{
					style: {
						spacing: {
							margin: { top: "36px", bottom: "0" },
							blockGap: { top: "44px", left: "26px" },
						},
					},
				},
				[
					[
						"core/column",
						{
							style: {
								typography: { fontSize: "16px" },
								spacing: { blockGap: "0" },
							},
						},
						[
							[
								"core/heading",
								{
									content: "About Us",
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: {
											fontSize: "20px",
											lineHeight: "1.3",
											textTransform: "uppercase",
											fontStyle: "normal",
											fontWeight: "700",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "About Us",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "Our Mission & Vision",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							["core/paragraph", { content: "Career" }],
						],
					],
					[
						"core/column",
						{
							style: {
								typography: { fontSize: "16px" },
								spacing: { blockGap: "0" },
							},
						},
						[
							[
								"core/heading",
								{
									content: "Quick Links",
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: {
											fontSize: "20px",
											lineHeight: "1.3",
											textTransform: "uppercase",
											fontStyle: "normal",
											fontWeight: "700",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "Privay Policy",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "Terms & Conditions",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							["core/paragraph", { content: "Contact Us" }],
						],
					],
					[
						"core/column",
						{
							style: {
								typography: { fontSize: "16px" },
								spacing: { blockGap: "0" },
							},
						},
						[
							[
								"core/heading",
								{
									content: "Supports",
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: {
											fontSize: "20px",
											lineHeight: "1.3",
											textTransform: "uppercase",
											fontStyle: "normal",
											fontWeight: "700",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "E-mail: sample@example.com",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							["core/paragraph", { content: "Phone: (123) 456-7890" }],
						],
					],
					[
						"core/column",
						{},
						[
							[
								"core/social-links",
								{
									customIconColor: "#fffffe",
									iconColorValue: "#fffffe",
									customIconBackgroundColor: "#fffffe00",
									iconBackgroundColorValue: "#fffffe00",
									style: {
										spacing: {
											margin: { right: "0", left: "0" },
											blockGap: { top: "6px", left: "6px" },
										},
									},
									layout: { type: "flex", justifyContent: "center" },
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
			[
				"core/group",
				{
					style: {
						border: {
							top: { color: "#ffffff9c", style: "solid", width: "1px" },
						},
						spacing: { margin: { top: "54px" }, padding: { top: "26px" } },
					},
					layout: { type: "constrained" },
				},
				[
					[
						"core/paragraph",
						{
							content:
								"Proudly powered by WordPress | Header Footer Blocks by CozyThemes",
							align: "center",
						},
					],
				],
			],
		],
	],
];

export const freeFooterPattern4 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#040c36", text: "#fffffe" },
				elements: { link: { color: { text: "#fffffe" } } },
				typography: { fontSize: "14px" },
				spacing: {
					padding: { right: "26px", left: "26px", top: "80px", bottom: "80px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{
					style: {
						spacing: {
							margin: { bottom: "80px" },
							blockGap: { top: "44px", left: "26px" },
						},
					},
				},
				[
					[
						"core/column",
						{
							width: "50%",
							style: { spacing: { blockGap: "0" } },
							layout: {
								type: "constrained",
								contentSize: "347px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: "Get In Touch with Us!",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: {
											fontSize: "54px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
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
											textDecoration: "none",
											fontStyle: "normal",
											fontWeight: "500",
										},
										spacing: { margin: { top: "36px" } },
									},
								},
								[
									[
										"core/button",
										{
											text: "Book Now",
											style: {
												border: { radius: "0px" },
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe", background: "#3450e6" },
												spacing: {
													padding: {
														left: "42px",
														right: "42px",
														top: "14px",
														bottom: "14px",
													},
												},
											},
										},
									],
								],
							],
						],
					],
					[
						"core/column",
						{ style: { spacing: { blockGap: "0" } } },
						[
							[
								"core/paragraph",
								{ content: "1234 Creative Avenue Los Angeles, CA 90001USA" },
							],
							[
								"core/social-links",
								{
									customIconColor: "#fffffe",
									iconColorValue: "#fffffe",
									customIconBackgroundColor: "#fffffe00",
									iconBackgroundColorValue: "#fffffe00",
									style: {
										spacing: {
											margin: { right: "0", left: "0", top: "26px" },
											blockGap: { top: "6px", left: "6px" },
										},
									},
									layout: { type: "flex", justifyContent: "left" },
								},
								[
									["core/social-link", { url: "#", service: "facebook" }],
									["core/social-link", { url: "#", service: "x" }],
									["core/social-link", { url: "#", service: "instagram" }],
								],
							],
						],
					],
					[
						"core/column",
						{ style: { spacing: { blockGap: "0" } } },
						[
							["core/paragraph", { content: "E-mail: sample@example.com" }],
							[
								"core/paragraph",
								{
									content: "Phone: (123) 456-7890",
									style: { spacing: { margin: { top: "18px" } } },
								},
							],
						],
					],
				],
			],
			[
				"core/paragraph",
				{
					content:
						"Proudly powered by WordPress | Header Footer Blocks by CozyThemes",
				},
			],
		],
	],
];

export const freeFooterPattern5 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#000316", text: "#fffffe" },
				elements: { link: { color: { text: "#fffffe" } } },
				spacing: {
					padding: {
						right: "26px",
						left: "26px",
						top: "120px",
						bottom: "80px",
					},
					margin: { top: "0", bottom: "0" },
				},
				typography: { fontSize: "15px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{
					style: {
						spacing: {
							margin: { top: "0", bottom: "0" },
							blockGap: { top: "44px", left: "36px" },
						},
					},
				},
				[
					[
						"core/column",
						{
							style: { spacing: { blockGap: "0" } },
							layout: { type: "constrained", contentSize: "" },
						},
						[
							[
								"core/heading",
								{
									content: "About Us",
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: { fontSize: "22px" },
									},
								},
							],
							[
								"core/columns",
								{
									verticalAlignment: "center",
									isStackedOnMobile: false,
									style: {
										spacing: {
											blockGap: { top: "0", left: "0" },
											margin: { top: "16px", bottom: "26px" },
										},
									},
								},
								[
									[
										"core/column",
										{
											verticalAlignment: "center",
											width: "20%",
											style: {
												border: {
													top: {
														color: "#3450e6",
														style: "solid",
														width: "2px",
													},
													right: {},
													bottom: {},
													left: {},
												},
											},
										},
									],
									[
										"core/column",
										{
											verticalAlignment: "center",
											width: "66.66%",
											style: {
												border: {
													top: {
														color: "#f2f2f278",
														style: "solid",
														width: "1px",
													},
													right: {},
													bottom: {},
													left: {},
												},
											},
										},
									],
								],
							],
							[
								"core/paragraph",
								{
									content:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
								},
							],
						],
					],
					[
						"core/column",
						{ style: { spacing: { blockGap: "0" } } },
						[
							[
								"core/heading",
								{
									content: "Gallery",
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: { fontSize: "22px" },
									},
								},
							],
							[
								"core/columns",
								{
									verticalAlignment: "center",
									isStackedOnMobile: false,
									style: {
										spacing: {
											blockGap: { top: "0", left: "0" },
											margin: { top: "16px", bottom: "26px" },
										},
									},
								},
								[
									[
										"core/column",
										{
											verticalAlignment: "center",
											width: "20%",
											style: {
												border: {
													top: {
														color: "#3450e6",
														style: "solid",
														width: "2px",
													},
													right: {},
													bottom: {},
													left: {},
												},
											},
										},
									],
									[
										"core/column",
										{
											verticalAlignment: "center",
											width: "66.66%",
											style: {
												border: {
													top: {
														color: "#f2f2f278",
														style: "solid",
														width: "1px",
													},
													right: {},
													bottom: {},
													left: {},
												},
											},
										},
									],
								],
							],
							[
								"core/gallery",
								{
									linkTo: "none",
									style: { spacing: { blockGap: { top: "2px", left: "2px" } } },
								},
								[
									[
										"core/image",
										{
											url: `${cthfAssets.img}footer-5-1.png`,
											sizeSlug: "large",
											linkDestination: "none",
										},
									],
									[
										"core/image",
										{
											url: `${cthfAssets.img}footer-5-2.png`,
											sizeSlug: "large",
											linkDestination: "none",
										},
									],
									[
										"core/image",
										{
											url: `${cthfAssets.img}footer-5-3.png`,
											sizeSlug: "large",
											linkDestination: "none",
										},
									],
									[
										"core/image",
										{
											url: `${cthfAssets.img}footer-5-4.png`,
											sizeSlug: "large",
											linkDestination: "none",
										},
									],
									[
										"core/image",
										{
											url: `${cthfAssets.img}footer-5-5.png`,
											sizeSlug: "large",
											linkDestination: "none",
										},
									],
									[
										"core/image",
										{
											url: `${cthfAssets.img}footer-5-6.png`,
											sizeSlug: "large",
											linkDestination: "none",
										},
									],
								],
							],
						],
					],
					[
						"core/column",
						{
							style: { spacing: { blockGap: "0" } },
							layout: { type: "constrained", contentSize: "" },
						},
						[
							[
								"core/heading",
								{
									content: "Newsletter",
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: { fontSize: "22px" },
									},
								},
							],
							[
								"core/columns",
								{
									verticalAlignment: "center",
									isStackedOnMobile: false,
									style: {
										spacing: {
											blockGap: { top: "0", left: "0" },
											margin: { top: "16px", bottom: "26px" },
										},
									},
								},
								[
									[
										"core/column",
										{
											verticalAlignment: "center",
											width: "20%",
											style: {
												border: {
													top: {
														color: "#3450e6",
														style: "solid",
														width: "2px",
													},
													right: {},
													bottom: {},
													left: {},
												},
											},
										},
									],
									[
										"core/column",
										{
											verticalAlignment: "center",
											width: "66.66%",
											style: {
												border: {
													top: {
														color: "#f2f2f278",
														style: "solid",
														width: "1px",
													},
													right: {},
													bottom: {},
													left: {},
												},
											},
										},
									],
								],
							],
							[
								"core/paragraph",
								{
									content: "Add the Contact Form 7 shortcode or a similar one!",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
							[
								"core/group",
								{ layout: { type: "constrained" } },
								[["core/shortcode"]],
							],
						],
					],
				],
			],
		],
	],
];

export const freeFooterPattern6 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#fffffe" },
				spacing: {
					padding: { top: "80px", bottom: "80px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
				},
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					style: { spacing: { margin: { top: "0", bottom: "60px" } } },
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					["core/site-logo"],
					[
						"core/group",
						{
							style: {
								color: { text: "#434343" },
								elements: { link: { color: { text: "#434343" } } },
								typography: { fontSize: "15px" },
							},
							layout: {
								type: "flex",
								flexWrap: "nowrap",
								justifyContent: "center",
							},
						},
						[
							["core/paragraph", { content: "Opening Hours" }],
							["core/paragraph", { content: "Location" }],
							["core/paragraph", { content: "Contact" }],
						],
					],
					[
						"core/social-links",
						{
							customIconColor: "#170122",
							iconColorValue: "#170122",
							customIconBackgroundColor: "#fffffe00",
							iconBackgroundColorValue: "#fffffe00",
							className: "cthf__has-light-border",
							style: { spacing: { blockGap: { top: "6px", left: "8px" } } },
						},
						[
							["core/social-link", { url: "#", service: "facebook" }],
							["core/social-link", { url: "#", service: "x" }],
							["core/social-link", { url: "#", service: "instagram" }],
						],
					],
				],
			],
			[
				"core/group",
				{
					style: {
						color: { background: "#f8f8f8", text: "#434343" },
						border: { radius: "100px" },
						elements: { link: { color: { text: "#434343" } } },
						typography: { fontSize: "15px" },
						spacing: {
							padding: {
								right: "32px",
								left: "32px",
								top: "20px",
								bottom: "20px",
							},
						},
					},
					layout: {
						type: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					},
				},
				[
					[
						"core/paragraph",
						{ content: "Proudly powered by WordPress | Theme by CozyThemes" },
					],
					[
						"core/paragraph",
						{ content: "Privacy Policy | Terms and Coditions" },
					],
				],
			],
		],
	],
];

export const proFooterPattern = [
	[
		"core/group",
		{
			style: { spacing: { blockGap: "0", margin: { top: "0", bottom: "0" } } },
			layout: { type: "constrained", contentSize: "100%" },
		},
		[
			[
				"core/group",
				{
					style: {
						color: { background: "#1e1f27", text: "#fffffe" },
						elements: { link: { color: { text: "#fffffe" } } },
						spacing: {
							padding: {
								right: "26px",
								left: "26px",
								top: "80px",
								bottom: "100px",
							},
							margin: { top: "0", bottom: "0" },
						},
						typography: { fontSize: "15px" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							style: {
								spacing: {
									margin: { top: "0", bottom: "0" },
									blockGap: { top: "44px", left: "36px" },
								},
							},
						},
						[
							[
								"core/column",
								{
									style: { spacing: { blockGap: "0" } },
									layout: { type: "constrained", contentSize: "" },
								},
								[
									[
										"core/heading",
										{
											content: "About Us",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: { fontSize: "22px" },
											},
										},
									],
									[
										"core/columns",
										{
											verticalAlignment: "center",
											isStackedOnMobile: false,
											style: {
												spacing: {
													blockGap: { top: "0", left: "0" },
													margin: { top: "16px", bottom: "26px" },
												},
											},
										},
										[
											[
												"core/column",
												{
													verticalAlignment: "center",
													width: "20%",
													style: {
														border: {
															top: {
																color: "#3450e6",
																style: "solid",
																width: "2px",
															},
															right: {},
															bottom: {},
															left: {},
														},
													},
												},
											],
											[
												"core/column",
												{
													verticalAlignment: "center",
													width: "66.66%",
													style: {
														border: {
															top: {
																color: "#f2f2f278",
																style: "solid",
																width: "1px",
															},
															right: {},
															bottom: {},
															left: {},
														},
													},
												},
											],
										],
									],
									[
										"core/paragraph",
										{
											content:
												"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
										},
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Gallery",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: { fontSize: "22px" },
											},
										},
									],
									[
										"core/columns",
										{
											verticalAlignment: "center",
											isStackedOnMobile: false,
											style: {
												spacing: {
													blockGap: { top: "0", left: "0" },
													margin: { top: "16px", bottom: "26px" },
												},
											},
										},
										[
											[
												"core/column",
												{
													verticalAlignment: "center",
													width: "20%",
													style: {
														border: {
															top: {
																color: "#3450e6",
																style: "solid",
																width: "2px",
															},
															right: {},
															bottom: {},
															left: {},
														},
													},
												},
											],
											[
												"core/column",
												{
													verticalAlignment: "center",
													width: "66.66%",
													style: {
														border: {
															top: {
																color: "#f2f2f278",
																style: "solid",
																width: "1px",
															},
															right: {},
															bottom: {},
															left: {},
														},
													},
												},
											],
										],
									],
									[
										"core/gallery",
										{
											linkTo: "none",
											style: {
												spacing: { blockGap: { top: "2px", left: "2px" } },
											},
										},
										[
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-5-1.png`,
													sizeSlug: "large",
													linkDestination: "none",
												},
											],
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-5-2.png`,
													sizeSlug: "large",
													linkDestination: "none",
												},
											],
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-5-3.png`,
													sizeSlug: "large",
													linkDestination: "none",
												},
											],
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-5-4.png`,
													sizeSlug: "large",
													linkDestination: "none",
												},
											],
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-5-5.png`,
													sizeSlug: "large",
													linkDestination: "none",
												},
											],
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-5-6.png`,
													sizeSlug: "large",
													linkDestination: "none",
												},
											],
										],
									],
								],
							],
							[
								"core/column",
								{
									style: { spacing: { blockGap: "0" } },
									layout: { type: "constrained", contentSize: "" },
								},
								[
									[
										"core/heading",
										{
											content: "Recent Posts",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: { fontSize: "22px" },
											},
										},
									],
									[
										"core/columns",
										{
											verticalAlignment: "center",
											isStackedOnMobile: false,
											style: {
												spacing: {
													blockGap: { top: "0", left: "0" },
													margin: { top: "16px", bottom: "26px" },
												},
											},
										},
										[
											[
												"core/column",
												{
													verticalAlignment: "center",
													width: "20%",
													style: {
														border: {
															top: {
																color: "#3450e6",
																style: "solid",
																width: "2px",
															},
															right: {},
															bottom: {},
															left: {},
														},
													},
												},
											],
											[
												"core/column",
												{
													verticalAlignment: "center",
													width: "66.66%",
													style: {
														border: {
															top: {
																color: "#f2f2f278",
																style: "solid",
																width: "1px",
															},
															right: {},
															bottom: {},
															left: {},
														},
													},
												},
											],
										],
									],
									[
										"core/query",
										{
											queryId: 0,
											query: {
												perPage: 3,
												pages: 0,
												offset: 0,
												postType: "post",
												order: "desc",
												orderBy: "date",
												author: "",
												search: "",
												exclude: [],
												sticky: "",
												inherit: false,
												taxQuery: null,
												parents: [],
												format: [],
											},
										},
										[
											[
												"core/post-template",
												{ style: { spacing: { blockGap: "15px" } } },
												[
													[
														"core/post-title",
														{
															isLink: true,
															linkTarget: "_blank",
															className: "cthf__has-list-icon",
															style: {
																color: { text: "#d9d9d9" },
																elements: {
																	link: { color: { text: "#d9d9d9" } },
																},
																typography: {
																	fontSize: "16px",
																	fontStyle: "normal",
																	fontWeight: "500",
																	textDecoration: "none",
																},
															},
														},
													],
												],
											],
										],
									],
								],
							],
							[
								"core/column",
								{
									style: { spacing: { blockGap: "0" } },
									layout: { type: "constrained", contentSize: "" },
								},
								[
									[
										"core/heading",
										{
											content: "Newsletter",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: { fontSize: "22px" },
											},
										},
									],
									[
										"core/columns",
										{
											verticalAlignment: "center",
											isStackedOnMobile: false,
											style: {
												spacing: {
													blockGap: { top: "0", left: "0" },
													margin: { top: "16px", bottom: "26px" },
												},
											},
										},
										[
											[
												"core/column",
												{
													verticalAlignment: "center",
													width: "20%",
													style: {
														border: {
															top: {
																color: "#3450e6",
																style: "solid",
																width: "2px",
															},
															right: {},
															bottom: {},
															left: {},
														},
													},
												},
											],
											[
												"core/column",
												{
													verticalAlignment: "center",
													width: "66.66%",
													style: {
														border: {
															top: {
																color: "#f2f2f278",
																style: "solid",
																width: "1px",
															},
															right: {},
															bottom: {},
															left: {},
														},
													},
												},
											],
										],
									],
									[
										"core/paragraph",
										{
											content:
												"Add the Contact Form 7 shortcode or a similar one!",
											style: { spacing: { margin: { bottom: "16px" } } },
										},
									],
									[
										"core/group",
										{ layout: { type: "constrained" } },
										[["core/shortcode"]],
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
						color: { background: "#000316" },
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								right: "26px",
								left: "26px",
								top: "16px",
								bottom: "16px",
							},
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/paragraph",
						{
							content: `Proudly powered by WordPress | Theme by <strong><mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color">CozyThemes</mark></strong>`,
							align: "center",
							style: {
								elements: { link: { color: { text: "#d9d9d9" } } },
								color: { text: "#d9d9d9" },
								typography: {
									fontSize: "15px",
									fontStyle: "normal",
									fontWeight: "500",
								},
							},
						},
					],
				],
			],
		],
	],
];

export const proFooterPattern2 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#000316" },
				spacing: {
					padding: { top: "0px", bottom: "0px", left: "0px", right: "0px" },
					margin: { top: "0", bottom: "0" },
				},
			},
			layout: { type: "constrained", contentSize: "100%" },
		},
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							padding: {
								right: "26px",
								left: "26px",
								top: "100px",
								bottom: "60px",
							},
							margin: { top: "0", bottom: "0" },
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							style: {
								spacing: {
									margin: { top: "0", bottom: "0" },
									blockGap: { top: "44px", left: "36px" },
								},
								typography: { fontSize: "14px" },
								color: { text: "#ebebeb" },
								elements: { link: { color: { text: "#ebebeb" } } },
							},
						},
						[
							[
								"core/column",
								{
									width: "33%",
									style: { spacing: { blockGap: "0" } },
									layout: { type: "default" },
								},
								[
									["core/site-logo"],
									[
										"core/paragraph",
										{
											content:
												"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
											style: {
												spacing: { margin: { top: "22px", bottom: "20px" } },
											},
										},
									],
									[
										"core/social-links",
										{
											customIconColor: "#fffffe",
											iconColorValue: "#fffffe",
											customIconBackgroundColor: "#3450e6",
											iconBackgroundColorValue: "#3450e6",
											style: {
												spacing: { blockGap: { top: "6px", left: "10px" } },
											},
										},
										[
											["core/social-link", { url: "#", service: "facebook" }],
											["core/social-link", { url: "#", service: "x" }],
											["core/social-link", { url: "#", service: "instagram" }],
										],
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Company",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: { fontSize: "22px" },
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Shop All" }],
									[
										"core/paragraph",
										{
											content: "Accessories",
											style: { spacing: { margin: { top: "14px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Men's",
											style: { spacing: { margin: { top: "14px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Women's",
											style: { spacing: { margin: { top: "14px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Blogs",
											style: { spacing: { margin: { top: "14px" } } },
										},
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Quick Links",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: { fontSize: "22px" },
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Dress" }],
									[
										"core/paragraph",
										{
											content: "Bottoms",
											style: { spacing: { margin: { top: "14px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Tops",
											style: { spacing: { margin: { top: "14px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Watches",
											style: { spacing: { margin: { top: "14px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Jackets",
											style: { spacing: { margin: { top: "14px" } } },
										},
									],
								],
							],
							[
								"core/column",
								{
									width: "30%",
									style: { spacing: { blockGap: "0" } },
									layout: { type: "default" },
								},
								[
									[
										"core/heading",
										{
											content: "Subscribe to Newsletter",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: { fontSize: "22px" },
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content:
												"Add the Contact Form 7 shortcode or a similar one!",
											style: { spacing: { margin: { bottom: "16px" } } },
										},
									],
									[
										"core/group",
										{ layout: { type: "constrained" } },
										[["core/shortcode"]],
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
							padding: {
								right: "26px",
								left: "26px",
								bottom: "36px",
								top: "26px",
							},
							margin: { top: "0", bottom: "0" },
						},
						border: {
							top: { color: "#ffffff3d", style: "solid", width: "1px" },
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: {
								spacing: {
									blockGap: "16px",
									margin: { top: "0", bottom: "0" },
								},
							},
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
									content: `© 2024 Created with <mark style="background-color:rgba(0, 0, 0, 0);color:#3450e6" class="has-inline-color">CozyThemes</mark> |  Terms and Condition`,
									style: {
										color: { text: "#ebebeb" },
										elements: { link: { color: { text: "#ebebeb" } } },
										typography: { fontSize: "15px" },
									},
								},
							],
							[
								"core/image",
								{
									lightbox: { enabled: false },
									url: `${cthfAssets.img}footer-pro-2-1.png`,
									sizeSlug: "full",
									linkDestination: "custom",
								},
							],
						],
					],
				],
			],
		],
	],
];

export const proFooterPattern3 = [
	[
		"core/group",
		{
			style: {
				color: {
					gradient:
						"linear-gradient(255deg,rgb(52,80,230) 0%,rgb(0,3,22) 33%,rgb(0,3,22) 63%,rgb(52,80,230) 100%)",
				},
				spacing: {
					padding: { top: "0", bottom: "0", left: "0", right: "0" },
					margin: { top: "0", bottom: "0" },
				},
			},
			layout: { type: "constrained", contentSize: "100%" },
		},
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								right: "26px",
								left: "26px",
								top: "80px",
								bottom: "40px",
							},
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							style: {
								spacing: {
									margin: { top: "0", bottom: "0" },
									blockGap: { top: "44px", left: "26px" },
								},
								elements: { link: { color: { text: "#f2f2f2" } } },
								color: { text: "#f2f2f2" },
								typography: { fontSize: "15px" },
							},
						},
						[
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "About Us",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "24px",
													textTransform: "uppercase",
													fontStyle: "normal",
													fontWeight: "700",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Our Story" }],
									[
										"core/paragraph",
										{
											content: "Case Studies",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Sustainability",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Terms and Conditions",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Features",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "24px",
													textTransform: "uppercase",
													fontStyle: "normal",
													fontWeight: "700",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Trained Staff" }],
									[
										"core/paragraph",
										{
											content: "Floor Area",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Schedules",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Features",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Get Started",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "24px",
													textTransform: "uppercase",
													fontStyle: "normal",
													fontWeight: "700",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Pricing" }],
									[
										"core/paragraph",
										{
											content: "Our Story",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Terms and Conditions",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "About Us",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Membership",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "24px",
													textTransform: "uppercase",
													fontStyle: "normal",
													fontWeight: "700",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Our Story" }],
									[
										"core/paragraph",
										{
											content: "Floor Area",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Sustainability",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Features",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
								],
							],
							[
								"core/column",
								{
									verticalAlignment: "center",
									style: { spacing: { blockGap: "0" } },
								},
								[
									[
										"core/social-links",
										{
											customIconColor: "#170122",
											iconColorValue: "#170122",
											customIconBackgroundColor: "#fffffe",
											iconBackgroundColorValue: "#fffffe",
											className: "cthf-pro__layout-1",
											style: {
												spacing: { blockGap: { top: "6px", left: "8px" } },
											},
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
				],
			],
			[
				"core/group",
				{
					style: {
						border: {
							top: { color: "#ffffff36", style: "solid", width: "1px" },
						},
						spacing: {
							margin: { top: "44px", bottom: "0" },
							padding: {
								top: "26px",
								bottom: "36px",
								right: "26px",
								left: "26px",
							},
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: {
								color: { text: "#ebebeb" },
								elements: { link: { color: { text: "#ebebeb" } } },
								typography: { fontSize: "15px" },
								spacing: {
									margin: { top: "0", bottom: "0" },
									blockGap: "16px",
								},
							},
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
									content: `© 2024 Created with <mark style="background-color:rgba(0, 0, 0, 0);color:#fffffe" class="has-inline-color">CozyThemes</mark>`,
								},
							],
							["core/paragraph", { content: "Terms and Conditions" }],
						],
					],
				],
			],
		],
	],
];

export const proFooterPattern4 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					margin: { top: "0", bottom: "0" },
					padding: { top: "0", bottom: "0", left: "0", right: "0" },
				},
				color: { background: "#02061c" },
			},
			layout: { type: "constrained", contentSize: "100%" },
		},
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							padding: {
								bottom: "100px",
								left: "26px",
								right: "26px",
								top: "100px",
							},
							margin: { top: "0", bottom: "0" },
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							style: {
								color: { text: "#ebedf0" },
								elements: { link: { color: { text: "#ebedf0" } } },
								spacing: {
									margin: { top: "0", bottom: "0" },
									blockGap: { top: "44px", left: "36px" },
								},
								typography: { fontSize: "14px" },
							},
						},
						[
							[
								"core/column",
								{
									width: "35%",
									style: { spacing: { blockGap: "0" } },
									layout: {
										type: "constrained",
										contentSize: "363px",
										justifyContent: "left",
									},
								},
								[
									["core/site-logo"],
									[
										"core/paragraph",
										{
											content:
												"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
											style: {
												spacing: { margin: { top: "22px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: "E-mail: sample@example.com",
											style: { spacing: { margin: { bottom: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Phone: +1 (000) 012-3456",
											style: { spacing: { margin: { bottom: "16px" } } },
										},
									],
									[
										"core/social-links",
										{
											customIconColor: "#fffffe",
											iconColorValue: "#fffffe",
											customIconBackgroundColor: "#fffffe00",
											iconBackgroundColorValue: "#fffffe00",
											style: {
												spacing: {
													blockGap: { top: "6px", left: "8px" },
													margin: {
														right: "0",
														left: "0",
														top: "0",
														bottom: "0",
													},
												},
											},
										},
										[
											["core/social-link", { url: "#", service: "facebook" }],
											["core/social-link", { url: "#", service: "x" }],
											["core/social-link", { url: "#", service: "instagram" }],
											["core/social-link", { url: "#", service: "youtube" }],
											["core/social-link", { url: "#", service: "pinterest" }],
										],
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Information",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "18px",
													textTransform: "none",
													fontStyle: "normal",
													fontWeight: "700",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Our Store" }],
									[
										"core/paragraph",
										{
											content: "About Us",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Decoration",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Home Delivery",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Terms and Conditions",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Help and Supports",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "18px",
													textTransform: "none",
													fontStyle: "normal",
													fontWeight: "700",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Track Order" }],
									[
										"core/paragraph",
										{
											content: "Contact Us",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "FAQs",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Privacy Policy",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Returns",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Our Products",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "18px",
													textTransform: "none",
													fontStyle: "normal",
													fontWeight: "700",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									["core/paragraph", { content: "Bean Bags" }],
									[
										"core/paragraph",
										{
											content: "Minimal Sofa",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Ceramic Vase",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Lighting Leaf Plants",
											style: { spacing: { margin: { top: "16px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Chairs",
											style: { spacing: { margin: { top: "16px" } } },
										},
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
							padding: {
								right: "26px",
								left: "26px",
								bottom: "20px",
								top: "20px",
							},
							margin: { top: "0", bottom: "0" },
						},
						border: {
							top: { color: "#ffffff3d", style: "solid", width: "1px" },
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: {
								spacing: {
									blockGap: "16px",
									margin: { top: "0", bottom: "0" },
								},
							},
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
									content: "Proudly powered by WordPress | Theme by CozyThemes",
									style: {
										color: { text: "#ebebeb" },
										elements: { link: { color: { text: "#ebebeb" } } },
										typography: { fontSize: "15px" },
									},
								},
							],
							[
								"core/image",
								{
									lightbox: { enabled: false },
									url: `${cthfAssets.img}footer-pro-2-1.png`,
									sizeSlug: "full",
									linkDestination: "custom",
								},
							],
						],
					],
				],
			],
		],
	],
];
