<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

$item_styles = array(
	'gap' => isset( $attributes['itemStyles']['gap'] ) ? $attributes['itemStyles']['gap'] : '',
);

$block_styles = "
    #$block_id .business-hour__item:not(:first-child) {
        margin-top: {$item_styles['gap']};
    }
";

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cthf-blocks--business-hours--style', $block_styles );
	}
);

// wp_localize_script( 'cthf-blocks--business-hours--frontend-script', $block_id, $attributes );
// wp_add_inline_script( 'cthf-blocks--business-hours--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cthfFooter( "' . esc_html( $block_id ) . '" ) }) ' );

$wrapper_attributes = get_block_wrapper_attributes();
?>

<div class="cthf-block__wrapper">
	<div <?php echo $wrapper_attributes; ?>>
		<ul id="<?php echo esc_attr( $block_id ); ?>" class="cthf-block__business-hours">
			<?php
			if ( isset( $attributes['weekdays'] ) && is_array( $attributes['weekdays'] ) && ! empty( $attributes['weekdays'] ) ) {
				foreach ( $attributes['weekdays'] as $index => $weekday ) {
					?>
					<li class="business-hour__item">
						<span class="weekday"><?php echo esc_html( $weekday['key'] ); ?></span>

						<?php
						if ( isset( $weekday['opened'] ) && filter_var( $weekday['opened'], FILTER_VALIDATE_BOOLEAN ) ) {
							$open_time  = array(
								'hours'   => isset( $weekday['openTime']['hours'] ) ? $weekday['openTime']['hours'] : '',
								'minutes' => isset( $weekday['openTime']['minutes'] ) ? $weekday['openTime']['minutes'] : '',
							);
							$close_time = array(
								'hours'   => isset( $weekday['closeTime']['hours'] ) ? $weekday['closeTime']['hours'] : '',
								'minutes' => isset( $weekday['closeTime']['minutes'] ) ? $weekday['closeTime']['minutes'] : '',
							);
							?>
							<div class="active-hours">
								<span class="opening-hour"><?php echo rootblox_handle_time_format( $open_time['hours'], $open_time['minutes'], $attributes['timeFormat'] ); ?></span>
								<span class="time-separator"><?php echo esc_html( $attributes['timeStyles']['separator'] ); ?></span>
								<span class="closing-hour"><?php echo rootblox_handle_time_format( $close_time['hours'], $close_time['minutes'], $attributes['timeFormat'] ); ?></span>
							</div>
							<?php
						} else {
							?>
							<span class="closed-message"><?php echo esc_html( $attributes['notification']['content'] ); ?></span>
							<?php
						}
						?>
					</li>
					<?php
				}
			}
			?>
		</ul>
	</div>
</div>

