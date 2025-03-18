<?php
$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

wp_localize_script( 'cthf-blocks--header--frontend-script', $block_id, $attributes );
wp_add_inline_script( 'cthf-blocks--header--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cthfHeader( "' . esc_html( $block_id ) . '" ) }) ' );

$sticky_styles = array(
	'backdrop_blur' => isset( $attributes['stickyHeader']['backdropBlur'] ) ? sanitize_text_field( $attributes['stickyHeader']['backdropBlur'] ) : '',
);

$colors = array(
	'text' => isset( $attributes['color']['text'] ) ? $attributes['color']['text'] : '',
	'bg'   => isset( $attributes['color']['bg'] ) ? $attributes['color']['bg'] : '',
);

$block_styles = "
#$block_id {
	color: {$colors['text']};
	background-color: {$colors['bg']};
}

#$block_id.is-sticky.on-scroll__sticky:not(.top-bar__is-sticky) > .wp-block-group, #$block_id.is-sticky.on-scroll__sticky.top-bar__is-sticky {
	backdrop-filter: blur({$sticky_styles['backdrop_blur']});
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

	if ( 'mobile' === $attributes['mobileMenu']['status'] || 'always' === $attributes['mobileMenu']['status'] ) {
		// Mobile Menu content.
		// $args  = array(
		// 'post_type'      => 'nav_menu',
		// 'posts_per_page' => -1,
		// );

		$menus = wp_get_nav_menu_items( 2425 );

		print_r( $menus );
	}
	?>
</div>
