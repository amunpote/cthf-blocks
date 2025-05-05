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

$time_styles = array(
	'separator' => isset( $attributes['timeStyles']['separator'] ) && ! empty( $attributes['timeStyles']['separator'] ) ? $attributes['timeStyles']['separator'] : '',
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
		<div id="<?php echo esc_attr( $block_id ); ?>" class="cthf-block__business-hours">
			<ul class="business-hours__wrap">
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
							<span class="closed-message"><?php echo esc_html( $time_styles['separator'] ) . esc_html__( 'Closed', 'rootblox' ); ?></span>
							<?php
						}
						?>
					</li>
					<?php
				}
			}
			?>
			</ul>

			<?php
			if ( rootblox_get_business_hour_status( $attributes['weekdays'] ) ) {
				$open_msg = isset( $attributes['notification']['open'] ) && ! empty( $attributes['notification']['open'] ) ? sanitize_text_field( $attributes['notification']['open'] ) : '';
				?>
					<div class="open-time"> <?php echo esc_html( $open_msg ); ?> </div>
				<?php
			} else {
				$close_msg = isset( $attributes['notification']['close'] ) && ! empty( $attributes['notification']['close'] ) ? sanitize_text_field( $attributes['notification']['close'] ) : '';
				?>
					<div class="open-time"> <?php echo esc_html( $close_msg ); ?> </div>
				<?php
			}
			?>
		</div>
	</div>
</div>

