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
		{ layout: { type: "constrained", contentSize: "100%" } },
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							padding: {
								top: "20px",
								bottom: "20px",
								left: "26px",
								right: "26px",
							},
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
		{ layout: { type: "constrained", contentSize: "100%" } },
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							padding: {
								top: "20px",
								bottom: "20px",
								left: "26px",
								right: "26px",
							},
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
													padding: {
														right: "0",
														left: "0",
														top: "0",
														bottom: "0",
													},
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
																elements: {
																	link: { color: { text: "#333333" } },
																},
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
																elements: {
																	link: { color: { text: "#333333" } },
																},
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
													padding: {
														right: "0",
														left: "0",
														top: "0",
														bottom: "0",
													},
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
																elements: {
																	link: { color: { text: "#333333" } },
																},
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
																elements: {
																	link: { color: { text: "#333333" } },
																},
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

/* Pro Patterns */
export const proHeaderPattern = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								top: "12px",
								bottom: "0px",
								left: "26px",
								right: "26px",
							},
						},
						color: { background: "#fffffe" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: {
								spacing: {
									margin: { top: "0", bottom: "0" },
									padding: { bottom: "14px" },
								},
								border: {
									bottom: { color: "#03082124", style: "solid", width: "1px" },
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
									content: `<strong><mark style="background-color:rgba(0, 0, 0, 0);color:#030821" class="has-inline-color">Biggest Sale Ever!</mark></strong> 70% Off Storewide – Hurry In!`,
									style: {
										color: { text: "#44464e" },
										elements: { link: { color: { text: "#44464e" } } },
										typography: { fontSize: "14px" },
									},
								},
							],
							[
								"core/group",
								{
									style: { spacing: { blockGap: "16px" } },
									layout: { type: "flex", flexWrap: "wrap" },
								},
								[
									[
										"core/social-links",
										{
											customIconColor: "#030821",
											iconColorValue: "#030821",
											customIconBackgroundColor: "#fffffe00",
											iconBackgroundColorValue: "#fffffe00",
											size: "has-normal-icon-size",
											className: "cthf__has-border",
											style: {
												spacing: { blockGap: { top: "6px", left: "6px" } },
											},
										},
										[
											["core/social-link", { url: "#", service: "facebook" }],
											["core/social-link", { url: "#", service: "x" }],
											["core/social-link", { url: "#", service: "instagram" }],
											["core/social-link", { url: "#", service: "youtube" }],
											["core/social-link", { url: "#", service: "whatsapp" }],
											["core/social-link", { url: "#", service: "telegram" }],
										],
									],
									[
										"core/buttons",
										{
											style: {
												border: { left: { color: "#03082142", width: "3px" } },
												spacing: { padding: { left: "19px" } },
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
													text: "Subscribe",
													style: {
														color: { background: "#030821", text: "#fffffe" },
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
					margin: { top: "0", bottom: "0" },
					padding: { right: "26px", left: "26px", top: "12px", bottom: "26px" },
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
					[
						"core/group",
						{
							style: { spacing: { blockGap: "26px" } },
							layout: { type: "flex", flexWrap: "nowrap" },
						},
						[
							["core/site-logo", { width: 100 }],
							[
								"core/navigation",
								{
									customTextColor: "#44464e",
									style: { typography: { fontSize: "16px" } },
								},
							],
						],
					],
					[
						"core/search",
						{
							label: "Search",
							showLabel: false,
							buttonText: "Search",
							buttonPosition: "button-only",
							buttonUseIcon: true,
							isSearchFieldHidden: true,
							style: {
								spacing: {
									margin: { top: "0", bottom: "0", left: "0", right: "0" },
								},
								color: { background: "#fffffe00", text: "#030821" },
								elements: { link: { color: { text: "#030821" } } },
							},
						},
					],
				],
			],
		],
	],
];

export const proHeaderPattern2 = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								top: "12px",
								bottom: "0px",
								left: "26px",
								right: "26px",
							},
						},
						color: { background: "#fffffe" },
					},
					layout: { type: "constrained", contentSize: "1180px" },
				},
				[
					[
						"core/group",
						{
							style: {
								spacing: {
									margin: { top: "0", bottom: "0" },
									padding: { bottom: "14px" },
								},
								border: {
									bottom: { color: "#03082124", style: "solid", width: "1px" },
								},
							},
							layout: {
								type: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
							},
						},
						[
							["core/site-logo", { width: 100 }],
							[
								"core/search",
								{
									label: "Search",
									showLabel: false,
									placeholder: "Search for Products...",
									width: 100,
									widthUnit: "%",
									buttonText: "Search",
									buttonPosition: "button-inside",
									buttonUseIcon: true,
									className: "cthf-pro__layout-1",
									style: {
										spacing: {
											margin: { top: "0", bottom: "0", left: "0", right: "0" },
										},
										color: { text: "#030821", background: "#fffffe00" },
										elements: { link: { color: { text: "#030821" } } },
										border: { radius: "8px" },
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
											text: "Subscribe",
											style: {
												color: { background: "#ae0bff", text: "#fffffe" },
												elements: { link: { color: { text: "#fffffe" } } },
												border: { radius: "8px" },
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
				],
			],
		],
	],
	[
		"core/group",
		{
			style: {
				spacing: {
					margin: { top: "0", bottom: "0" },
					padding: { right: "26px", left: "26px", top: "12px", bottom: "26px" },
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
					[
						"core/navigation",
						{
							customTextColor: "#44464e",
							style: { typography: { fontSize: "16px" } },
						},
					],
					[
						"core/social-links",
						{
							customIconColor: "#fffffe",
							iconColorValue: "#fffffe",
							customIconBackgroundColor: "#030821",
							iconBackgroundColorValue: "#030821",
							size: "has-normal-icon-size",
							className: "cthf-pro__layout-1",
							style: { spacing: { blockGap: { top: "6px", left: "6px" } } },
						},
						[
							["core/social-link", { url: "#", service: "facebook" }],
							["core/social-link", { url: "#", service: "x" }],
							["core/social-link", { url: "#", service: "instagram" }],
							["core/social-link", { url: "#", service: "youtube" }],
							["core/social-link", { url: "#", service: "whatsapp" }],
							["core/social-link", { url: "#", service: "telegram" }],
						],
					],
				],
			],
		],
	],
];

export const proHeaderPattern3 = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						color: { background: "#030821", text: "#fffffe" },
						elements: { link: { color: { text: "#fffffe" } } },
						spacing: {
							blockGap: "0",
							margin: { top: "0", bottom: "0" },
							padding: {
								right: "26px",
								left: "26px",
								top: "10px",
								bottom: "10px",
							},
						},
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
									style: {
										spacing: { blockGap: "16px" },
										typography: { fontSize: "14px" },
									},
									layout: { type: "flex", flexWrap: "wrap" },
								},
								[
									["core/paragraph", { content: `<a href="#">News World</a>` }],
									[
										"core/paragraph",
										{
											content: `<a href="#">Latest News</a>`,
											style: {
												border: {
													left: {
														color: "#ffffff7a",
														style: "solid",
														width: "1px",
													},
												},
												spacing: { padding: { left: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Contact</a>`,
											style: {
												border: {
													left: {
														color: "#ffffff7a",
														style: "solid",
														width: "1px",
													},
												},
												spacing: { padding: { left: "16px" } },
											},
										},
									],
									[
										"core/paragraph",
										{
											content: `<a href="#">Buy Now</a>`,
											style: {
												border: {
													left: {
														color: "#ffffff7a",
														style: "solid",
														width: "1px",
													},
												},
												spacing: { padding: { left: "16px" } },
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
									size: "has-normal-icon-size",
									style: {
										spacing: {
											blockGap: { top: "4px", left: "4px" },
											margin: { top: "0", bottom: "0", left: "0", right: "0" },
										},
									},
								},
								[
									["core/social-link", { url: "#", service: "facebook" }],
									["core/social-link", { url: "#", service: "x" }],
									["core/social-link", { url: "#", service: "linkedin" }],
									["core/social-link", { url: "#", service: "pinterest" }],
									["core/social-link", { url: "#", service: "telegram" }],
									["core/social-link", { url: "#", service: "instagram" }],
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
				color: { background: "#1a1e30", text: "#fffffe" },
				elements: { link: { color: { text: "#fffffe" } } },
				spacing: {
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { right: "26px", left: "26px", top: "34px", bottom: "34px" },
				},
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
							style: { spacing: { blockGap: "26px" } },
							layout: { type: "flex", flexWrap: "nowrap" },
						},
						[
							["core/site-logo"],
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
						],
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

export const proHeaderPattern4 = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							margin: { top: "0", bottom: "0" },
							blockGap: "0",
							padding: {
								top: "14px",
								bottom: "14px",
								left: "26px",
								right: "26px",
							},
						},
						color: {
							gradient:
								"linear-gradient(135deg,rgb(52,80,230) 0%,rgb(174,11,255) 100%)",
						},
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
								"core/social-links",
								{
									customIconColor: "#fffffe",
									iconColorValue: "#fffffe",
									customIconBackgroundColor: "#fffffe1f",
									iconBackgroundColorValue: "#fffffe1f",
									size: "has-normal-icon-size",
									style: { spacing: { blockGap: { top: "6px", left: "6px" } } },
								},
								[
									["core/social-link", { url: "#", service: "facebook" }],
									["core/social-link", { url: "#", service: "x" }],
									["core/social-link", { url: "#", service: "instagram" }],
									["core/social-link", { url: "#", service: "youtube" }],
									["core/social-link", { url: "#", service: "whatsapp" }],
									["core/social-link", { url: "#", service: "telegram" }],
								],
							],
							["core/site-logo"],
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
								},
								[
									[
										"core/button",
										{
											text: "Subscribe",
											style: {
												color: { background: "#ffffff40", text: "#fffffe" },
												elements: { link: { color: { text: "#fffffe" } } },
												spacing: {
													padding: {
														left: "36px",
														right: "36px",
														top: "12px",
														bottom: "12px",
													},
												},
												border: { radius: "8px" },
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
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { right: "26px", left: "26px", top: "10px", bottom: "10px" },
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
						verticalAlignment: "center",
					},
				},
				[
					[
						"core/navigation",
						{
							customTextColor: "#030821",
							overlayMenu: "never",
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

export const proHeaderPattern5 = [
	[
		"cthf-blocks/header-top-bar",
		{},
		[
			[
				"core/group",
				{
					style: {
						spacing: {
							margin: { top: "0", bottom: "0" },
							padding: {
								top: "0px",
								bottom: "0px",
								left: "26px",
								right: "26px",
							},
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
							style: {
								spacing: {
									margin: { top: "0", bottom: "0" },
									padding: { right: "0", left: "0", top: "0", bottom: "0" },
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
										color: { text: "#4b4b4b" },
										elements: { link: { color: { text: "#4b4b4b" } } },
										typography: { fontSize: "14px" },
										spacing: { blockGap: "16px" },
									},
									layout: { type: "flex", flexWrap: "wrap" },
								},
								[
									[
										"core/post-date",
										{ format: "l, j F Y", className: "cthf-date__has-icon" },
									],
									[
										"core/group",
										{
											style: { spacing: { blockGap: "10px" } },
											layout: { type: "flex", flexWrap: "wrap" },
										},
										[
											[
												"core/paragraph",
												{
													content: "Breaking News",
													style: {
														color: { background: "#3450e6", text: "#fffffe" },
														elements: { link: { color: { text: "#fffffe" } } },
														typography: {
															fontSize: "16px",
															fontStyle: "normal",
															fontWeight: "500",
														},
														spacing: {
															padding: {
																top: "10px",
																bottom: "10px",
																left: "16px",
																right: "16px",
															},
														},
													},
												},
											],
											[
												"core/paragraph",
												{
													content:
														"Indonesia says located black box recorders from crashed plane",
												},
											],
										],
									],
								],
							],
							[
								"core/social-links",
								{
									size: "has-small-icon-size",
									style: {
										spacing: { blockGap: { top: "8px", left: "8px" } },
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
					blockGap: "0",
					margin: { top: "0", bottom: "0" },
					padding: { right: "26px", left: "26px", top: "16px", bottom: "0px" },
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
					["core/site-logo"],
					[
						"core/image",
						{
							url: `${cthfAssets.img}header-pro-5-1.png`,
							lightbox: { enabled: false },
							sizeSlug: "full",
							linkDestination: "custom",
						},
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
								top: "0px",
								bottom: "0px",
							},
							margin: { top: "16px" },
						},
						color: { background: "#030821" },
					},
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
							customOverlayTextColor: "#030821",
							className: "cthf-pro__has-current-menu-style",
							style: {
								typography: {
									fontSize: "16px",
									fontStyle: "normal",
									fontWeight: "600",
								},
							},
						},
						[["core/home-link", { label: "Home" }]],
					],
					[
						"core/search",
						{
							label: "Search",
							showLabel: false,
							buttonText: "Search",
							buttonPosition: "button-inside",
							buttonUseIcon: true,
							className: "cthf-pro__layout-2",
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
];

export const proHeaderPattern6 = [];
