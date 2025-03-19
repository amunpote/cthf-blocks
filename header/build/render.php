<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

wp_localize_script( 'cthf-blocks--header--frontend-script', $block_id, $attributes );
wp_add_inline_script( 'cthf-blocks--header--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cthfHeader( "' . esc_html( $block_id ) . '" ) }) ' );

$sticky_styles = array(
	'backdrop_blur' => isset( $attributes['stickyHeader']['backdropBlur'] ) ? sanitize_text_field( $attributes['stickyHeader']['backdropBlur'] ) : '',
);

$mm_styles = array(
	'wrapper_padding' => isset( $attributes['mobileMenu']['wrapperPadding'] ) ? rootblox_render_trbl( 'padding', $attributes['mobileMenu']['wrapperPadding'] ) : '',
	'sidebar'         => array(
		'width' => isset( $attributes['mobileMenu']['sidebar']['width'] ) ? $attributes['mobileMenu']['sidebar']['width'] : '',
	),
);

$colors = array(
	'sidebar_bg' => isset( $attributes['color']['sidebarBg'] ) ? $attributes['color']['sidebarBg'] : '',
	'bg'         => isset( $attributes['color']['bg'] ) ? $attributes['color']['bg'] : '',
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
}
.cthf__mobile-layout-wrapper.element-$block_id .cthf__sidebar-panel-wrap .sidebar-panel__body {
	width: {$mm_styles['sidebar']['width']};
	background-color: {$colors['sidebar_bg']};
}
";

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cthf-blocks--header--style', $block_styles );
	}
);
?>

<div class="cthf-block__wrapper">
	<?php
	if ( 'off' === $attributes['mobileMenu']['status'] || 'mobile' === $attributes['mobileMenu']['status'] ) {
		echo $content;
	}

	if ( ( 'mobile' === $attributes['mobileMenu']['status'] || 'always' === $attributes['mobileMenu']['status'] ) && ! empty( $attributes['mobileMenu']['layout'] ) ) {
		$output = apply_filters( 'rootblox_create_mobile_menu_pattern', $attributes['mobileMenu']['layout'] );

		$classes   = array();
		$classes[] = 'cthf__mobile-layout-wrapper';
		$classes[] = 'element-' . $block_id;
		$classes[] = 'mobile' === $attributes['mobileMenu']['status'] ? 'cthf__display-none' : '';
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
				$classes[] = 'position-' . $attributes['mobileMenu']['navigation']['position'];
				?>
				<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', array_values( $classes ) ) ) ); ?>">
					<svg class="close__icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.99999 4.058L8.29999 0.758003L9.24266 1.70067L5.94266 5.00067L9.24266 8.30067L8.29932 9.24334L4.99932 5.94334L1.69999 9.24334L0.757324 8.3L4.05732 5L0.757324 1.7L1.69999 0.75867L4.99999 4.058Z" />
					</svg>

				</div>
			</div>
		</div>
		<?php
	}
	?>
</div>