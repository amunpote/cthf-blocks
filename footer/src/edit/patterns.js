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

export const freeFooterPattern7 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "0", bottom: "0", left: "0", right: "0" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#1e1f27", text: "#f8f8f8" },
				elements: { link: { color: { text: "#f8f8f8" } } },
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
								top: "80px",
								bottom: "60px",
								left: "26px",
								right: "26px",
							},
							margin: { top: "0", bottom: "0" },
							blockGap: "0",
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{ style: { spacing: { blockGap: { top: "44px", left: "26px" } } } },
						[
							[
								"core/column",
								{ width: "33%", style: { spacing: { blockGap: "0" } } },
								[
									["core/site-logo"],
									[
										"core/paragraph",
										{
											content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
											style: {
												typography: { fontSize: "14px" },
												elements: { link: { color: { text: "#ebebeb" } } },
												color: { text: "#ebebeb" },
												spacing: { margin: { top: "26px" } },
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
								},
								[
									[
										"core/heading",
										{
											content: "Contact Info",
											level: 3,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
											},
										},
									],
									[
										"core/group",
										{
											style: {
												spacing: { blockGap: "10px", margin: { top: "26px" } },
											},
											layout: { type: "flex", flexWrap: "nowrap" },
										},
										[
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-7-1.png`,
													width: "16px",
													sizeSlug: "full",
													linkDestination: "none",
												},
											],
											[
												"core/paragraph",
												{ content: "2345 Beach,Rd<br>Metrocity USA, HWY 1235" },
											],
										],
									],
									[
										"core/group",
										{
											style: {
												spacing: { blockGap: "10px", margin: { top: "26px" } },
											},
											layout: { type: "flex", flexWrap: "nowrap" },
										},
										[
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-7-2.png`,
													width: "16px",
													sizeSlug: "full",
													linkDestination: "none",
												},
											],
											["core/paragraph", { content: "+1(000)-123456" }],
										],
									],
									[
										"core/group",
										{
											style: {
												spacing: { blockGap: "10px", margin: { top: "26px" } },
											},
											layout: { type: "flex", flexWrap: "nowrap" },
										},
										[
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-7-3.png`,
													width: "16px",
													sizeSlug: "full",
													linkDestination: "none",
												},
											],
											["core/paragraph", { content: "sample@example.com" }],
										],
									],
								],
							],
							[
								"core/column",
								{
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
								},
								[
									[
										"core/heading",
										{
											content: "Services",
											level: 3,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
											},
										},
									],
									[
										"core/list",
										{
											className: "cthf__footer-7",
											style: {
												spacing: { margin: { top: "26px" } },
												typography: { fontSize: "14px" },
											},
										},
										[
											["core/list-item", { content: "Digital Marketing" }],
											["core/list-item", { content: "Web Development" }],
											["core/list-item", { content: "Product Design" }],
											["core/list-item", { content: "UI/UX" }],
											["core/list-item", { content: "Branding" }],
										],
									],
								],
							],
							[
								"core/column",
								{
									width: "26%",
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
								},
								[
									[
										"core/heading",
										{
											content: "Get in Touch",
											level: 3,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
											},
										},
									],
									[
										"core/paragraph",
										{
											content:
												"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
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
												spacing: { blockGap: { top: "10px", left: "6px" } },
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
						spacing: {
							padding: {
								right: "26px",
								left: "26px",
								top: "26px",
								bottom: "26px",
							},
							margin: { top: "0", bottom: "0" },
						},
						border: {
							top: { color: "#ffffff4a", style: "solid", width: "1px" },
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: {
								spacing: { margin: { top: "0", bottom: "0" } },
								typography: { fontSize: "14px" },
								elements: { link: { color: { text: "#d9d9d9" } } },
								color: { text: "#d9d9d9" },
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
									content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color">CozyThemes</mark>`,
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

export const freeFooterPattern8 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "80px", bottom: "80px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#f9eeff" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			["core/site-logo", { align: "center" }],
			[
				"core/columns",
				{
					style: {
						spacing: {
							blockGap: { top: "44px", left: "26px" },
							margin: { top: "60px", bottom: "60px" },
						},
						color: { text: "#040c36" },
						elements: { link: { color: { text: "#040c36" } } },
					},
				},
				[
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: { type: "constrained", contentSize: "280px" },
						},
						[
							[
								"core/heading",
								{
									content: "Location",
									textAlign: "center",
									level: 3,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										color: { text: "#030821" },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "1234 Creative Avenue Los Angeles, CA 90001USA",
									align: "center",
									style: { spacing: { margin: { top: "26px" } } },
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
								color: { text: "#434343" },
								elements: { link: { color: { text: "#434343" } } },
							},
						},
						[
							[
								"core/heading",
								{
									content: "Contact Us",
									textAlign: "center",
									level: 3,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										color: { text: "#030821" },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "+1(000)-123456",
									align: "center",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{ content: "sample@example.com", align: "center" },
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
						},
						[
							[
								"core/heading",
								{
									content: "Follow Us",
									textAlign: "center",
									level: 3,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										color: { text: "#030821" },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Facebook</a>`,
									align: "center",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Instagram</a>`,
									align: "center",
									style: { spacing: { margin: { bottom: "16px" } } },
								},
							],
						],
					],
				],
			],
			[
				"core/paragraph",
				{
					content: `Proudly powered by WordPress | Theme by <strong><mark style="background-color:rgba(0, 0, 0, 0);color:#ac0cff" class="has-inline-color">CozyThemes</mark></strong>`,
					align: "center",
					style: {
						typography: { fontSize: "14px" },
						color: { text: "#040c36" },
						elements: { link: { color: { text: "#040c36" } } },
					},
				},
			],
		],
	],
];

export const freeFooterPattern9 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#fffffe" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{
					style: {
						spacing: {
							blockGap: { top: "44px", left: "26px" },
							margin: { top: "0px", bottom: "0px" },
						},
						color: { text: "#040c36" },
						elements: { link: { color: { text: "#040c36" } } },
						typography: { fontSize: "14px" },
					},
				},
				[
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "328px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: "Need Help?",
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										color: { text: "#030821" },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "+1(000)-123456",
									align: "left",
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
										color: { text: "#ac0cff" },
										elements: { link: { color: { text: "#ac0cff" } } },
										typography: {
											fontSize: "44px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
							],
							[
								"core/paragraph",
								{ content: "sample@example.com", align: "left" },
							],
							[
								"core/paragraph",
								{
									content: "1234 Creative Avenue Los Angeles, CA 90001USA",
									align: "left",
									style: {
										spacing: { margin: { top: "16px" } },
										typography: {
											fontStyle: "normal",
											fontWeight: "500",
											fontSize: "16px",
										},
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
								color: { text: "#434343" },
								elements: { link: { color: { text: "#434343" } } },
							},
						},
						[
							[
								"core/heading",
								{
									content: "About Us!",
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										color: { text: "#030821" },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
									style: {
										spacing: { margin: { top: "26px", bottom: "26px" } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.3",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
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
				],
			],
			[
				"core/group",
				{
					style: {
						spacing: {
							padding: { right: "0", left: "0", top: "20px", bottom: "20px" },
							margin: { top: "80px" },
						},
						border: {
							top: { color: "#040c363b", style: "solid", width: "1px" },
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
							align: "left",
							style: {
								typography: { fontSize: "14px" },
								color: { text: "#434343" },
								elements: { link: { color: { text: "#434343" } } },
							},
						},
					],
					[
						"core/social-links",
						{
							customIconColor: "#040c36",
							iconColorValue: "#040c36",
							customIconBackgroundColor: "#fffffe00",
							iconBackgroundColorValue: "#fffffe00",
							className: "cthf__footer-9",
							style: { spacing: { blockGap: { top: "10px", left: "12px" } } },
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

export const freeFooterPattern10 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#040b2e" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{
					style: {
						spacing: {
							blockGap: { top: "44px", left: "26px" },
							margin: { top: "0px", bottom: "0px" },
						},
						elements: { link: { color: { text: "#f2f2f2" } } },
						typography: { fontSize: "14px" },
						color: { text: "#f2f2f2" },
					},
				},
				[
					[
						"core/column",
						{
							width: "22%",
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: { type: "default" },
						},
						[["core/site-logo"]],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "328px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: "Quick Links",
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Home</a>`,
									align: "left",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							["core/paragraph", { content: `<a href="#">About Us</a` }],
							[
								"core/paragraph",
								{
									content: `<a href="#">Testimonials</a`,
									align: "left",
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							["core/paragraph", { content: `<a href="#">Services</a` }],
							[
								"core/paragraph",
								{
									content: `<a href="#">Contact Us</a`,
									align: "left",
									style: {
										spacing: { margin: { top: "16px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "328px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: "Tickets & Booking",
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Lift Ticket</a>`,
									align: "left",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							["core/paragraph", { content: `<a href="#">Season Passes</a` }],
							[
								"core/paragraph",
								{
									content: `<a href="#">Vacation Packages</a`,
									align: "left",
									style: {
										spacing: { margin: { top: "16px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "328px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: "Contact Us",
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<mark style="background-color:rgba(0, 0, 0, 0);color:#676767" class="has-inline-color">Email:</mark> <a href="#">sample@example.com</a>`,
									align: "left",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<mark style="background-color:rgba(0, 0, 0, 0);color:#676767" class="has-inline-color">Phone:</mark> <a href="#">+1(000) 123456</a>`,
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "328px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: "Social Media",
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
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
											blockGap: { top: "10px", left: "6px" },
											margin: { top: "26px" },
										},
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
			[
				"core/group",
				{
					style: {
						spacing: {
							padding: { right: "0", left: "0", top: "20px", bottom: "20px" },
							margin: { top: "80px" },
						},
						border: {
							top: { color: "#ffffff3b", style: "solid", width: "1px" },
							right: {},
							bottom: {},
							left: {},
						},
					},
					layout: { type: "constrained" },
				},
				[
					[
						"core/paragraph",
						{
							content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color">CozyThemes</mark>`,
							align: "center",
							style: {
								typography: { fontSize: "14px" },
								elements: { link: { color: { text: "#d9d9d9" } } },
								color: { text: "#d9d9d9" },
							},
						},
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

export const proFooterPattern5 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#040c36", text: "#e0e0e0" },
				elements: { link: { color: { text: "#e0e0e0" } } },
				typography: { fontSize: "14px" },
				spacing: {
					margin: { top: "0", bottom: "0" },
					padding: { right: "0", left: "0", top: "0", bottom: "0" },
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
								top: "80px",
								bottom: "80px",
								left: "26px",
								right: "26px",
							},
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							verticalAlignment: null,
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
								{ verticalAlignment: "center" },
								[["core/site-logo"]],
							],
							[
								"core/column",
								{},
								[
									[
										"core/group",
										{ layout: { type: "constrained" } },
										[
											[
												"core/heading",
												{
													level: 4,
													content: "Subscribe to Newsletter",
													style: {
														elements: { link: { color: { text: "#fffffe" } } },
														color: { text: "#fffffe" },
														typography: {
															fontSize: "22px",
															fontStyle: "normal",
															fontWeight: "600",
														},
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
						"core/columns",
						{
							style: {
								border: {
									top: { color: "#b0aeae70", style: "solid", width: "1px" },
								},
								spacing: {
									padding: { top: "64px" },
									margin: { top: "64px" },
									blockGap: { top: "44px", left: "36px" },
								},
							},
						},
						[
							[
								"core/column",
								{ width: "35%", style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											level: 4,
											content: "About Us",
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "20px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content:
												"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
											style: { spacing: { margin: { bottom: "26px" } } },
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
												spacing: { blockGap: { top: "6px", left: "6px" } },
											},
										},
										[
											["core/social-link", { url: "#", service: "facebook" }],
											["core/social-link", { url: "#", service: "x" }],
											["core/social-link", { url: "#", service: "instagram" }],
											["core/social-link", { url: "#", service: "telegram" }],
											["core/social-link", { url: "#", service: "pinterest" }],
											["core/social-link", { url: "#", service: "youtube" }],
											["core/social-link", { url: "#", service: "linkedin" }],
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
											level: 4,
											content: "Services",
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "20px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: "Track My Order",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Homepage",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Shipping Info",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Privacy Policy",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									["core/paragraph", { content: "Size Guide" }],
								],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											level: 4,
											content: "Quick Shop",
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "20px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: "Men's",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Women's",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Shoes",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									[
										"core/paragraph",
										{
											content: "Bags",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									["core/paragraph", { content: "Hand bags" }],
								],
							],
							[
								"core/column",
								{ width: "28%", style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											level: 4,
											content: "Our Payment Methods",
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "20px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												spacing: { margin: { bottom: "22px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content:
												"But I must explain to you how all this mistaken idea of denouncing pleasure",
											style: { spacing: { margin: { bottom: "26px" } } },
										},
									],
									[
										"core/image",
										{
											url: `${cthfAssets.img}footer-pro-2-1.png`,
											sizeSlug: "full",
											linkDestination: "none",
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
						color: { background: "#3450e6" },
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								right: "26px",
								left: "26px",
								top: "14px",
								bottom: "14px",
							},
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/paragraph",
						{
							align: "center",
							content: "Proudly powered by WordPress | Theme by CozyThemes",
							style: {
								elements: { link: { color: { text: "#fffffe" } } },
								color: { text: "#fffffe" },
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

export const proFooterPattern6 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#f9eeff" },
				spacing: {
					margin: { top: "0", bottom: "0" },
					padding: { right: "0", left: "0", top: "0", bottom: "0" },
					blockGap: "0",
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
								top: "80px",
								bottom: "0px",
								left: "26px",
								right: "26px",
							},
							margin: { top: "0", bottom: "0" },
							blockGap: "0",
						},
						elements: { link: { color: { text: "#040c36" } } },
						color: { text: "#040c36" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "15px" },
							},
							layout: { type: "constrained", contentSize: "698px" },
						},
						[
							[
								"core/heading",
								{
									content: "Book an Appointment!",
									textAlign: "center",
									style: {
										color: { text: "#040c36" },
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontStyle: "normal",
											fontWeight: "600",
											lineHeight: "1.2",
											fontSize: "44px",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
									align: "center",
									style: {
										spacing: { margin: { top: "26px", bottom: "26px" } },
										typography: { lineHeight: "1.8" },
									},
								},
							],
						],
					],
					[
						"core/buttons",
						{
							style: {
								typography: {
									fontSize: "15px",
									textDecoration: "none",
									fontStyle: "normal",
									fontWeight: "500",
								},
							},
							layout: { type: "flex", justifyContent: "center" },
						},
						[
							[
								"core/button",
								{
									text: "Book Online",
									style: {
										color: { background: "#ac0cff", text: "#fffffe" },
										elements: { link: { color: { text: "#fffffe" } } },
										border: { radius: "0px" },
										spacing: {
											padding: {
												left: "36px",
												right: "36px",
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
						"core/columns",
						{
							style: {
								spacing: {
									blockGap: { top: "44px", left: "26px" },
									margin: { top: "40px", bottom: "0px" },
								},
								typography: { fontSize: "14px" },
								elements: { link: { color: { text: "#434343" } } },
								color: { text: "#434343" },
							},
						},
						[
							[
								"core/column",
								{
									style: { spacing: { blockGap: "0" } },
									layout: {
										type: "constrained",
										contentSize: "454px",
										justifyContent: "left",
									},
								},
								[
									[
										"core/heading",
										{
											content: "About Us",
											textAlign: "left",
											level: 3,
											style: {
												elements: { link: { color: { text: "#040c36" } } },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												color: { text: "#040c36" },
											},
										},
									],
									[
										"core/paragraph",
										{
											content:
												"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
											align: "left",
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
									layout: {
										type: "constrained",
										contentSize: "150px",
										justifyContent: "center",
									},
								},
								[
									[
										"core/heading",
										{
											content: "Social Media",
											textAlign: "center",
											level: 3,
											style: {
												elements: { link: { color: { text: "#040c36" } } },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												color: { text: "#040c36" },
											},
										},
									],
									[
										"core/social-links",
										{
											customIconColor: "#fffffe",
											iconColorValue: "#fffffe",
											customIconBackgroundColor: "#ac0cff",
											iconBackgroundColorValue: "#ac0cff",
											style: {
												spacing: {
													blockGap: { top: "10px", left: "12px" },
													margin: { top: "26px" },
												},
											},
											layout: { type: "flex", justifyContent: "center" },
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
								{
									style: { spacing: { blockGap: "0" } },
									layout: {
										type: "constrained",
										contentSize: "454px",
										justifyContent: "left",
									},
								},
								[
									[
										"core/heading",
										{
											content: "Subscribe to my Newsletters",
											textAlign: "left",
											level: 3,
											style: {
												elements: { link: { color: { text: "#040c36" } } },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												color: { text: "#040c36" },
											},
										},
									],
									[
										"core/paragraph",
										{
											content:
												"Please add a 'Contact Form 7' shortcode or equivalent.",
											align: "left",
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
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
								top: "20px",
								bottom: "20px",
							},
							margin: { top: "80px" },
						},
						border: {
							top: { color: "#040c3624", style: "solid", width: "1px" },
						},
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/paragraph",
						{
							content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#ac0cff" class="has-inline-color">CozyThemes</mark>`,
							align: "center",
							style: {
								typography: { fontSize: "14px" },
								elements: { link: { color: { text: "#040c36" } } },
								color: { text: "#040c36" },
							},
						},
					],
				],
			],
		],
	],
];

export const proFooterPattern7 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				elements: { link: { color: { text: "#040c36" } } },
				color: { text: "#040c36", background: "#fffffe" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{
					style: {
						spacing: {
							blockGap: { top: "44px", left: "30px" },
							margin: { top: "0px", bottom: "0px" },
						},
						typography: { fontSize: "14px" },
						elements: { link: { color: { text: "#434343" } } },
						color: { text: "#434343" },
					},
				},
				[
					[
						"core/column",
						{
							width: "32%",
							style: { spacing: { blockGap: "0" } },
							layout: {
								type: "constrained",
								contentSize: "353px",
								justifyContent: "left",
							},
						},
						[
							["core/site-logo"],
							[
								"core/paragraph",
								{
									content: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit`,
									align: "left",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
										typography: { fontSize: "26px" },
									},
								},
							],
							[
								"core/social-links",
								{
									customIconColor: "#fffffe",
									iconColorValue: "#fffffe",
									customIconBackgroundColor: "#434343",
									iconBackgroundColorValue: "#434343",
									size: "has-small-icon-size",
									className: "cthf__pro-footer-7",
									style: {
										spacing: {
											blockGap: { top: "10px", left: "12px" },
											margin: { top: "26px" },
										},
									},
									layout: { type: "flex", justifyContent: "left" },
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
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "",
								justifyContent: "center",
							},
						},
						[
							[
								"core/heading",
								{
									content: "Quick Links",
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#040c36" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Introduction</a>`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">About Us</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Our Store</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Contact Us</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "",
								justifyContent: "center",
							},
						},
						[
							[
								"core/heading",
								{
									content: "Important Links",
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#040c36" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Privacy Policy</a>`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Terms & Conditions</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Shipping Details</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Media Kits</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
						],
					],
					[
						"core/column",
						{
							width: "28%",
							style: { spacing: { blockGap: "0" } },
							layout: {
								type: "constrained",
								contentSize: "311px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Let’s talk about bringing you the best plants and succulents!`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.4",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#040c36" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
									align: "left",
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/group",
								{
									style: { spacing: { margin: { top: "36px" } } },
									layout: { type: "constrained" },
								},
								[
									[
										"core/heading",
										{
											content: "Quick Links",
											textAlign: "left",
											level: 3,
											style: {
												elements: { link: { color: { text: "#040c36" } } },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												color: { text: "#040c36" },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Introduction</a>`,
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">About Us</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Our Store</a>`,
											style: {
												spacing: { margin: { top: "16px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Contact Us</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
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
				"core/group",
				{
					style: {
						spacing: {
							padding: {
								right: "0px",
								left: "0px",
								top: "20px",
								bottom: "20px",
							},
							margin: { top: "80px" },
						},
						border: {
							top: { color: "#040c3624", style: "solid", width: "1px" },
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
							content: `Proudly powered by WordPress | Theme by CozyThemes`,
							style: {
								typography: { fontSize: "14px" },
								elements: { link: { color: { text: "#040c36" } } },
								color: { text: "#040c36" },
							},
						},
					],
					[
						"core/paragraph",
						{
							content: "Terms and Conditions",
							style: {
								typography: { fontSize: "14px" },
								elements: { link: { color: { text: "#040c36" } } },
								color: { text: "#040c36" },
							},
						},
					],
				],
			],
		],
	],
];

export const proFooterPattern8 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "0", bottom: "0", left: "0", right: "0" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#000316" },
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
								top: "80px",
								bottom: "0px",
								left: "26px",
								right: "26px",
							},
							margin: { top: "0", bottom: "0" },
							blockGap: "0",
						},
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							style: {
								spacing: {
									blockGap: { top: "44px", left: "30px" },
									margin: { top: "0px", bottom: "0px" },
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
										contentSize: "423px",
										justifyContent: "left",
									},
								},
								[
									["core/site-logo"],
									[
										"core/paragraph",
										{
											content:
												"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
											align: "left",
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">2345 Beach,Rd<br>Metrocity USA, HWY 1235</a>`,
											style: {
												typography: {
													fontSize: "15px",
													fontStyle: "normal",
													fontWeight: "600",
												},
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
									layout: {
										type: "constrained",
										contentSize: "",
										justifyContent: "center",
									},
								},
								[
									[
										"core/heading",
										{
											content: "Quick Links",
											textAlign: "left",
											level: 3,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												color: { text: "#fffffe" },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Special Feaured</a>`,
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Our Rooms</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Activity and Gallery</a>`,
											style: {
												spacing: { margin: { top: "16px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Blogs and Articles</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Pages</a>`,
											style: {
												spacing: { margin: { top: "16px", bottom: "0px" } },
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									width: "46%",
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
									layout: {
										type: "constrained",
										contentSize: "",
										justifyContent: "center",
									},
								},
								[
									[
										"core/heading",
										{
											content: "Have any questions?",
											textAlign: "left",
											level: 3,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												color: { text: "#fffffe" },
											},
										},
									],
									[
										"core/paragraph",
										{
											content:
												"Please add 'Contact Form 7' shortcode or equivalent for a form.",
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
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
								top: "20px",
								bottom: "20px",
							},
							margin: { top: "80px" },
						},
						border: {
							top: { color: "#d9d9d92e", style: "solid", width: "1px" },
						},
					},
					layout: {
						type: "constrained",
						contentSize: "1180px",
						justifyContent: "center",
					},
				},
				[
					[
						"core/paragraph",
						{
							content: "Proudly powered by WordPress | Theme by CozyThemes",
							align: "left",
							style: {
								typography: { fontSize: "14px" },
								elements: { link: { color: { text: "#d9d9d9" } } },
								color: { text: "#d9d9d9" },
							},
						},
					],
				],
			],
		],
	],
];

export const proFooterPattern9 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "0", bottom: "0", left: "0", right: "0" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#e9ecfd" },
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
								top: "80px",
								bottom: "0px",
								left: "26px",
								right: "26px",
							},
							margin: { top: "0", bottom: "0" },
							blockGap: "0",
						},
						elements: { link: { color: { text: "#434343" } } },
						color: { text: "#434343" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							style: {
								spacing: {
									blockGap: { top: "44px", left: "44px" },
									margin: { top: "0px", bottom: "0px" },
								},
								typography: { fontSize: "14px" },
							},
						},
						[
							[
								"core/column",
								{
									width: "42%",
									style: { spacing: { blockGap: "0" } },
									layout: {
										type: "constrained",
										contentSize: "398px",
										justifyContent: "left",
									},
								},
								[
									[
										"core/paragraph",
										{
											content:
												"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
											align: "left",
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
												color: { text: "#040c36" },
												elements: { link: { color: { text: "#040c36" } } },
												typography: {
													fontSize: "20px",
													fontStyle: "normal",
													fontWeight: "500",
													lineHeight: "1.7",
												},
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									width: "35%",
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
									layout: {
										type: "constrained",
										contentSize: "295px",
										justifyContent: "left",
									},
								},
								[
									[
										"core/heading",
										{
											content: "Contact Info",
											textAlign: "left",
											level: 3,
											style: {
												elements: { link: { color: { text: "#040c36" } } },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												color: { text: "#040c36" },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `Location: 1234 Creative Avenue Los Angeles, CA 90001USA`,
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `Email: sample@example.com`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `Phone: +1 (000) 012-3456`,
											style: {
												spacing: { margin: { top: "16px", bottom: "0px" } },
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
									layout: {
										type: "constrained",
										contentSize: "",
										justifyContent: "left",
									},
								},
								[
									[
										"core/heading",
										{
											content: "Quick Links",
											textAlign: "left",
											level: 3,
											style: {
												elements: { link: { color: { text: "#040c36" } } },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
												color: { text: "#040c36" },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Introduction</a>`,
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Know More About Us</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Our Store</a>`,
											style: {
												spacing: { margin: { top: "16px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Contact Us</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
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
				"core/group",
				{
					style: {
						spacing: {
							padding: {
								right: "26px",
								left: "26px",
								top: "20px",
								bottom: "20px",
							},
							margin: { top: "80px" },
						},
						border: {
							top: { color: "#040c361f", style: "solid", width: "1px" },
							right: {},
							bottom: {},
							left: {},
						},
					},
					layout: {
						type: "constrained",
						contentSize: "1180px",
						justifyContent: "center",
					},
				},
				[
					[
						"core/group",
						{
							style: {
								spacing: {
									padding: { top: "0", bottom: "0", left: "0", right: "0" },
									margin: { top: "0", bottom: "0" },
									blockGap: "10px",
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
									content: `Proudly powered by WordPress | Theme by CozyThemes`,
									align: "left",
									style: {
										typography: { fontSize: "14px" },
										elements: { link: { color: { text: "#040c36" } } },
										color: { text: "#040c36" },
									},
								},
							],
							[
								"core/social-links",
								{
									customIconColor: "#000316",
									iconColorValue: "#000316",
									customIconBackgroundColor: "#fffffe00",
									iconBackgroundColorValue: "#fffffe00",
									style: {
										spacing: { blockGap: { top: "10px", left: "6px" } },
									},
								},
								[
									["core/social-link", { url: "#", service: "facebook" }],
									["core/social-link", { url: "#", service: "x" }],
									["core/social-link", { url: "#", service: "instagram" }],
									["core/social-link", { url: "#", service: "telegram" }],
								],
							],
						],
					],
				],
			],
		],
	],
];

export const proFooterPattern10 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { right: "0", left: "0", top: "0", bottom: "0" },
				},
				color: { background: "#001064" },
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
								top: "80px",
								bottom: "40px",
								left: "26px",
								right: "26px",
							},
						},
						elements: { link: { color: { text: "#fffffe" } } },
						color: { text: "#fffffe" },
						typography: { fontSize: "14px" },
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
							},
						},
						[
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/social-links",
										{
											customIconColor: "#fffffe",
											iconColorValue: "#fffffe",
											customIconBackgroundColor: "#fffffe00",
											iconBackgroundColorValue: "#fffffe00",
											style: {
												spacing: { blockGap: { top: "10px", left: "6px" } },
											},
											layout: { type: "flex", justifyContent: "center" },
										},
										[
											["core/social-link", { url: "#", service: "facebook" }],
											["core/social-link", { url: "#", service: "x" }],
											["core/social-link", { url: "#", service: "instagram" }],
											["core/social-link", { url: "#", service: "telegram" }],
										],
									],
								],
							],
							[
								"core/column",
								{ width: "55%" },
								[["core/site-logo", { align: "center" }]],
							],
							[
								"core/column",
								{ style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/paragraph",
										{
											content: `<a href="#">sample@example.com</a>`,
											align: "center",
											style: { typography: { fontSize: "15px" } },
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
								top: "20px",
								bottom: "20px",
							},
							margin: { top: "40px", bottom: "0" },
							blockGap: "0",
						},
						border: {
							top: { color: "#fffffe33", style: "solid", width: "2px" },
						},
						typography: { fontSize: "14px" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/paragraph",
						{
							content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color"><strong>CozyThemes</strong></mark>`,
							align: "center",
							style: {
								color: { text: "#d9d9d9" },
								elements: { link: { color: { text: "#d9d9d9" } } },
							},
						},
					],
				],
			],
		],
	],
];

export const proFooterPattern11 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
				},
				color: { background: "#13151f", text: "#fffffe" },
				typography: { fontSize: "14px" },
				elements: { link: { color: { text: "#fffffe" } } },
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
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
					},
				},
				[
					[
						"core/column",
						{
							width: "40%",
							layout: {
								type: "constrained",
								contentSize: "367px",
								justifyContent: "left",
							},
						},
						[
							["core/site-logo"],
							[
								"core/paragraph",
								{
									content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
									style: {
										spacing: { margin: { top: "26px", bottom: "26px" } },
										color: { text: "#ebebeb" },
										elements: { link: { color: { text: "#ebebeb" } } },
										typography: { fontSize: "15px" },
									},
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
										spacing: { blockGap: { top: "10px", left: "6px" } },
									},
									layout: { type: "flex", justifyContent: "left" },
								},
								[
									["core/social-link", { url: "#", service: "facebook" }],
									["core/social-link", { url: "#", service: "x" }],
									["core/social-link", { url: "#", service: "instagram" }],
									["core/social-link", { url: "#", service: "telegram" }],
								],
							],
						],
					],
					[
						"core/column",
						{
							style: {
								elements: { link: { color: { text: "#f2f2f2" } } },
								color: { text: "#f2f2f2" },
							},
						},
						[
							[
								"core/heading",
								{
									content: `Our Location`,
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: {
											fontSize: "18px",
											fontStyle: "normal",
											fontWeight: "600",
											lineHeight: "1.2",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `1234 Creative Avenue Los Angeles, CA 90001USA`,
									style: {
										spacing: { margin: { top: "26px", bottom: "26px" } },
									},
								},
							],
							[
								"core/group",
								{
									style: { spacing: { blockGap: "6px" } },
									layout: { type: "flex", flexWrap: "nowrap" },
								},
								[
									[
										"core/image",
										{
											url: `${cthfAssets.img}footer-11-1.png`,
											width: "16px",
											sizeSlug: "full",
											linkDestination: "none",
										},
									],
									[
										"core/paragraph",
										{ content: `<a href="#">Get Location</a>` },
									],
								],
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								elements: { link: { color: { text: "#f2f2f2" } } },
								color: { text: "#f2f2f2" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Quick Links`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Home</a>`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">About Us</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Menu</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Testimonials</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Contact Us</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "0px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Opening Hours`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/image",
								{
									url: `${cthfAssets.img}footer-11-2.png`,
									sizeSlug: "full",
									linkDestination: "none",
									style: {
										spacing: { margin: { top: "26px", bottom: "10px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `Monday to Friday<br>9:00 AM - 7:00 PM`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `Saturday<br>10:00 AM - 05:00 PM`,
									style: {
										spacing: { margin: { top: "0px", bottom: "26px" } },
									},
								},
							],
							[
								"core/buttons",
								{
									style: {
										typography: {
											fontSize: "15px",
											fontStyle: "normal",
											fontWeight: "600",
											textTransform: "uppercase",
											textDecoration: "none",
										},
									},
								},
								[
									[
										"core/button",
										{
											text: "Reservations",
											style: {
												color: { background: "#fffffe00" },
												border: {
													radius: "0px",
													color: "#fffffe",
													width: "1px",
												},
												spacing: {
													padding: {
														left: "34px",
														right: "34px",
														top: "12px",
														bottom: "12px",
													},
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
				"core/group",
				{
					style: {
						spacing: {
							margin: { top: "80px", bottom: "0" },
							blockGap: "16px",
							padding: { top: "26px", bottom: "26px", left: "0", right: "0" },
						},
						border: {
							top: { color: "#fffffe33", style: "solid", width: "1px" },
						},
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
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
							content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color"><strong>CozyThemes</strong></mark>`,
						},
					],
					["core/paragraph", { content: `Terms and Conditions` }],
				],
			],
		],
	],
];

export const proFooterPattern12 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
				},
				color: { background: "#fffffe" },
				typography: { fontSize: "14px" },
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
						elements: { link: { color: { text: "#434343" } } },
						color: { text: "#434343" },
					},
				},
				[
					[
						"core/column",
						{
							width: "38%",
							layout: {
								type: "constrained",
								contentSize: "367px",
								justifyContent: "left",
							},
						},
						[["core/site-logo"]],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: `About Us`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#030821" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Home</a>`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">About Us</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Testimonials</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Menu</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Contact Us</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "0px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Useful Links`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#030821" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Privacy Policy</a>`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Terms & Conditions</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Refund Policy</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">FAQs</a>`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Contact Us`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#030821" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#030821" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<mark style="background-color:rgba(0, 0, 0, 0);color:#676767" class="has-inline-color">Email:</mark> sample@example.com`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<mark style="background-color:rgba(0, 0, 0, 0);color:#676767" class="has-inline-color">Phone:</mark> +1(000) 123456`,
									style: {
										spacing: { margin: { top: "0px", bottom: "0px" } },
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
							margin: { top: "80px", bottom: "0" },
							blockGap: "16px",
							padding: { top: "20px", bottom: "20px", left: "0", right: "0" },
						},
						border: {
							top: { color: "#03082133", style: "solid", width: "1px" },
						},
						elements: { link: { color: { text: "#434343" } } },
						color: { text: "#434343" },
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
							content: `Proudly powered by WordPress | Theme by <strong>CozyThemes</strong>`,
						},
					],
					[
						"core/social-links",
						{
							customIconColor: "#fffffe",
							iconColorValue: "#fffffe",
							customIconBackgroundColor: "#434343",
							iconBackgroundColorValue: "#434343",
							className: "cthf__pro-footer-12",
							style: { spacing: { blockGap: { top: "10px", left: "10px" } } },
							layout: { type: "flex", justifyContent: "left" },
						},
						[
							["core/social-link", { url: "#", service: "facebook" }],
							["core/social-link", { url: "#", service: "x" }],
							["core/social-link", { url: "#", service: "linkedin" }],
							["core/social-link", { url: "#", service: "instagram" }],
						],
					],
				],
			],
		],
	],
];

export const proFooterPattern13 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
				},
				color: { background: "#13151f" },
				typography: { fontSize: "14px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{ layout: { type: "constrained", contentSize: "728px" } },
				[
					[
						"core/heading",
						{
							content: "Sed ut perspiciatis unde omnis iste natus error",
							textAlign: "center",
							level: 3,
							style: {
								elements: { link: { color: { text: "#fffffe" } } },
								color: { text: "#fffffe" },
								typography: {
									fontSize: "44px",
									lineHeight: "1.3",
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
								spacing: {
									blockGap: { top: "26px", left: "16px" },
									margin: { top: "36px", bottom: "60px" },
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
										color: { background: "#fffffe00", text: "#fffffe" },
										border: {
											radius: "100px",
											color: "#fffffe",
											style: "solid",
											width: "1px",
										},
										spacing: {
											padding: {
												left: "42px",
												right: "42px",
												top: "16px",
												bottom: "16px",
											},
										},
										elements: { link: { color: { text: "#fffffe" } } },
									},
								},
							],
							[
								"core/button",
								{
									text: "Learn More",
									style: {
										color: { background: "#3450e6", text: "#fffffe" },
										elements: { link: { color: { text: "#fffffe" } } },
										spacing: {
											padding: {
												left: "44px",
												right: "44px",
												top: "16px",
												bottom: "16px",
											},
										},
										border: { radius: "100px" },
									},
								},
							],
						],
					],
				],
			],
			[
				"core/columns",
				{
					style: {
						spacing: {
							margin: { top: "0px", bottom: "0" },
							blockGap: { top: "44px", left: "26px" },
							padding: { top: "44px", bottom: "26px" },
						},
						elements: { link: { color: { text: "#e0e0e0" } } },
						color: { text: "#e0e0e0" },
					},
				},
				[
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "133px",
								justifyContent: "center",
							},
						},
						[
							[
								"core/heading",
								{
									content: `About Us`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Home</a>`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Services</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "0px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">What We Do</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Blogs</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "0px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Contact Us</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "0px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "133px",
								justifyContent: "center",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Our Products`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">SaasLauncher</a>`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Jetnews Magazine</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "0px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">FotaWP</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">WoxStore</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "0px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">PhotoLancer</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "0px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "193px",
								justifyContent: "center",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Let's Talk`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<mark style="background-color:rgba(0, 0, 0, 0);color:#ebedf0" class="has-inline-color">Email:</mark> sample@example.com`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<mark style="background-color:rgba(0, 0, 0, 0);color:#ebedf0" class="has-inline-color">Phone:</mark> +1(000) 123456`,
									style: {
										spacing: { margin: { top: "0px", bottom: "0px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "14px" },
							},
							layout: {
								type: "constrained",
								contentSize: "133px",
								justifyContent: "center",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Legal Info`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "18px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">General Info</a>`,
									style: {
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Privacy Policy</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "0px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Terms & Conditions</a>`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">FAQs</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "0px" } },
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
							margin: { top: "80px", bottom: "0" },
							blockGap: "26px",
							padding: { top: "20px", bottom: "20px", left: "0", right: "0" },
						},
						border: {
							top: { color: "#ffffff2e", style: "solid", width: "1px" },
						},
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
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
						"core/paragraph",
						{
							content: `Proudly powered by WordPress | Theme by <strong>CozyThemes</strong>`,
						},
					],
					[
						"core/social-links",
						{
							customIconColor: "#fffffe",
							iconColorValue: "#fffffe",
							customIconBackgroundColor: "#fffffe00",
							iconBackgroundColorValue: "#fffffe00",
							className: "cthf__pro-footer-13",
							style: { spacing: { blockGap: { top: "10px", left: "10px" } } },
							layout: { type: "flex", justifyContent: "left" },
						},
						[
							["core/social-link", { url: "#", service: "facebook" }],
							["core/social-link", { url: "#", service: "x" }],
							["core/social-link", { url: "#", service: "instagram" }],
							["core/social-link", { url: "#", service: "linkedin" }],
						],
					],
				],
			],
		],
	],
];

export const proFooterPattern14 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					padding: { top: "0", bottom: "0", left: "0", right: "0" },
					margin: { top: "0", bottom: "0" },
					blockGap: "0",
				},
				color: { background: "#001064" },
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
								top: "26px",
								bottom: "26px",
							},
							margin: { top: "0px" },
						},
						border: {
							bottom: { color: "#fffffe", style: "solid", width: "1px" },
						},
					},
					layout: {
						type: "constrained",
						contentSize: "1180px",
						justifyContent: "center",
					},
				},
				[
					[
						"core/group",
						{
							style: {
								spacing: {
									padding: { left: "0", right: "0", top: "0px", bottom: "0px" },
									margin: { top: "0", bottom: "0" },
									blockGap: "20px",
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
								"core/heading",
								{
									content: `We look forward to welcoming you!`,
									textAlign: "left",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										typography: {
											fontSize: "30px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
										color: { text: "#fffffe" },
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
										spacing: {
											blockGap: { top: "26px", left: "16px" },
											margin: { top: "0px", bottom: "0px" },
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
												color: { background: "#fffffe00", text: "#fffffe" },
												border: {
													radius: "100px",
													color: "#fffffe",
													style: "solid",
													width: "1px",
												},
												spacing: {
													padding: {
														left: "42px",
														right: "42px",
														top: "16px",
														bottom: "16px",
													},
												},
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
			[
				"core/group",
				{
					style: {
						spacing: {
							padding: {
								top: "80px",
								bottom: "60px",
								left: "26px",
								right: "26px",
							},
							margin: { top: "0", bottom: "0" },
							blockGap: "0",
						},
						elements: { link: { color: { text: "#e0e0e0" } } },
						color: { text: "#e0e0e0" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							style: {
								spacing: {
									blockGap: { top: "44px", left: "26px" },
									margin: { top: "0px", bottom: "0px" },
								},
								typography: { fontSize: "14px" },
							},
						},
						[
							[
								"core/column",
								{
									width: "45%",
									style: { spacing: { blockGap: "0" } },
									layout: {
										type: "constrained",
										contentSize: "360px",
										justifyContent: "left",
									},
								},
								[
									["core/site-logo"],
									[
										"core/paragraph",
										{
											content: `1234 Creative Avenue Los Angeles, CA 90001USA`,
											align: "left",
											style: {
												spacing: { margin: { top: "26px", bottom: "16px" } },
												elements: { link: { color: { text: "#f2f2f2" } } },
												typography: {
													fontSize: "18px",
													fontStyle: "normal",
													fontWeight: "600",
													lineHeight: "1.7",
												},
												color: { text: "#f2f2f2" },
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
												spacing: {
													blockGap: { top: "26px", left: "16px" },
													margin: { top: "0px", bottom: "16px" },
												},
											},
											layout: { type: "flex", justifyContent: "left" },
										},
										[
											[
												"core/button",
												{
													text: "Get Directions",
													style: {
														color: { background: "#fffffe00", text: "#fffffe" },
														border: {
															radius: "100px",
															color: "#fffffe",
															style: "solid",
															width: "1px",
														},
														spacing: {
															padding: {
																left: "28px",
																right: "28px",
																top: "10px",
																bottom: "10px",
															},
														},
														elements: { link: { color: { text: "#fffffe" } } },
													},
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
											style: {
												spacing: { blockGap: { top: "10px", left: "6px" } },
											},
											layout: { type: "flex", justifyContent: "left" },
										},
										[
											["core/social-link", { url: "#", service: "facebook" }],
											["core/social-link", { url: "#", service: "x" }],
											["core/social-link", { url: "#", service: "instagram" }],
											["core/social-link", { url: "#", service: "linkedin" }],
										],
									],
								],
							],
							[
								"core/column",
								{
									width: "15%",
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
									layout: {
										type: "constrained",
										contentSize: "295px",
										justifyContent: "left",
									},
								},
								[
									[
										"core/paragraph",
										{
											content: `<a href="#">Home</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">About Us</a>`,
											style: {
												spacing: { margin: { top: "16px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Services</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									width: "",
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
									layout: {
										type: "constrained",
										contentSize: "295px",
										justifyContent: "left",
									},
								},
								[
									[
										"core/paragraph",
										{
											content: `<a href="#">SaasLauncher</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Jetnews Magazine</a>`,
											style: {
												spacing: { margin: { top: "16px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">FotaWP</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									width: "",
									style: {
										spacing: { blockGap: "0" },
										typography: { fontSize: "14px" },
									},
									layout: {
										type: "constrained",
										contentSize: "295px",
										justifyContent: "left",
									},
								},
								[
									[
										"core/paragraph",
										{
											content: `<a href="#">Privacy Policy</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Terms & Conditions</a>`,
											style: {
												spacing: { margin: { top: "16px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Careers</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "0px" } },
											},
										},
									],
								],
							],
						],
					],
					[
						"core/paragraph",
						{
							content: `Proudly powered by WordPress | Theme by CozyThemes`,
							align: "right",
							style: {
								spacing: { margin: { top: "26px", bottom: "0px" } },
								typography: { fontSize: "14px" },
							},
						},
					],
				],
			],
		],
	],
];

export const proFooterPattern15 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { right: "26px", left: "26px", top: "80px", bottom: "0px" },
				},
				color: { background: "#040c36", text: "#f2f2f2" },
				elements: { link: { color: { text: "#f2f2f2" } } },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{
					style: {
						typography: { fontSize: "14px" },
						spacing: { blockGap: { top: "44px", left: "26px" } },
					},
				},
				[
					[
						"core/column",
						{ style: { spacing: { blockGap: "0" } } },
						[
							["core/paragraph", { content: `Contact Us` }],
							[
								"core/heading",
								{
									content: "Let's Talk",
									level: 3,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: {
											fontSize: "90px",
											lineHeight: "1.2",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
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
											blockGap: { top: "10px", left: "10px" },
											margin: { top: "26px" },
										},
									},
									layout: { type: "flex", justifyContent: "left" },
								},
								[
									["core/social-link", { url: "#", service: "facebook" }],
									["core/social-link", { url: "#", service: "x" }],
									["core/social-link", { url: "#", service: "instagram" }],
									["core/social-link", { url: "#", service: "linkedin" }],
								],
							],
						],
					],
					[
						"core/column",
						{
							width: "40%",
							style: {
								spacing: { blockGap: "0" },
								typography: { fontSize: "15px" },
							},
							layout: { type: "constrained", contentSize: "423px" },
						},
						[
							[
								"core/paragraph",
								{
									content: `E-mail: sample@example.com`,
									style: { spacing: { margin: { top: "0px", bottom: "0px" } } },
								},
							],
							[
								"core/paragraph",
								{
									content: `Phone: +1(000) 123456`,
									style: {
										spacing: { margin: { top: "16px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `Location: 1234 Creative Avenue Los Angeles, CA 90001USA`,
									style: {
										spacing: { margin: { top: "0px", bottom: "36px" } },
									},
								},
							],
							[
								"core/heading",
								{
									content: "Smart, Creative Ideas to Drive Success",
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: {
											fontSize: "24px",
											lineHeight: "1.3",
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
			[
				"core/group",
				{
					style: {
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
						typography: { fontSize: "14px" },
						spacing: {
							margin: { top: "0px", bottom: "0px" },
							padding: { top: "120px", bottom: "20px" },
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
							content: `Proudly powered by WordPress | Theme by <strong>CozyThemes`,
						},
					],
					["core/paragraph", { content: "Terms & Conditions" }],
				],
			],
		],
	],
];

export const proFooterPattern16 = [
	[
		"core/cover",
		{
			url: `${cthfAssets.img}footer-16-1.png`,
			dimRatio: 50,
			customOverlayColor: "#07136d",
			isUserOverlayColor: false,
			style: {
				spacing: {
					padding: { right: "26px", left: "26px", top: "80px", bottom: "0px" },
				},
				elements: { link: { color: { text: "#fffffe" } } },
				color: { text: "#fffffe" },
				typography: { fontSize: "14px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{
					style: {
						typography: { fontSize: "15px" },
						spacing: { blockGap: { top: "44px", left: "26px" } },
					},
				},
				[
					[
						"core/column",
						{
							style: {
								typography: { fontStyle: "normal", fontWeight: "600" },
								spacing: { blockGap: "0" },
							},
							layout: {
								type: "constrained",
								contentSize: "272px",
								justifyContent: "center",
							},
						},
						[
							[
								"core/paragraph",
								{
									content: "Monday to Friday: 9:00 AM-7:00 PM",
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							["core/paragraph", { content: "Saturday: 10:00 AM-05:00 PM" }],
						],
					],
					[
						"core/column",
						{
							style: {
								typography: { fontStyle: "normal", fontWeight: "600" },
								spacing: { blockGap: "0" },
							},
						},
						[
							[
								"core/paragraph",
								{
									content: "sample@example.com",
									align: "center",
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{ content: "+1 (000) 012-3456", align: "center" },
							],
						],
					],
					[
						"core/column",
						{
							style: {
								typography: { fontStyle: "normal", fontWeight: "600" },
								spacing: { blockGap: "0" },
							},
							layout: {
								type: "constrained",
								contentSize: "187px",
								justifyContent: "center",
							},
						},
						[
							[
								"core/paragraph",
								{
									content: "1234 Creative Avenue Los Angeles",
									align: "right",
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
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
							padding: { top: "40px", bottom: "40px" },
						},
					},
					layout: { type: "constrained" },
				},
				[
					[
						"core/heading",
						{
							content: "Call Toll-Free: +1 (000) 123-4567",
							textAlign: "center",
							level: 4,
							style: {
								typography: {
									fontSize: "22px",
									fontStyle: "normal",
									fontWeight: "600",
									lineHeight: "1.2",
								},
							},
						},
					],
					[
						"core/social-links",
						{
							customIconColor: "#040c36",
							iconColorValue: "#040c36",
							customIconBackgroundColor: "#fffffe",
							iconBackgroundColorValue: "#fffffe",
							className: "cthf__pro-footer-17",
							style: {
								spacing: {
									blockGap: { top: "10px", left: "10px" },
									margin: { top: "26px", bottom: "0px" },
								},
							},
							layout: { type: "flex", justifyContent: "center" },
						},
						[
							["core/social-link", { url: "#", service: "facebook" }],
							["core/social-link", { url: "#", service: "x" }],
							["core/social-link", { url: "#", service: "instagram" }],
							["core/social-link", { url: "#", service: "linkedin" }],
						],
					],
				],
			],
			[
				"core/group",
				{
					style: {
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
						spacing: { padding: { top: "26px", bottom: "26px" } },
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
							content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color">CozyThemes</mark>`,
						},
					],
					["core/paragraph", { content: "Terms and Conditions" }],
				],
			],
		],
	],
];

export const proFooterPattern17 = [
	[
		"core/group",
		{
			style: {
				spacing: {
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { right: "0", left: "0", top: "0", bottom: "0" },
				},
				color: { background: "#13151f" },
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
								top: "80px",
								bottom: "40px",
								left: "26px",
								right: "26px",
							},
						},
						elements: { link: { color: { text: "#fffffe" } } },
						color: { text: "#fffffe" },
						typography: { fontSize: "14px" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/columns",
						{
							className: "cthf__pro-footer-17",
							style: {
								elements: { link: { color: { text: "#6a6a6a" } } },
								color: { text: "#6a6a6a" },
								typography: { fontSize: "14px" },
								spacing: {
									blockGap: { top: "0px", left: "0px" },
									margin: { top: "0px", bottom: "60px" },
									padding: { bottom: "60px" },
								},
								border: {
									bottom: { color: "#ffffff21", style: "solid", width: "1px" },
								},
							},
						},
						[
							[
								"core/column",
								{
									width: "",
									style: {
										spacing: { padding: { top: "26px", bottom: "26px" } },
									},
								},
								[
									[
										"core/group",
										{
											style: { spacing: { blockGap: "16px" } },
											layout: {
												type: "flex",
												flexWrap: "nowrap",
												verticalAlignment: "top",
											},
										},
										[
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-17-1.png`,
													width: "26px",
													sizeSlug: "full",
													linkDestination: "none",
													style: { spacing: { margin: { top: "2px" } } },
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
															content: "Contact Us",
															style: {
																spacing: {
																	margin: { top: "0px", bottom: "-2px" },
																},
															},
														},
													],
													[
														"core/paragraph",
														{
															content: "+1(000)-123456",
															style: {
																typography: {
																	fontSize: "18px",
																	fontStyle: "normal",
																	fontWeight: "600",
																},
																elements: {
																	link: { color: { text: "#fffffe" } },
																},
																color: { text: "#fffffe" },
																spacing: {
																	margin: { top: "4px", bottom: "0px" },
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
									style: {
										border: {
											left: {
												color: "#ffffff1c",
												style: "solid",
												width: "1px",
											},
										},
										spacing: {
											padding: { left: "44px", top: "26px", bottom: "26px" },
										},
									},
								},
								[
									[
										"core/group",
										{
											style: { spacing: { blockGap: "16px" } },
											layout: {
												type: "flex",
												flexWrap: "nowrap",
												verticalAlignment: "top",
											},
										},
										[
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-17-2.png`,
													width: "26px",
													sizeSlug: "full",
													linkDestination: "none",
													style: { spacing: { margin: { top: "2px" } } },
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
															content: "Email Address",
															style: {
																spacing: {
																	margin: { top: "0px", bottom: "-2px" },
																},
															},
														},
													],
													[
														"core/paragraph",
														{
															content: "sample@example.com",
															style: {
																typography: {
																	fontSize: "18px",
																	fontStyle: "normal",
																	fontWeight: "600",
																},
																elements: {
																	link: { color: { text: "#fffffe" } },
																},
																color: { text: "#fffffe" },
																spacing: {
																	margin: { top: "4px", bottom: "0px" },
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
									style: {
										border: {
											left: {
												color: "#ffffff1c",
												style: "solid",
												width: "1px",
											},
										},
										spacing: {
											padding: { left: "44px", top: "26px", bottom: "26px" },
										},
									},
								},
								[
									[
										"core/group",
										{
											style: { spacing: { blockGap: "16px" } },
											layout: {
												type: "flex",
												flexWrap: "nowrap",
												verticalAlignment: "top",
											},
										},
										[
											[
												"core/image",
												{
													url: `${cthfAssets.img}footer-17-3.png`,
													width: "26px",
													sizeSlug: "full",
													linkDestination: "none",
													style: { spacing: { margin: { top: "2px" } } },
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
																spacing: {
																	margin: { top: "0px", bottom: "-2px" },
																},
															},
														},
													],
													[
														"core/paragraph",
														{
															content: "1234 Creative Avenue Los Angeles",
															style: {
																typography: {
																	fontSize: "18px",
																	fontStyle: "normal",
																	fontWeight: "600",
																},
																elements: {
																	link: { color: { text: "#fffffe" } },
																},
																color: { text: "#fffffe" },
																spacing: {
																	margin: { top: "4px", bottom: "0px" },
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
						],
					],
					[
						"core/columns",
						{
							style: {
								spacing: {
									margin: { top: "0", bottom: "0" },
									blockGap: { top: "44px", left: "26px" },
								},
							},
						},
						[
							[
								"core/column",
								{ width: "30%", style: { spacing: { blockGap: "0" } } },
								[
									["core/site-logo"],
									[
										"core/social-links",
										{
											customIconColor: "#fffffe",
											iconColorValue: "#fffffe",
											customIconBackgroundColor: "#262626",
											iconBackgroundColorValue: "#262626",
											className: "cthf__pro-footer-17",
											style: {
												spacing: {
													blockGap: { top: "10px", left: "10px" },
													margin: { top: "30px" },
												},
											},
											layout: { type: "flex", justifyContent: "left" },
										},
										[
											["core/social-link", { url: "#", service: "facebook" }],
											["core/social-link", { url: "#", service: "x" }],
											["core/social-link", { url: "#", service: "instagram" }],
											["core/social-link", { url: "#", service: "linkedin" }],
										],
									],
								],
							],
							[
								"core/column",
								{
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
								[
									[
										"core/paragraph",
										{
											content: `<a href="#">Pricing</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Salutations</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Meet Our Team</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Features</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Customer Reviews</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Pages</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Blogs</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
								],
							],
							[
								"core/column",
								{
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
								[
									[
										"core/paragraph",
										{
											content: `<a href="#">Home</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">About Us</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Our Services</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Contact Us</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Careers</a>`,
											style: {
												spacing: { margin: { top: "0px", bottom: "16px" } },
											},
										},
									],
								],
							],
							[
								"core/column",
								{ width: "30%", style: { spacing: { blockGap: "0" } } },
								[
									[
										"core/heading",
										{
											content: "Need Any Help?",
											level: 4,
											style: {
												elements: { link: { color: { text: "#fffffe" } } },
												color: { text: "#fffffe" },
												typography: {
													fontSize: "18px",
													lineHeight: "1.2",
													fontStyle: "normal",
													fontWeight: "600",
												},
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam`,
											style: {
												spacing: { margin: { top: "26px", bottom: "30px" } },
												typography: { fontSize: "15px" },
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
													fontWeight: "600",
													textDecoration: "none",
												},
											},
										},
										[
											[
												"core/button",
												{
													text: "Contact us",
													style: {
														color: { background: "#ac0cff", text: "#fffffe" },
														elements: { link: { color: { text: "#fffffe" } } },
														border: { radius: "100px" },
														spacing: {
															padding: {
																left: "44px",
																right: "44px",
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
								top: "20px",
								bottom: "20px",
							},
							margin: { top: "40px", bottom: "0" },
							blockGap: "0",
						},
						border: {
							top: { color: "#ffffff33", style: "solid", width: "1px" },
						},
						typography: { fontSize: "14px" },
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
								"core/paragraph",
								{
									content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color"><strong>CozyThemes</strong></mark>`,
									align: "center",
									style: {
										color: { text: "#d9d9d9" },
										elements: { link: { color: { text: "#d9d9d9" } } },
									},
								},
							],
							[
								"core/navigation",
								{
									customTextColor: "#d9d9d9",
									overlayMenu: "never",
									style: { typography: { fontSize: "15px" } },
								},
							],
						],
					],
				],
			],
		],
	],
];

export const proFooterPattern18 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#13151f", text: "#fffffe" },
				elements: { link: { color: { text: "#fffffe" } } },
				spacing: {
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
				},
				typography: { fontSize: "14px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{ style: { spacing: { blockGap: { top: "44px", left: "26px" } } } },
				[
					[
						"core/column",
						{
							layout: {
								type: "constrained",
								contentSize: "625px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: `Get In Touch sample@example.com`,
									level: 4,
									style: {
										elements: { link: { color: { text: "#fffffe" } } },
										color: { text: "#fffffe" },
										typography: { fontSize: "44px" },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							layout: {
								type: "constrained",
								contentSize: "223px",
								justifyContent: "right",
							},
						},
						[
							[
								"core/paragraph",
								{
									content: "Visit the Office",
									style: {
										typography: {
											textTransform: "uppercase",
											fontStyle: "normal",
											fontWeight: "500",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: "1234 Creative Avenue Los Angeles, CA 90001USA",
									style: {
										typography: {
											fontSize: "16px",
											fontStyle: "normal",
											fontWeight: "500",
											lineHeight: "1.7",
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
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
						spacing: {
							padding: { top: "40px", bottom: "26px" },
							margin: { top: "60px" },
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
							content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color">CozyThemes</mark>`,
						},
					],
					[
						"core/buttons",
						{
							className: "cthf__pro-footer-18",
							style: {
								typography: {
									fontSize: "15px",
									fontStyle: "normal",
									fontWeight: "500",
									textDecoration: "none",
								},
							},
							layout: { type: "flex", flexWrap: "nowrap" },
						},
						[
							[
								"core/button",
								{
									text: "Contact Us",
									style: {
										color: { background: "#fffffe00", text: "#fffffe" },
										elements: { link: { color: { text: "#fffffe" } } },
									},
								},
							],
							[
								"core/button",
								{
									text: "Behance",
									style: {
										color: { background: "#fffffe00", text: "#fffffe" },
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
];

export const proFooterPattern19 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#040b2e", text: "#f2f2f2" },
				elements: { link: { color: { text: "#f2f2f2" } } },
				spacing: {
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
				},
				typography: { fontSize: "14px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/columns",
				{ style: { spacing: { blockGap: { top: "44px", left: "26px" } } } },
				[
					[
						"core/column",
						{
							width: "70%",
							layout: {
								type: "constrained",
								contentSize: "580px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/group",
								{
									style: { spacing: { blockGap: "26px" } },
									layout: {
										type: "flex",
										flexWrap: "wrap",
										verticalAlignment: "top",
									},
								},
								[
									[
										"core/site-logo",
										{
											style: {
												spacing: { margin: { top: "6px", bottom: "0px" } },
											},
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
													content: `1234 Creative Avenue Los Angeles, CA 90001USA`,
													style: {
														typography: {
															fontSize: "18px",
															fontStyle: "normal",
															fontWeight: "500",
															lineHeight: "1.7",
														},
														elements: { link: { color: { text: "#f2f2f2" } } },
														color: { text: "#f2f2f2" },
														spacing: { margin: { top: "0px", bottom: "26px" } },
													},
												},
											],
											[
												"core/paragraph",
												{
													content: `<a href="#">+1(000) 123456</a>`,
													style: {
														typography: {
															fontStyle: "normal",
															fontWeight: "500",
														},
														spacing: { margin: { top: "0px", bottom: "16px" } },
													},
												},
											],
											[
												"core/paragraph",
												{
													content: "sample@example.com",
													style: {
														typography: {
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
						],
					],
					[
						"core/column",
						{
							style: {
								elements: { link: { color: { text: "#d9d9d9" } } },
								color: { text: "#d9d9d9" },
								spacing: { blockGap: "0" },
							},
							layout: { type: "default" },
						},
						[
							[
								"core/paragraph",
								{
									content: `<a href="#">About Us</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Our Services</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Custom Reviews</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Features</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Meet Our Team</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Blogs</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Career</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							style: {
								elements: { link: { color: { text: "#d9d9d9" } } },
								color: { text: "#d9d9d9" },
								spacing: { blockGap: "0" },
							},
							layout: { type: "default" },
						},
						[
							[
								"core/paragraph",
								{
									content: `<a href="#">Facebook</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Twitter</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Whatsapp</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Instagram</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Linkedin</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Youtube</a>`,
									style: {
										spacing: { margin: { top: "0px", bottom: "16px" } },
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
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
						spacing: {
							padding: { top: "40px", bottom: "26px" },
							margin: { top: "60px" },
						},
					},
					layout: { type: "constrained" },
				},
				[
					[
						"core/paragraph",
						{
							content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color">CozyThemes</mark>`,
							align: "right",
						},
					],
				],
			],
		],
	],
];

export const proFooterPattern20 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#260338", text: "#f2f2f2" },
				elements: { link: { color: { text: "#f2f2f2" } } },
				spacing: {
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
				},
				typography: { fontSize: "14px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/social-links",
				{
					customIconColor: "#fffffe",
					iconColorValue: "#fffffe",
					customIconBackgroundColor: "#fffffe00",
					iconBackgroundColorValue: "#fffffe00",
					showLabels: true,
					style: {
						spacing: {
							blockGap: { top: "16px", left: "16px" },
							margin: { top: "0px", bottom: "60px" },
						},
					},
				},
				[
					["core/social-link", { url: "#", service: "youtube" }],
					["core/social-link", { url: "#", service: "spotify" }],
					["core/social-link", { url: "#", service: "feed" }],
				],
			],
			[
				"core/columns",
				{ style: { spacing: { blockGap: { top: "44px", left: "26px" } } } },
				[
					[
						"core/column",
						{
							width: "70%",
							style: { spacing: { blockGap: "0" } },
							layout: {
								type: "constrained",
								contentSize: "580px",
								justifyContent: "left",
							},
						},
						[
							[
								"core/heading",
								{
									content: "About the Company",
									level: 4,
									style: {
										elements: { link: { color: { text: "#f2f2f2" } } },
										color: { text: "#f2f2f2" },
										typography: {
											fontSize: "20px",
											lineHeight: "1.3",
											fontStyle: "normal",
											fontWeight: "600",
											textTransform: "uppercase",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
									style: {
										typography: {
											fontStyle: "normal",
											fontWeight: "500",
											lineHeight: "1.7",
										},
										spacing: { margin: { top: "30px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
									style: {
										typography: {
											fontStyle: "normal",
											fontWeight: "500",
											lineHeight: "1.7",
										},
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{
							width: "",
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
										elements: { link: { color: { text: "#f2f2f2" } } },
										color: { text: "#f2f2f2" },
										typography: {
											fontSize: "20px",
											lineHeight: "1.3",
											fontStyle: "normal",
											fontWeight: "600",
											textTransform: "uppercase",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
									style: {
										typography: { fontStyle: "normal", fontWeight: "500" },
										spacing: { margin: { top: "30px", bottom: "26px" } },
									},
								},
							],
							[
								"core/buttons",
								{
									style: {
										typography: {
											fontSize: "15px",
											textDecoration: "none",
											fontStyle: "normal",
											fontWeight: "600",
											textTransform: "uppercase",
										},
									},
								},
								[
									[
										"core/button",
										{
											text: "Subscribe",
											style: {
												color: { background: "#ac0cff", text: "#fffffe" },
												elements: { link: { color: { text: "#fffffe" } } },
												border: { radius: "12px" },
												spacing: {
													padding: {
														left: "36px",
														right: "36px",
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
				],
			],
			[
				"core/group",
				{
					style: {
						elements: { link: { color: { text: "#d9d9d9" } } },
						color: { text: "#d9d9d9" },
						spacing: {
							padding: { top: "40px", bottom: "30px" },
							margin: { top: "60px" },
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
						"core/group",
						{
							style: {
								spacing: {
									blockGap: "40px",
									margin: { top: "0", bottom: "0" },
								},
							},
							layout: { type: "flex", flexWrap: "wrap" },
						},
						[
							["core/site-logo"],
							[
								"core/group",
								{
									style: {
										spacing: { blockGap: "20px" },
										typography: {
											fontSize: "15px",
											fontStyle: "normal",
											fontWeight: "500",
										},
									},
									layout: { type: "flex", flexWrap: "wrap" },
								},
								[
									["core/paragraph", { content: `<a href="#">Home</a>` }],
									["core/paragraph", { content: `<a href="#">About</a>` }],
									["core/paragraph", { content: `<a href="#">Careers</a>` }],
								],
							],
						],
					],
					[
						"core/paragraph",
						{
							content: `Proudly powered by WordPress | Theme by <mark style="background-color:rgba(0, 0, 0, 0);color:#f4f4f4" class="has-inline-color">CozyThemes</mark>`,
						},
					],
					[
						"core/social-links",
						{
							customIconColor: "#fffffe",
							iconColorValue: "#fffffe",
							customIconBackgroundColor: "#fffffe00",
							iconBackgroundColorValue: "#fffffe00",
							style: { spacing: { blockGap: { top: "10px", left: "0px" } } },
						},
						[
							["core/social-link", { url: "#", service: "facebook" }],
							["core/social-link", { url: "#", service: "x" }],
							["core/social-link", { url: "#", service: "instagram" }],
							["core/social-link", { url: "#", service: "linkedin" }],
						],
					],
				],
			],
		],
	],
];

export const proFooterPattern21 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#f0f2ff", text: "#040c36" },
				elements: { link: { color: { text: "#040c36" } } },
				spacing: {
					padding: { top: "80px", bottom: "0px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
				},
				typography: { fontSize: "14px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					style: { spacing: { blockGap: "0" } },
					layout: { type: "constrained", contentSize: "698px" },
				},
				[
					[
						"core/heading",
						{
							content: `Subscribe to our Newsletter`,
							textAlign: "center",
							level: 3,
							style: {
								elements: { link: { color: { text: "#040c36" } } },
								color: { text: "#040c36" },
								typography: {
									fontSize: "54px",
									lineHeight: "1.3",
									fontStyle: "normal",
									fontWeight: "600",
								},
							},
						},
					],
					[
						"core/paragraph",
						{
							content:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
							align: "center",
							style: {
								typography: { fontStyle: "normal", fontWeight: "300" },
								spacing: { margin: { top: "16px", bottom: "26px" } },
							},
						},
					],
					[
						"core/paragraph",
						{
							content: `Please add a 'Contact Form 7' shortcode or any equivalent.`,
							align: "center",
							style: { typography: { fontStyle: "normal", fontWeight: "400" } },
						},
					],
					[
						"core/group",
						{ layout: { type: "constrained" } },
						[["core/shortcode"]],
					],
				],
			],
			[
				"core/columns",
				{
					verticalAlignment: null,
					style: {
						spacing: {
							padding: { top: "26px", bottom: "26px" },
							margin: { top: "80px" },
						},
					},
				},
				[
					[
						"core/column",
						{
							verticalAlignment: "center",
							width: "80%",
							style: { spacing: { blockGap: "0" } },
						},
						[
							[
								"core/group",
								{
									style: {
										spacing: { blockGap: "20px" },
										typography: {
											fontSize: "15px",
											fontStyle: "normal",
											fontWeight: "500",
										},
									},
									layout: { type: "flex", flexWrap: "wrap" },
								},
								[
									["core/paragraph", { content: `<a href="#">Home</a>` }],
									["core/paragraph", { content: `<a href="#">About</a>` }],
									["core/paragraph", { content: `<a href="#">Careers</a>` }],
								],
							],
							[
								"core/paragraph",
								{
									content: `Lorem ipsum dolor sit amet`,
									align: "left",
									style: {
										typography: { fontStyle: "normal", fontWeight: "400" },
										spacing: { margin: { top: "16px", bottom: "0px" } },
									},
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
									customIconColor: "#fffffe",
									iconColorValue: "#fffffe",
									customIconBackgroundColor: "#3450e6",
									iconBackgroundColorValue: "#3450e6",
									className: "cthf__pro-footer-12",
									style: {
										spacing: {
											blockGap: { top: "10px", left: "10px" },
											margin: { top: "0px", bottom: "16px" },
										},
									},
									layout: { type: "flex", justifyContent: "right" },
								},
								[
									["core/social-link", { url: "#", service: "facebook" }],
									["core/social-link", { url: "#", service: "x" }],
									["core/social-link", { url: "#", service: "instagram" }],
									["core/social-link", { url: "#", service: "linkedin" }],
								],
							],
							[
								"core/paragraph",
								{
									content: `Proudly powered by CozyThemes`,
									align: "right",
									style: {
										elements: { link: { color: { text: "#434343" } } },
										color: { text: "#434343" },
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

export const proFooterPattern22 = [
	[
		"core/group",
		{
			style: {
				color: { background: "#fffffe", text: "#434343" },
				elements: { link: { color: { text: "#434343" } } },
				spacing: {
					padding: { top: "80px", bottom: "60px", left: "26px", right: "26px" },
					margin: { top: "0", bottom: "0" },
				},
				typography: { fontSize: "15px" },
			},
			layout: { type: "constrained", contentSize: "1180px" },
		},
		[
			[
				"core/group",
				{
					style: {
						spacing: { blockGap: "0", padding: { bottom: "20px" } },
						border: {
							bottom: { color: "#040c363b", style: "solid", width: "1px" },
						},
					},
					layout: {
						type: "constrained",
						contentSize: "623px",
						justifyContent: "left",
					},
				},
				[
					[
						"core/heading",
						{
							content: "Ways to Connect With Us",
							textAlign: "left",
							level: 3,
							style: {
								elements: { link: { color: { text: "#040c36" } } },
								color: { text: "#040c36" },
								typography: {
									fontSize: "44px",
									lineHeight: "1.3",
									fontStyle: "normal",
									fontWeight: "500",
								},
							},
						},
					],
				],
			],
			[
				"core/columns",
				{
					verticalAlignment: null,
					style: {
						spacing: {
							padding: { top: "26px", bottom: "26px" },
							margin: { top: "40px" },
							blockGap: { top: "44px", left: "26px" },
						},
					},
				},
				[
					[
						"core/column",
						{
							verticalAlignment: "top",
							width: "60%",
							style: { spacing: { blockGap: "0" } },
						},
						[
							[
								"core/heading",
								{
									content: "Social Media",
									level: 4,
									style: {
										color: { text: "#040c36" },
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontSize: "18px",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Facebook</a>`,
									align: "left",
									style: {
										typography: { fontStyle: "normal", fontWeight: "400" },
										spacing: { margin: { top: "26px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Instagram</a>`,
									align: "left",
									style: {
										typography: { fontStyle: "normal", fontWeight: "400" },
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Twitter</a>`,
									align: "left",
									style: {
										typography: { fontStyle: "normal", fontWeight: "400" },
										spacing: { margin: { top: "0px", bottom: "16px" } },
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">Linkedin</a>`,
									align: "left",
									style: {
										typography: { fontStyle: "normal", fontWeight: "400" },
										spacing: { margin: { top: "0px", bottom: "44px" } },
									},
								},
							],
							[
								"core/heading",
								{
									content: "Email",
									level: 4,
									style: {
										color: { text: "#040c36" },
										elements: { link: { color: { text: "#040c36" } } },
										typography: {
											fontSize: "18px",
											fontStyle: "normal",
											fontWeight: "600",
										},
									},
								},
							],
							[
								"core/paragraph",
								{
									content: `<a href="#">sample@example.com</a>`,
									align: "left",
									style: {
										typography: { fontStyle: "normal", fontWeight: "400" },
										spacing: { margin: { top: "26px", bottom: "0px" } },
									},
								},
							],
						],
					],
					[
						"core/column",
						{ verticalAlignment: "top", style: { spacing: { blockGap: "0" } } },
						[
							[
								"core/columns",
								{
									style: {
										spacing: { blockGap: { top: "26px", left: "26px" } },
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
													content: "New York",
													level: 4,
													style: {
														elements: { link: { color: { text: "#040c36" } } },
														color: { text: "#040c36" },
														typography: {
															fontSize: "18px",
															fontStyle: "normal",
															fontWeight: "600",
														},
													},
												},
											],
											[
												"core/paragraph",
												{
													content: `5678 Artistic Boulevard, New York, NY 10001, USA`,
													style: {
														spacing: { margin: { top: "26px", bottom: "0px" } },
													},
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
													content: "Portugal",
													level: 4,
													style: {
														elements: { link: { color: { text: "#040c36" } } },
														color: { text: "#040c36" },
														typography: {
															fontSize: "18px",
															fontStyle: "normal",
															fontWeight: "600",
														},
													},
												},
											],
											[
												"core/paragraph",
												{
													content: `2345 Innovation Road, Lisbon, 1100-001, Portugal`,
													style: {
														spacing: { margin: { top: "26px", bottom: "0px" } },
													},
												},
											],
										],
									],
								],
							],
							[
								"core/columns",
								{
									style: {
										spacing: {
											margin: { top: "36px" },
											blockGap: { top: "26px", left: "26px" },
										},
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
													content: "Canada",
													level: 4,
													style: {
														elements: { link: { color: { text: "#040c36" } } },
														color: { text: "#040c36" },
														typography: {
															fontSize: "18px",
															fontStyle: "normal",
															fontWeight: "600",
														},
													},
												},
											],
											[
												"core/paragraph",
												{
													content: `8765 Maple Street, Toronto, ON M5A 1A1, Canada`,
													style: {
														spacing: { margin: { top: "26px", bottom: "0px" } },
													},
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
													content: "Switzerland",
													level: 4,
													style: {
														elements: { link: { color: { text: "#040c36" } } },
														color: { text: "#040c36" },
														typography: {
															fontSize: "18px",
															fontStyle: "normal",
															fontWeight: "600",
														},
													},
												},
											],
											[
												"core/paragraph",
												{
													content: `1357 Design Avenue, Zurich, 8001, Switzerland`,
													style: {
														spacing: { margin: { top: "26px", bottom: "0px" } },
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
		],
	],
];
