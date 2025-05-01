<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

$btt_styles = array(
	'margin'     => isset( $attributes['backToTop']['margin'] ) ? rootblox_render_trbl( 'margin', $attributes['backToTop']['margin'] ) : '',
	'border'     => isset( $attributes['backToTop']['border'] ) ? rootblox_render_trbl( 'border', $attributes['backToTop']['border'] ) : '',
	'radius'     => isset( $attributes['backToTop']['radius'] ) ? $attributes['backToTop']['radius'] : '',
	'box_width'  => isset( $attributes['backToTop']['boxWidth'] ) ? $attributes['backToTop']['boxWidth'] : '',
	'box_height' => isset( $attributes['backToTop']['boxHeight'] ) ? $attributes['backToTop']['boxHeight'] : '',
	'icon_size'  => isset( $attributes['backToTop']['iconSize'] ) ? $attributes['backToTop']['iconSize'] : '',
	'color'      => array(
		'icon'         => isset( $attributes['backToTop']['color']['icon'] ) ? $attributes['backToTop']['color']['icon'] : '',
		'icon_hover'   => isset( $attributes['backToTop']['color']['iconHover'] ) ? $attributes['backToTop']['color']['iconHover'] : '',
		'bg'           => isset( $attributes['backToTop']['color']['bg'] ) ? $attributes['backToTop']['color']['bg'] : '',
		'bg_hover'     => isset( $attributes['backToTop']['color']['bgHover'] ) ? $attributes['backToTop']['color']['bgHover'] : '',
		'border_hover' => isset( $attributes['backToTop']['color']['borderHover'] ) ? $attributes['backToTop']['color']['borderHover'] : '',
	),
);

$scroll_progress_styles = array(
	'margin'  => array(
		'top'    => isset( $attributes['scrollProgress']['margin']['top'] ) ? $attributes['scrollProgress']['margin']['top'] : '',
		'bottom' => isset( $attributes['scrollProgress']['margin']['bottom'] ) ? $attributes['scrollProgress']['margin']['bottom'] : '',
	),
	'z_index' => isset( $attributes['scrollProgress']['zIndex'] ) ? $attributes['scrollProgress']['zIndex'] : '',
	'height'  => isset( $attributes['scrollProgress']['height'] ) ? $attributes['scrollProgress']['height'] : '',
	'color'   => array(
		'bg' => isset( $attributes['scrollProgress']['color']['bg'] ) ? $attributes['scrollProgress']['color']['bg'] : '',
	),
);

$block_styles = "
.cthf__back-to-top-wrapper.element-$block_id {
	{$btt_styles['margin']}
	{$btt_styles['border']}
	border-radius: {$btt_styles['radius']};
	width: {$btt_styles['box_width']};
	height: {$btt_styles['box_height']};
	background-color: {$btt_styles['color']['bg']};
	color: {$btt_styles['color']['icon']};

	& .cthf__back-to-top {
		width: {$btt_styles['icon_size']};
		height: {$btt_styles['icon_size']};
	}

	&:hover {
		background-color: {$btt_styles['color']['bg_hover']};
		color: {$btt_styles['color']['icon_hover']};
		border-color: {$btt_styles['color']['border_hover']};
	}
}

.cthf__scroll-progress-bar.element-$block_id {
	z-index: {$scroll_progress_styles['z_index']};
	margin-top: {$scroll_progress_styles['margin']['top']};
	margin-bottom: {$scroll_progress_styles['margin']['bottom']};

	& .progress-bar {
		height: {$scroll_progress_styles['height']};
		background-color: {$scroll_progress_styles['color']['bg']};
	}
}
";

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cthf-blocks--footer--style', $block_styles );
	}
);

wp_localize_script( 'cthf-blocks--footer--frontend-script', $block_id, $attributes );
wp_add_inline_script( 'cthf-blocks--footer--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cthfFooter( "' . esc_html( $block_id ) . '" ) }) ' );

?>
<div class="cthf-block__wrapper footer__wrap">
	<?php
	echo $content;

	if ( isset( $attributes['backToTop']['enabled'] ) && filter_var( $attributes['backToTop']['enabled'], FILTER_VALIDATE_BOOLEAN ) ) {
		$classes   = array();
		$classes[] = 'cthf__back-to-top-wrapper';
		$classes[] = 'position-' . $attributes['backToTop']['position'];
		$classes[] = 'element-' . $block_id;
		?>
		<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', array_values( $classes ) ) ) ); ?>">
			<svg class="cthf__back-to-top" width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0.142488 3.23847L3.23847 0.142488C3.42845 -0.0474959 3.73648 -0.0474959 3.92646 0.142488L7.02245 3.23847C7.21243 3.42845 7.21243 3.73648 7.02245 3.92646C6.83246 4.11645 6.52444 4.11645 6.33445 3.92646L4.06895 1.66097L4.06895 18L3.09598 18L3.09598 1.66097L0.830484 3.92647C0.640499 4.11645 0.332473 4.11645 0.142488 3.92647C-0.0474968 3.73648 -0.0474968 3.42845 0.142488 3.23847Z" fill="currentColor" />
			</svg>
		</div>
		<?php
	}

	if ( rootblox_is_premium() && isset( $attributes['scrollProgress']['enabled'] ) && filter_var( $attributes['scrollProgress']['enabled'], FILTER_VALIDATE_BOOLEAN ) ) {
		$classes   = array();
		$classes[] = 'cthf__scroll-progress-bar';
		$classes[] = 'position-' . $attributes['scrollProgress']['position'];
		$classes[] = 'element-' . $block_id;
		?>
		<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', array_values( $classes ) ) ) ); ?>">
			<div class="progress-bar"></div>
		</div>
		<?php
	}
	?>
</div>

<?php
if ( rootblox_is_premium() && isset( $attributes['customScript']['enabled'] ) && filter_var( $attributes['customScript']['enabled'], FILTER_VALIDATE_BOOLEAN ) ) {
	$allowed_tags = array(); // No HTML, just raw script.
	?>
	<script>
		<?php echo wp_kses( $attributes['customScript']['content'], $allowed_tags ); ?>
	</script>
	<?php
}
?>