<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

$block_styles = "
#$block_id {
}
";

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cthf-blocks--business-hours--style', esc_html( $block_styles ) );
	}
);

$font_families = array();

if ( isset( $attributes['itemStyles']['font']['family'] ) && ! empty( $attributes['itemStyles']['font']['family'] ) ) {
	$font_families[] = $attributes['itemStyles']['font']['family'];
}
if ( isset( $attributes['itemStyles']['labelTypography']['font']['family'] ) && ! empty( $attributes['itemStyles']['labelTypography']['font']['family'] ) ) {
	$font_families[] = $attributes['itemStyles']['labelTypography']['font']['family'];
}
if ( isset( $attributes['notification']['font']['family'] ) && ! empty( $attributes['notification']['font']['family'] ) ) {
	$font_families[] = $attributes['notification']['font']['family'];
}
if ( isset( $attributes['notification']['timerTypography']['font']['family'] ) && ! empty( $attributes['notification']['timerTypography']['font']['family'] ) ) {
	$font_families[] = $attributes['notification']['timerTypography']['font']['family'];
}
if ( isset( $attributes['timezone']['font']['family'] ) && ! empty( $attributes['timezone']['font']['family'] ) ) {
	$font_families[] = $attributes['timezone']['font']['family'];
}
if ( isset( $attributes['timezone']['labelTypography']['font']['family'] ) && ! empty( $attributes['timezone']['labelTypography']['font']['family'] ) ) {
	$font_families[] = $attributes['timezone']['labelTypography']['font']['family'];
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
	wp_add_inline_style( 'cthf-blocks--copyright-text--style', '@import url("' . rawurldecode( esc_url( $google_fonts_url ) ) . '");' );
}
?>

<div class="cthf-block__wrapper">
	<?php echo $content; ?>
</div>