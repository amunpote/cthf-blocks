<?php
// This file is generated. Do not modify it manually.
return array(
	'business-hours' => array(
		'$schema'      => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion'   => 2,
		'name'         => 'cthf-blocks/business-hours',
		'title'        => 'Business Hours',
		'description'  => 'Displays your business hours in a clear, concise format to show when you\'re available.',
		'category'     => 'rootblox-footer',
		'supports'     => array(
			'html'                 => false,
			'color'                => array(
				'background' => true,
				'gradients'  => true,
				'text'       => true,
			),
			'spacing'              => array(
				'padding'                       => true,
				'margin'                        => array(
					'top',
					'bottom',
				),
				'__experimentalDefaultControls' => array(
					'padding' => true,
				),
			),
			'__experimentalBorder' => array(
				'color'                         => true,
				'radius'                        => true,
				'style'                         => true,
				'width'                         => true,
				'__experimentalDefaultControls' => array(
					'color'  => true,
					'radius' => true,
					'style'  => true,
					'width'  => true,
				),
			),
		),
		'attributes'   => array(
			'cover'           => array(
				'type'    => 'string',
				'default' => '',
			),
			'clientId'        => array(
				'type'    => 'string',
				'default' => '',
			),
			'timeFormat'      => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'scheduling'      => array(
				'type'    => 'object',
				'default' => array(
					'type'        => 'default',
					'startingDay' => 'monday',
					'abbr'        => true,
					'customAbbr'  => false,
					'abbrLength'  => 3,
				),
			),
			'weekdays'        => array(
				'type'    => 'array',
				'default' => array(
					array(
						'key'             => 'monday',
						'opened'          => true,
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '12',
							'minutes' => '00',
						),
					),
					array(
						'key'             => 'tuesday',
						'opened'          => true,
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '12',
							'minutes' => '00',
						),
					),
					array(
						'key'             => 'wednesday',
						'opened'          => true,
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '12',
							'minutes' => '00',
						),
					),
					array(
						'key'             => 'thursday',
						'opened'          => true,
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '12',
							'minutes' => '00',
						),
					),
					array(
						'key'             => 'friday',
						'opened'          => true,
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '12',
							'minutes' => '00',
						),
					),
					array(
						'key'             => 'saturday',
						'opened'          => false,
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '12',
							'minutes' => '00',
						),
					),
					array(
						'key'             => 'sunday',
						'opened'          => false,
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '12',
							'minutes' => '00',
						),
					),
				),
			),
			'groupedWeekdays' => array(
				'type'    => 'array',
				'default' => array(
					array(
						'opened'          => true,
						'start'           => 'monday',
						'end'             => 'friday',
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '00',
							'minutes' => '00',
						),
					),
					array(
						'start'           => 'saturday',
						'end'             => 'sunday',
						'opened'          => false,
						'alwaysOpen'      => false,
						'alwaysOpenLabel' => 'Open 24 Hours',
						'openTime'        => array(
							'hours'   => '00',
							'minutes' => '00',
						),
						'closeTime'       => array(
							'hours'   => '00',
							'minutes' => '00',
						),
					),
				),
			),
			'timeSeparator'   => array(
				'type'    => 'string',
				'default' => '—',
			),
			'groupSeparator'  => array(
				'type'    => 'string',
				'default' => 'to',
			),
			'notification'    => array(
				'type'    => 'object',
				'default' => array(
					'enabled'         => true,
					'open'            => 'We\'re open!',
					'close'           => 'We\'re closed for the day!',
					'addTimer'        => false,
					'timeDiff'        => array(
						'hours'   => '00',
						'minutes' => '30',
					),
					'nearingClose'    => 'We\'re closing soon!',
					'nearingOpen'     => 'We\'re opening soon!',
					'timerLabel'      => array(
						'h' => 'h',
						'm' => 'm',
						's' => 's',
					),
					'padding'         => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
					),
					'margin'          => array(
						'top'    => '26px',
						'bottom' => '',
					),
					'border'          => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'radius'          => '',
					'font'            => array(
						'size'   => '16px',
						'weight' => '',
						'family' => '',
					),
					'letterCase'      => 'none',
					'decoration'      => 'none',
					'lineHeight'      => '',
					'letterSpacing'   => '',
					'timerTypography' => array(
						'font'          => array(
							'size'   => '15px',
							'weight' => '500',
							'family' => '',
						),
						'letterCase'    => 'capitalize',
						'decoration'    => 'none',
						'lineHeight'    => '',
						'letterSpacing' => '',
					),
					'color'           => array(
						'text'  => '',
						'timer' => '',
						'bg'    => '',
					),
				),
			),
			'timezone'        => array(
				'type'    => 'object',
				'default' => array(
					'enableNotice'    => true,
					'message'         => 'Different timezone detected!',
					'enableTime'      => true,
					'gap'             => '6px',
					'padding'         => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
					),
					'margin'          => array(
						'top'    => '26px',
						'bottom' => '',
					),
					'border'          => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'radius'          => '',
					'font'            => array(
						'size'   => '15px',
						'weight' => '',
						'family' => '',
					),
					'letterCase'      => 'none',
					'decoration'      => 'none',
					'lineHeight'      => '',
					'letterSpacing'   => '',
					'labelTypography' => array(
						'font'          => array(
							'size'   => '',
							'weight' => '',
							'family' => '',
						),
						'letterCase'    => 'none',
						'decoration'    => 'none',
						'lineHeight'    => '',
						'letterSpacing' => '',
					),
					'color'           => array(
						'text'  => '',
						'label' => '',
						'bg'    => '',
					),
				),
			),
			'itemStyles'      => array(
				'type'    => 'object',
				'default' => array(
					'gap'             => '6px',
					'alignItems'      => 'end',
					'padding'         => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
					),
					'border'          => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'radius'          => '',
					'font'            => array(
						'size'   => '',
						'weight' => '',
						'family' => '',
					),
					'letterCase'      => 'none',
					'decoration'      => 'none',
					'lineHeight'      => '',
					'letterSpacing'   => '',
					'labelTypography' => array(
						'font'          => array(
							'size'   => '16px',
							'weight' => '500',
							'family' => '',
						),
						'letterCase'    => 'none',
						'decoration'    => 'none',
						'lineHeight'    => '',
						'letterSpacing' => '',
					),
					'color'           => array(
						'text'  => '',
						'label' => '',
						'bg'    => '',
					),
				),
			),
		),
		'editorScript' => array(
			'cthf-blocks--business-hours',
		),
		'editorStyle'  => array(
			'cthf-blocks--business-hours--editor-style',
		),
		'style'        => array(
			'cthf-blocks--business-hours--style',
		),
		'viewScript'   => array(
			'cthf-blocks--business-hours--frontend-script',
			'rootblox--luxon',
		),
		'render'       => 'file:./render.php',
	),
	'contact-info'   => array(
		'$schema'         => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion'      => 2,
		'name'            => 'cthf-blocks/contact-info',
		'title'           => 'Contact Info',
		'description'     => 'Display your business contact details clearly, including phone, email and address—all in one convenient block.',
		'category'        => 'rootblox-footer',
		'supports'        => array(
			'html'                 => false,
			'color'                => array(
				'background' => true,
				'gradients'  => true,
				'text'       => true,
			),
			'spacing'              => array(
				'padding'                       => true,
				'margin'                        => array(
					'top',
					'bottom',
				),
				'__experimentalDefaultControls' => array(
					'padding' => true,
				),
			),
			'__experimentalBorder' => array(
				'color'                         => true,
				'radius'                        => true,
				'style'                         => true,
				'width'                         => true,
				'__experimentalDefaultControls' => array(
					'color'  => true,
					'radius' => true,
					'style'  => true,
					'width'  => true,
				),
			),
		),
		'attributes'      => array(
			'cover'       => array(
				'type'    => 'string',
				'default' => '',
			),
			'clientId'    => array(
				'type'    => 'string',
				'default' => '',
			),
			'gap'         => array(
				'type'    => 'string',
				'default' => '16px',
			),
			'stackLayout' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'itemStyles'  => array(
				'type'    => 'object',
				'default' => array(
					'padding'       => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
					),
					'border'        => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'radius'        => '',
					'font'          => array(
						'size'   => '',
						'weight' => '',
						'family' => '',
					),
					'letterCase'    => 'none',
					'decoration'    => 'underline',
					'lineHeight'    => '',
					'letterSpacing' => '',
					'color'         => array(
						'text'        => '',
						'textHover'   => '',
						'bg'          => '',
						'bgHover'     => '',
						'borderHover' => '',
					),
				),
			),
			'icon'        => array(
				'type'    => 'object',
				'default' => array(
					'enabled'   => true,
					'gap'       => '8px',
					'rowGap'    => '4px',
					'align'     => 'center',
					'boxWidth'  => '',
					'boxHeight' => '',
					'size'      => '16px',
					'padding'   => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
					),
					'margin'    => array(
						'top'    => '',
						'bottom' => '',
					),
					'border'    => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'radius'    => '',
					'color'     => array(
						'svg'         => '',
						'svgHover'    => '',
						'bg'          => '',
						'bgHover'     => '',
						'borderHover' => '',
					),
				),
			),
		),
		'providesContext' => array(
			'icon' => 'icon',
		),
		'editorScript'    => array(
			'cthf-blocks--contact-info',
		),
		'editorStyle'     => array(
			'cthf-blocks--contact-info--editor-style',
		),
		'style'           => array(
			'cthf-blocks--contact-info--style',
		),
		'render'          => 'file:./render.php',
	),
	'copyright-text' => array(
		'$schema'      => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion'   => 2,
		'name'         => 'cthf-blocks/copyright-text',
		'title'        => 'Copyright Text',
		'description'  => 'The Copyright Text block allows you to add a copyright text in the footer area.',
		'category'     => 'rootblox-footer',
		'attributes'   => array(
			'cover'       => array(
				'type'    => 'string',
				'default' => '',
			),
			'clientId'    => array(
				'type'    => 'string',
				'default' => '',
			),
			'tag'         => array(
				'type'    => 'string',
				'default' => 'p',
			),
			'beforeText'  => array(
				'type'    => 'object',
				'default' => array(
					'enabled'       => true,
					'content'       => '© ',
					'font'          => array(
						'size'   => '',
						'weight' => '',
						'family' => '',
					),
					'letterCase'    => 'none',
					'decoration'    => 'none',
					'lineHeight'    => '',
					'letterSpacing' => '',
					'color'         => array(
						'text'      => '',
						'textHover' => '',
					),
				),
			),
			'dynamicYear' => array(
				'type'    => 'object',
				'default' => array(
					'enabled'   => true,
					'hasRange'  => false,
					'range'     => 1,
					'separator' => '-',
					'font'      => array(
						'size'   => '',
						'weight' => '',
						'family' => '',
					),
					'color'     => array(
						'text' => '',
					),
				),
			),
			'afterText'   => array(
				'type'    => 'object',
				'default' => array(
					'enabled'       => true,
					'content'       => ' <a href=\'#\'>Company Name</a>. All rights reserved.',
					'font'          => array(
						'size'   => '',
						'weight' => '',
						'family' => '',
					),
					'letterCase'    => 'none',
					'decoration'    => 'none',
					'lineHeight'    => '',
					'letterSpacing' => '',
					'color'         => array(
						'text'      => '',
						'textHover' => '',
					),
				),
			),
			'padding'     => array(
				'type'    => 'object',
				'default' => array(
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left'   => '',
				),
			),
			'margin'      => array(
				'type'    => 'object',
				'default' => array(
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left'   => '',
				),
			),
			'typography'  => array(
				'type'    => 'object',
				'default' => array(
					'font'          => array(
						'size'   => '',
						'weight' => '',
						'family' => '',
					),
					'letterCase'    => 'none',
					'decoration'    => 'none',
					'lineHeight'    => '',
					'letterSpacing' => '',
				),
			),
			'color'       => array(
				'type'    => 'object',
				'default' => array(
					'text'      => '',
					'textHover' => '',
				),
			),
		),
		'editorScript' => array(
			'cthf-blocks--copyright-text',
		),
		'editorStyle'  => array(
			'cthf-blocks--copyright-text--editor-style',
		),
		'style'        => array(
			'cthf-blocks--copyright-text--style',
		),
		'render'       => 'file:./render.php',
	),
	'footer'         => array(
		'$schema'      => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion'   => 2,
		'name'         => 'cthf-blocks/footer',
		'title'        => 'Footer Builder',
		'description'  => 'The Footer Block allows you to design a fully customizable, responsive site footer with flexible layouts, widget areas, and styling options for a polished, professional finish.',
		'category'     => 'rootblox-footer',
		'attributes'   => array(
			'cover'          => array(
				'type'    => 'string',
				'default' => '',
			),
			'clientId'       => array(
				'type'    => 'string',
				'default' => '',
			),
			'backToTop'      => array(
				'type'    => 'object',
				'default' => array(
					'enabled'       => true,
					'enableIcon'    => true,
					'enableLabel'   => false,
					'label'         => 'Top',
					'gap'           => '0px',
					'position'      => 'right',
					'boxWidth'      => '26px',
					'boxHeight'     => '26px',
					'hPadding'      => '12px',
					'vPadding'      => '12px',
					'iconSize'      => '20px',
					'iconVariation' => 'variation-1',
					'display'       => 'column',
					'margin'        => array(
						'top'    => '',
						'right'  => '16px',
						'bottom' => '16px',
						'left'   => '',
					),
					'border'        => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'radius'        => '100px',
					'font'          => array(
						'size'   => '14px',
						'weight' => '',
						'family' => '',
					),
					'letterCase'    => 'none',
					'decoration'    => 'none',
					'lineHeight'    => '',
					'letterSpacing' => '',
					'color'         => array(
						'icon'        => '',
						'iconHover'   => '',
						'bg'          => '',
						'bgHover'     => '#f90',
						'borderHover' => '',
					),
				),
			),
			'scrollProgress' => array(
				'type'    => 'object',
				'default' => array(
					'enabled'  => false,
					'position' => 'top',
					'zIndex'   => '999',
					'height'   => '4px',
					'margin'   => array(
						'top'    => '',
						'bottom' => '',
					),
					'color'    => array(
						'bg' => '#5100ff',
					),
				),
			),
			'customScript'   => array(
				'type'    => 'object',
				'default' => array(
					'enabled' => false,
					'content' => '',
				),
			),
		),
		'editorScript' => array(
			'cthf-blocks--footer',
		),
		'editorStyle'  => array(
			'cthf-blocks--footer--editor-style',
		),
		'style'        => array(
			'cthf-blocks--footer--style',
		),
		'viewScript'   => array(
			'cthf-blocks--footer--frontend-script',
		),
		'render'       => 'file:./render.php',
	),
	'header'         => array(
		'$schema'      => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion'   => 2,
		'name'         => 'cthf-blocks/header',
		'title'        => 'Header Builder',
		'description'  => 'The Header Block lets you create a fully customizable, responsive site header with options for sticky behavior, transparent backgrounds, and flexible layouts.',
		'category'     => 'rootblox-header',
		'attributes'   => array(
			'cover'           => array(
				'type'    => 'string',
				'default' => '',
			),
			'clientId'        => array(
				'type'    => 'string',
				'default' => '',
			),
			'enableOptions'   => array(
				'type'    => 'object',
				'default' => array(
					'topBar'    => true,
					'bottomBar' => true,
				),
			),
			'stickyHeader'    => array(
				'type'    => 'object',
				'default' => array(
					'enabled'            => false,
					'topBar'             => true,
					'bottomScrollHide'   => false,
					'bottomScrollOffset' => 500,
					'backdropBlur'       => '5px',
				),
			),
			'mobileMenu'      => array(
				'type'    => 'object',
				'default' => array(
					'status'         => 'mobile',
					'layout'         => array(
						array(
							'Site Logo',
						),
						array(
							'Navigation',
						),
					),
					'layoutAttr'     => array(
						array(
							'stackLayout' => true,
							'gap'         => '20px',
						),
						array(
							'stackLayout' => true,
							'gap'         => '20px',
						),
						array(
							'stackLayout' => true,
							'gap'         => '20px',
						),
					),
					'breakpoint'     => 767,
					'wrapperPadding' => array(
						'top'    => '26px',
						'right'  => '26px',
						'bottom' => '26px',
						'left'   => '26px',
					),
					'wrapperBorder'  => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'menuID'         => '',
					'iconSize'       => '20px',
				),
			),
			'sidebar'         => array(
				'type'    => 'object',
				'default' => array(
					'siteLogo'     => true,
					'navigation'   => true,
					'button'       => true,
					'btnGroup'     => array(
						array(
							'label'            => 'Subscribe',
							'link'             => '#',
							'openNewTab'       => false,
							'noFollow'         => false,
							'textColor'        => '',
							'textHoverColor'   => '',
							'bgColor'          => '',
							'bgHoverColor'     => '',
							'borderColor'      => '',
							'borderHoverColor' => '',
						),
					),
					'social'       => true,
					'contentAlign' => 'left',
					'width'        => '450px',
					'position'     => 'left',
					'padding'      => array(
						'top'    => '40px',
						'right'  => '26px',
						'bottom' => '40px',
						'left'   => '26px',
					),
				),
			),
			'siteLogo'        => array(
				'type'    => 'object',
				'default' => array(
					'enableLogo'     => true,
					'useDefaultLogo' => true,
					'custom'         => array(
						'id'  => '',
						'url' => '',
					),
					'width'          => '40px',
					'enableTitle'    => true,
					'titleTag'       => 'h3',
					'gap'            => '10px',
					'font'           => array(
						'size'   => '24px',
						'weight' => '500',
						'family' => '',
					),
					'letterCase'     => 'none',
					'decoration'     => 'none',
					'lineHeight'     => '1.2em',
					'letterSpacing'  => '',
					'color'          => array(
						'text'      => '',
						'textHover' => '',
					),
				),
			),
			'sidebarSiteLogo' => array(
				'type'    => 'object',
				'default' => array(
					'enableLogo'    => true,
					'width'         => '40px',
					'enableTitle'   => true,
					'titleTag'      => 'h3',
					'gap'           => '10px',
					'font'          => array(
						'size'   => '24px',
						'weight' => '500',
						'family' => '',
					),
					'letterCase'    => 'none',
					'decoration'    => 'none',
					'lineHeight'    => '1.2em',
					'letterSpacing' => '',
					'color'         => array(
						'text'      => '',
						'textHover' => '',
					),
				),
			),
			'navigation'      => array(
				'type'    => 'object',
				'default' => array(
					'iconSize'      => '',
					'icon'          => 'variation-1',
					'menuGap'       => '0',
					'submenuGap'    => '10px',
					'padding'       => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
					),
					'margin'        => array(
						'top'    => '26px',
						'bottom' => '26px',
					),
					'border'        => array(
						'top' => array(
							'width' => '1px',
							'style' => 'solid',
							'color' => '#ebe6fb',
						),
					),
					'itemPadding'   => array(
						'top'    => '12px',
						'right'  => '',
						'bottom' => '12px',
						'left'   => '',
					),
					'itemBorder'    => array(
						'bottom' => array(
							'width' => '1px',
							'style' => 'solid',
							'color' => '#ebe6fb',
						),
					),
					'font'          => array(
						'size'   => '16px',
						'weight' => '500',
						'family' => 'Inter',
					),
					'letterCase'    => 'none',
					'decoration'    => 'none',
					'lineHeight'    => '',
					'letterSpacing' => '',
					'color'         => array(
						'icon'             => '',
						'iconHover'        => '',
						'text'             => '',
						'textHover'        => '',
						'submenu'          => '',
						'submenuHover'     => '',
						'submenuIcon'      => '#5100ff',
						'submenuIconHover' => '#f90',
					),
				),
			),
			'sidebarCTA'      => array(
				'type'    => 'object',
				'default' => array(
					'stacked'       => true,
					'gap'           => '12px',
					'rowGap'        => '12px',
					'width'         => '100%',
					'justification' => 'center',
					'margin'        => array(
						'top'    => '',
						'bottom' => '26px',
					),
					'padding'       => array(
						'top'    => '14px',
						'right'  => '36px',
						'bottom' => '14px',
						'left'   => '36px',
					),
					'border'        => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'radius'        => '6px',
					'font'          => array(
						'size'   => '18px',
						'weight' => '500',
						'family' => '',
					),
					'letterCase'    => 'none',
					'decoration'    => 'none',
					'lineHeight'    => '',
					'letterSpacing' => '',
					'color'         => array(
						'text'        => '#fff',
						'textHover'   => '',
						'bg'          => '#5144ff',
						'bgHover'     => '#f90',
						'borderHover' => '',
					),
				),
			),
			'sidebarSocial'   => array(
				'type'    => 'object',
				'default' => array(
					'elements'      => array(
						'Facebook',
						'X',
						'Instagram',
						'Linkedin',
					),
					'links'         => array(),
					'stackLayout'   => true,
					'gap'           => '10px',
					'rowGap'        => '10px',
					'justification' => 'center',
					'useBrandColor' => true,
					'openNewTab'    => true,
					'noFollow'      => false,
					'view'          => 'stacked',
					'margin'        => array(
						'top'    => '',
						'bottom' => '',
					),
					'boxWidth'      => '36px',
					'boxHeight'     => '36px',
					'border'        => array(
						'width' => '',
						'style' => '',
						'color' => '',
					),
					'radius'        => '100px',
					'size'          => '20px',
					'color'         => array(
						'icon'        => '#fff',
						'iconHover'   => '#fff',
						'bg'          => '#5100ff',
						'bgHover'     => '#f90',
						'borderHover' => '',
					),
				),
			),
			'search'          => array(
				'type'    => 'object',
				'default' => array(
					'variation' => 'default',
					'ajax'      => array(
						'enabled'      => true,
						'postsPerPage' => 3,
						'openNewTab'   => false,
						'noFollow'     => false,
					),
					'heading'   => array(
						'enabled'       => true,
						'content'       => 'Looking for Something?',
						'font'          => array(
							'size'   => '28px',
							'weight' => '600',
							'family' => '',
						),
						'letterCase'    => 'none',
						'decoration'    => 'none',
						'lineHeight'    => '',
						'letterSpacing' => '',
					),
					'postTitle' => array(
						'font'          => array(
							'size'   => '16px',
							'weight' => '500',
							'family' => '',
						),
						'letterCase'    => 'none',
						'decoration'    => 'none',
						'lineHeight'    => '',
						'letterSpacing' => '',
					),
					'color'     => array(
						'icon'      => '',
						'iconHover' => '',
						'heading'   => '',
						'link'      => '#1c1c1c',
						'linkHover' => '#f90',
						'text'      => '#6e6e6e',
						'overlay'   => '#fff',
						'close'     => '#acacac',
					),
				),
			),
			'ctaButton'       => array(
				'type'    => 'object',
				'default' => array(
					'label'         => 'Subscribe',
					'link'          => '#',
					'openNewTab'    => false,
					'noFollow'      => false,
					'padding'       => array(
						'top'    => '14px',
						'right'  => '36px',
						'bottom' => '14px',
						'left'   => '36px',
					),
					'border'        => array(
						'style' => '',
						'width' => '',
						'color' => '',
					),
					'radius'        => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
					),
					'font'          => array(
						'size'   => '',
						'weight' => '',
						'family' => '',
					),
					'letterCase'    => 'none',
					'decoration'    => 'none',
					'lineHeight'    => '',
					'letterSpacing' => '',
					'color'         => array(
						'text'        => '#fff',
						'textHover'   => '',
						'bg'          => '#5144ff',
						'bgHover'     => '#f90',
						'borderHover' => '',
					),
				),
			),
			'miniCart'        => array(
				'type'    => 'object',
				'default' => array(
					'iconSize' => '30px',
					'icon'     => 'variation-3',
					'font'     => array(
						'size'   => '14px',
						'weight' => '',
						'family' => '',
					),
					'color'    => array(
						'icon'      => '',
						'iconHover' => '',
						'text'      => '#fff',
						'textBg'    => '#ac0cff',
					),
				),
			),
			'acc'             => array(
				'type'    => 'object',
				'default' => array(
					'iconSize' => '',
					'icon'     => 'variation-1',
					'color'    => array(
						'icon'      => '',
						'iconHover' => '',
					),
				),
			),
			'color'           => array(
				'type'    => 'object',
				'default' => array(
					'mobileBg'         => '#fff',
					'text'             => '#000',
					'iconHover'        => '#f90',
					'sidebarBg'        => '#fff',
					'sidebarCloseIcon' => '#9a9a9a',
				),
			),
		),
		'editorScript' => array(
			'cthf-blocks--header',
		),
		'editorStyle'  => array(
			'cthf-blocks--header--editor-style',
		),
		'style'        => array(
			'cthf-blocks--header--style',
		),
		'script'       => array(
			'cthf-blocks--header--frontend-script',
		),
		'render'       => 'file:./render.php',
	),
);
