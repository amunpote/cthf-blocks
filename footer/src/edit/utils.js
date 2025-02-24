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

export const freeFooterPattern5 = [];
