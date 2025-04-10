<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

$sticky_styles = array(
	'backdrop_blur' => isset( $attributes['stickyHeader']['backdropBlur'] ) ? sanitize_text_field( $attributes['stickyHeader']['backdropBlur'] ) : '',
);

$mm_styles      = array(
	'wrapper_padding' => isset( $attributes['mobileMenu']['wrapperPadding'] ) ? rootblox_render_trbl( 'padding', $attributes['mobileMenu']['wrapperPadding'] ) : '',
	'logo_width'      => isset( $attributes['siteLogo']['width'] ) ? $attributes['siteLogo']['width'] : '',
);
$sidebar_styles = array(
	'width'   => isset( $attributes['sidebar']['width'] ) ? $attributes['sidebar']['width'] : '',
	'padding' => isset( $attributes['sidebar']['padding'] ) ? rootblox_render_trbl( 'padding', $attributes['sidebar']['padding'] ) : '',
);

$cta_button = array(
	'padding'        => isset( $attributes['ctaButton']['padding'] ) ? rootblox_render_trbl( 'padding', $attributes['ctaButton']['padding'] ) : '',
	'border'         => isset( $attributes['ctaButton']['border'] ) ? rootblox_render_trbl( 'border', $attributes['ctaButton']['border'] ) : '',
	'radius'         => isset( $attributes['ctaButton']['radius'] ) ? rootblox_render_trbl( 'radius', $attributes['ctaButton']['radius'] ) : '',
	'font'           => array(
		'size'   => isset( $attributes['ctaButton']['font']['size'] ) ? $attributes['ctaButton']['font']['size'] : '',
		'family' => isset( $attributes['ctaButton']['font']['family'] ) ? $attributes['ctaButton']['font']['family'] : '',
	),
	'line_height'    => isset( $attributes['ctaButton']['lineHeight'] ) ? $attributes['ctaButton']['lineHeight'] : '',
	'letter_spacing' => isset( $attributes['ctaButton']['letterSpacing'] ) ? $attributes['ctaButton']['letterSpacing'] : '',
	'color'          => array(
		'text'         => isset( $attributes['ctaButton']['color']['text'] ) ? $attributes['ctaButton']['color']['text'] : '',
		'text_hover'   => isset( $attributes['ctaButton']['color']['textHover'] ) ? $attributes['ctaButton']['color']['textHover'] : '',
		'bg'           => isset( $attributes['ctaButton']['color']['bg'] ) ? $attributes['ctaButton']['color']['bg'] : '',
		'bg_hover'     => isset( $attributes['ctaButton']['color']['bgHover'] ) ? $attributes['ctaButton']['color']['bgHover'] : '',
		'border_hover' => isset( $attributes['ctaButton']['color']['borderHover'] ) ? $attributes['ctaButton']['color']['borderHover'] : '',
	),
);

$colors = array(
	'mobile_bg'          => isset( $attributes['color']['mobileBg'] ) ? $attributes['color']['mobileBg'] : '',
	'text'               => isset( $attributes['color']['text'] ) ? $attributes['color']['text'] : '',
	'sidebar_bg'         => isset( $attributes['color']['sidebarBg'] ) ? $attributes['color']['sidebarBg'] : '',
	'sidebar_close_icon' => isset( $attributes['color']['sidebarCloseIcon'] ) ? $attributes['color']['sidebarCloseIcon'] : '',
	'bg'                 => isset( $attributes['color']['bg'] ) ? $attributes['color']['bg'] : '',
);

$block_styles = "
#$block_id {
	background-color: {$colors['bg']};
}

#$block_id.is-sticky.on-scroll__sticky:not(.top-bar__is-sticky) > .wp-block-group, #$block_id.is-sticky.on-scroll__sticky.top-bar__is-sticky {
	backdrop-filter: blur({$sticky_styles['backdrop_blur']});
}

.cthf__mobile-layout-wrapper.element-$block_id {
	{$mm_styles['wrapper_padding']}
	background-color: {$colors['mobile_bg']};

	& .nav__icon, & .wc-block-mini-cart__icon, & .search__icon, & .user__icon, & .cthf__cta-anchor-btn {
		color: {$colors['text']};
	}

	& .custom-logo {
		max-width: {$mm_styles['logo_width']};
	}

	& .cthf__responsive-navigation .cthf__cta-anchor-btn {
		{$cta_button['padding']}
		{$cta_button['border']}
		{$cta_button['radius']}
		font-size: {$cta_button['font']['size']};
		font-weight: {$attributes['ctaButton']['font']['weight']};
		font-family: {$cta_button['font']['family']};
		text-transform: {$attributes['ctaButton']['letterCase']};
		text-decoration: {$attributes['ctaButton']['decoration']};
		line-height: {$cta_button['line_height']};
		letter-spacing: {$cta_button['letter_spacing']};
		color: {$cta_button['color']['text']};
		background-color: {$cta_button['color']['bg']};

		&:hover {
			color: {$cta_button['color']['text_hover']};
			background-color: {$cta_button['color']['bg_hover']};
			border-color: {$cta_button['color']['border_hover']};
		}
	}
}
.cthf__mobile-layout-wrapper.element-$block_id.is-sticky.on-scroll__sticky {
	backdrop-filter: blur({$sticky_styles['backdrop_blur']});
}
.cthf__mobile-layout-wrapper.element-$block_id .cthf__sidebar-panel-wrap .sidebar-panel__body {
	width: {$sidebar_styles['width']};
	{$sidebar_styles['padding']}
	background-color: {$colors['sidebar_bg']};

	& .close__icon {
		color: {$colors['sidebar_close_icon']};
	}
}
";

$font_families = array();

