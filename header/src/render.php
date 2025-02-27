<?php
$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

wp_localize_script( 'cthf-blocks--header--frontend-script', $block_id, $attributes );
wp_add_inline_script( 'cthf-blocks--header--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cthfHeader( "' . esc_html( $block_id ) . '" ) }) ' );
?>

<div class="cthf-block__wrapper">
	<?php
	echo $content;
	?>
</div>
