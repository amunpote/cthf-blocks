<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div class="cthf-block__wrapper">
	<div <?php echo $wrapper_attributes; ?>>
        <div id="<?php echo esc_attr($block_id) ?>" class="cthf__dark-light-toggle">
            <ul class="toggle__wrap">
                <li class="toggle__item"></li>
            </ul>
        </div>
	</div>
</div>