if ( isset( $attributes['ctaButton']['font']['family'] ) && ! empty( $attributes['ctaButton']['font']['family'] ) ) {
	$font_families[] = $attributes['ctaButton']['font']['family'];
}

// Remove duplicate font families.
$font_families = array_unique( $font_families );

$font_query = '';

// Add other fonts.
foreach ( $font_families as $key => $family ) {
	if ( 0 === $key ) {
		$font_query .= 'family=' . $family . ':wght@100;200;300;400;500;600;700;800;900';
	} else {
		$font_query .= '&family=' . $family . ':wght@100;200;300;400;500;600;700;800;900';
	}
}

if ( ! empty( $font_query ) ) {
	// Generate the inline style for the Google Fonts link.
	$google_fonts_url = 'https://fonts.googleapis.com/css2?' . rawurlencode( $font_query );

	// Add the Google Fonts URL as an inline style.
	wp_add_inline_style( 'cthf-blocks--header--style', '@import url("' . rawurldecode( esc_url( $google_fonts_url ) ) . '");' );
}

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cthf-blocks--header--style', $block_styles );
	}
);

wp_localize_script( 'cthf-blocks--header--frontend-script', $block_id, $attributes );
wp_add_inline_script( 'cthf-blocks--header--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cthfHeader( "' . esc_html( $block_id ) . '" ) }) ' );
?>

<div class="cthf-block__wrapper">
	<?php
	if ( 'off' === $attributes['mobileMenu']['status'] || 'mobile' === $attributes['mobileMenu']['status'] ) {
		echo $content;
	}

	if ( ( 'mobile' === $attributes['mobileMenu']['status'] || 'always' === $attributes['mobileMenu']['status'] ) && ! empty( $attributes['mobileMenu']['layout'] ) ) {
		$output = apply_filters( 'rootblox_create_mobile_menu_pattern', $attributes );

		$classes   = array();
		$classes[] = 'cthf__mobile-layout-wrapper';
		$classes[] = 'element-' . $block_id;
		$classes[] = 'mobile' === $attributes['mobileMenu']['status'] ? 'cthf__display-none' : '';
		$classes[] = filter_var( $attributes['stickyHeader']['enabled'], FILTER_VALIDATE_BOOLEAN ) ? 'is-sticky' : '';
		$classes[] = filter_var( $attributes['stickyHeader']['enabled'], FILTER_VALIDATE_BOOLEAN ) && filter_var( $attributes['stickyHeader']['bottomScrollHide'] ) ? 'is-bottom-scroll__hidden' : '';
		?>

		<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', array_values( $classes ) ) ) ); ?>">
			<?php
			echo $output;
			?>

			<div class="cthf__sidebar-panel-wrap cthf__display-none">
				<div class="sidebar-panel__overlay"></div>

				<?php
				$classes   = array();
				$classes[] = 'sidebar-panel__body';
				$classes[] = 'position-' . $attributes['sidebar']['position'];
				?>
				<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', array_values( $classes ) ) ) ); ?>">
					<svg class="close__icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.99999 4.058L8.29999 0.758003L9.24266 1.70067L5.94266 5.00067L9.24266 8.30067L8.29932 9.24334L4.99932 5.94334L1.69999 9.24334L0.757324 8.3L4.05732 5L0.757324 1.7L1.69999 0.75867L4.99999 4.058Z" fill="currentColor" />
					</svg>

					<?php
					if ( $attributes['sidebar']['siteLogo'] ) {
						the_custom_logo();
					}

					if ( $attributes['sidebar']['navigation'] && isset( $attributes['mobileMenu']['menuID'] ) && ! empty( $attributes['mobileMenu']['menuID'] ) ) {
						$menu_id = intval( $attributes['mobileMenu']['menuID'] );

						if ( $menu_id && 'publish' === get_post_status( $menu_id ) ) {
							echo do_blocks( '<!-- wp:navigation {"ref":' . $menu_id . ', "overlayMenu": "never"} /-->' );
						} else {
							echo do_blocks( '<!-- wp:navigation {"overlayMenu": "never"} /-->' );
						}
					}

					if ( rootblox_is_premium() && $attributes['sidebar']['button'] && is_array( $attributes['sidebar']['btnGroup'] ) ) {
						?>
						<div class="cthf__cta-btn-group">
							<?php
							foreach ( $attributes['sidebar']['btnGroup'] as $index => $cta_btn ) {
								$classes   = array();
								$classes[] = 'cthf__cta-anchor-btn';
								$classes[] = 'sidebar-btn';
								$classes[] = 'cta-btn-' . ( ++$index );

								$btn_label = isset( $cta_btn['label'] ) ? $cta_btn['label'] : '';
								$btn_link  = isset( $cta_btn['link'] ) && ! empty( $cta_btn['link'] ) ? sanitize_url( $cta_btn['link'] ) : '#';
								$new_tab   = isset( $cta_btn['openNewTab'] ) && filter_var( $cta_btn['openNewTab'], FILTER_VALIDATE_BOOLEAN ) ? '_blank' : '';
								$nofollow  = isset( $cta_btn['noFollow'] ) && filter_var( $cta_btn['noFollow'], FILTER_VALIDATE_BOOLEAN ) ? 'nofollow' : '';
								?>
								<a class="<?php echo esc_html( implode( ' ', array_map( 'sanitize_html_class', array_values( $classes ) ) ) ); ?>" href="<?php echo esc_url( $btn_link ); ?>" target="<?php echo esc_attr( $new_tab ); ?>" rel="<?php echo esc_attr( $nofollow ); ?>"><?php echo esc_html( $btn_label ); ?></a>
								<?php
							}
							?>
						</div>
						<?php
					}
					?>
				</div>
			</div>
		</div>
		<?php
	}
	?>
</div>