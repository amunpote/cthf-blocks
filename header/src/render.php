<?php
$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cozyBlock_' . $client_id;

$block_styles = '';

$font_families = array();

// if ( isset( $attributes['itemStyles']['font']['family'] ) && ! empty( $attributes['itemStyles']['font']['family'] ) ) {
// $font_families[] = $attributes['itemStyles']['font']['family'];
// }

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
	wp_add_inline_style( 'cozy-block--header-builder--style', '@import url("' . rawurldecode( esc_url( $google_fonts_url ) ) . '");' );
}

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cozy-block--header-builder--style', esc_html( $block_styles ) );
	}
);

$wrapper_attributes = get_block_wrapper_attributes();

// wp_localize_script( 'cozy-block--header-builder--frontend-script', $block_id, $attributes );
// wp_add_inline_script( 'cozy-block--header-builder--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cozyBlockCF7Styler( "' . esc_html( $block_id ) . '" ) }) ' );

$nav_menus = get_posts(
	array(
		'post_type' => 'wp_navigation',
	)
);

// print_r( $nav_menus );

foreach ( $nav_menus as $key => $nav ) {
	// wp_nav_menu(
	// array(
	// 'menu'            => '290',
	// 'menu'            => $nav->ID,
	// 'container'       => 'div',
	// 'container_class' => 'custom-menu-container-' . $key,
	// 'menu_class'      => 'custom-menu-' . $key,
	// )
	// );
	echo '<div class="menu-' . $nav->ID . '">';
	echo do_blocks( $nav->post_content );
	echo '</div>';
}

?>

<div class="cozy-block-wrapper">
	<div <?php echo $wrapper_attributes; ?>>
		<div id="<?php echo esc_attr( $block_id ); ?>" class="cozy-block-header-builder">
			<div></div>

			<div>
				<div></div>
				<div></div>
			</div>

			<div></div>
		</div>
	</div>
</div>