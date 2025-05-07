<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id = isset( $attributes['clientId'] ) ? str_replace( '-', '_', sanitize_key( wp_unslash( $attributes['clientId'] ) ) ) : '';

$block_id = 'cthf_' . $client_id;

$attributes['systemTimezone'] = wp_timezone();

$item_styles = array(
	'gap'            => isset( $attributes['itemStyles']['gap'] ) ? $attributes['itemStyles']['gap'] : '',
	'padding'        => isset( $attributes['itemStyles']['padding'] ) ? rootblox_render_trbl( 'padding', $attributes['itemStyles']['padding'] ) : '',
	'border'         => isset( $attributes['itemStyles']['border'] ) ? rootblox_render_trbl( 'border', $attributes['itemStyles']['border'] ) : '',
	'radius'         => isset( $attributes['itemStyles']['radius'] ) ? $attributes['itemStyles']['radius'] : '',
	'font'           => array(
		'size'   => isset( $attributes['itemStyles']['font']['size'] ) ? $attributes['itemStyles']['font']['size'] : '',
		'family' => isset( $attributes['itemStyles']['font']['family'] ) ? $attributes['itemStyles']['font']['family'] : '',
	),
	'line_height'    => isset( $attributes['itemStyles']['lineHeight'] ) ? $attributes['itemStyles']['lineHeight'] : '',
	'letter_spacing' => isset( $attributes['itemStyles']['letterSpacing'] ) ? $attributes['itemStyles']['letterSpacing'] : '',
	'label'          => array(
		'font'           => array(
			'size'   => isset( $attributes['itemStyles']['labelTypography']['font']['size'] ) ? $attributes['itemStyles']['labelTypography']['font']['size'] : '',
			'family' => isset( $attributes['itemStyles']['labelTypography']['font']['family'] ) ? $attributes['itemStyles']['labelTypography']['font']['family'] : '',
		),
		'line_height'    => isset( $attributes['itemStyles']['labelTypography']['lineHeight'] ) ? $attributes['itemStyles']['labelTypography']['lineHeight'] : '',
		'letter_spacing' => isset( $attributes['itemStyles']['labelTypography']['letterSpacing'] ) ? $attributes['itemStyles']['labelTypography']['letterSpacing'] : '',
	),
	'color'          => array(
		'text'  => isset( $attributes['itemStyles']['color']['text'] ) ? $attributes['itemStyles']['color']['text'] : '',
		'label' => isset( $attributes['itemStyles']['color']['label'] ) ? $attributes['itemStyles']['color']['label'] : '',
		'bg'    => isset( $attributes['itemStyles']['color']['bg'] ) ? $attributes['itemStyles']['color']['bg'] : '',

	),
);

$time_styles = array(
	'separator' => isset( $attributes['timeSeparator'] ) && ! empty( $attributes['timeSeparator'] ) ? $attributes['timeSeparator'] : '',
);

$notifier_styles = array(
	'padding'        => isset( $attributes['notification']['padding'] ) ? rootblox_render_trbl( 'padding', $attributes['notification']['padding'] ) : '',
	'margin'         => array(
		'top'    => isset( $attributes['notification']['margin']['top'] ) ? $attributes['notification']['margin']['top'] : '',
		'bottom' => isset( $attributes['notification']['margin']['bottom'] ) ? $attributes['notification']['margin']['bottom'] : '',
	),
	'border'         => isset( $attributes['notification']['border'] ) ? rootblox_render_trbl( 'border', $attributes['notification']['border'] ) : '',
	'radius'         => isset( $attributes['notification']['radius'] ) ? $attributes['notification']['radius'] : '',
	'font'           => array(
		'size'   => isset( $attributes['notification']['font']['size'] ) ? $attributes['notification']['font']['size'] : '',
		'family' => isset( $attributes['notification']['font']['family'] ) ? $attributes['notification']['font']['family'] : '',
	),
	'line_height'    => isset( $attributes['notification']['lineHeight'] ) ? $attributes['notification']['lineHeight'] : '',
	'letter_spacing' => isset( $attributes['notification']['letterSpacing'] ) ? $attributes['notification']['letterSpacing'] : '',
	'timer'          => array(
		'font'           => array(
			'size'   => isset( $attributes['notification']['timerTypography']['font']['size'] ) ? $attributes['notification']['timerTypography']['font']['size'] : '',
			'family' => isset( $attributes['notification']['timerTypography']['font']['family'] ) ? $attributes['notification']['timerTypography']['font']['family'] : '',
		),
		'line_height'    => isset( $attributes['notification']['timerTypography']['lineHeight'] ) ? $attributes['notification']['timerTypography']['lineHeight'] : '',
		'letter_spacing' => isset( $attributes['notification']['timerTypography']['letterSpacing'] ) ? $attributes['notification']['timerTypography']['letterSpacing'] : '',
	),
	'color'          => array(
		'text'  => isset( $attributes['notification']['color']['text'] ) ? $attributes['notification']['color']['text'] : '',
		'timer' => isset( $attributes['notification']['color']['timer'] ) ? $attributes['notification']['color']['timer'] : '',
		'bg'    => isset( $attributes['notification']['color']['bg'] ) ? $attributes['notification']['color']['bg'] : '',

	),


);

$block_styles = "
    #$block_id .business-hour__item:not(:first-child) {
        margin-top: {$item_styles['gap']};
    }
	#$block_id .business-hour__item {
		{$item_styles['padding']}
		{$item_styles['border']}
		border-radius: {$item_styles['radius']};
		font-size: {$item_styles['font']['size']};
		font-weight: {$attributes['itemStyles']['font']['weight']};
		font-family: {$item_styles['font']['family']};
		text-transform: {$attributes['itemStyles']['letterCase']};
		text-decoration: {$attributes['itemStyles']['decoration']};
		line-height: {$item_styles['line_height']};
		letter-spacing: {$item_styles['letter_spacing']};
		background-color: {$item_styles['color']['bg']};
		color: {$item_styles['color']['text']};
		align-items: {$attributes['itemStyles']['alignItems']};
	}
	#$block_id .business-hour__item .weekday {
		font-size: {$item_styles['label']['font']['size']};
		font-weight: {$attributes['itemStyles']['labelTypography']['font']['weight']};
		font-family: {$item_styles['label']['font']['family']};
		text-transform: {$attributes['itemStyles']['labelTypography']['letterCase']};
		text-decoration: {$attributes['itemStyles']['labelTypography']['decoration']};
		line-height: {$item_styles['label']['line_height']};
		letter-spacing: {$item_styles['label']['letter_spacing']};
		color: {$item_styles['color']['label']};
	}

	#$block_id .notification {
		{$notifier_styles['padding']}
		margin-top: {$notifier_styles['margin']['top']};
		margin-bottom: {$notifier_styles['margin']['bottom']};
		{$notifier_styles['border']}
		border-radius: {$notifier_styles['radius']};
		font-size: {$notifier_styles['font']['size']};
		font-weight: {$attributes['notification']['font']['weight']};
		font-family: {$notifier_styles['font']['family']};
		text-transform: {$attributes['notification']['letterCase']};
		text-decoration: {$attributes['notification']['decoration']};
		line-height: {$notifier_styles['line_height']};
		letter-spacing: {$notifier_styles['letter_spacing']};
		background-color: {$notifier_styles['color']['bg']};
		color: {$notifier_styles['color']['text']};
	}
	#$block_id .business-hour__item .weekday {
		font-size: {$notifier_styles['timer']['font']['size']};
		font-weight: {$attributes['notification']['timerTypography']['font']['weight']};
		font-family: {$notifier_styles['timer']['font']['family']};
		text-transform: {$attributes['notification']['timerTypography']['letterCase']};
		text-decoration: {$attributes['notification']['timerTypography']['decoration']};
		line-height: {$notifier_styles['timer']['line_height']};
		letter-spacing: {$notifier_styles['timer']['letter_spacing']};
		color: {$notifier_styles['color']['timer']};
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
									<span class="time-separator"><?php echo esc_html( $time_styles['separator'] ); ?></span>
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
			if ( isset( $attributes['notification']['enabled'] ) && ! empty( $attributes['notification']['enabled'] ) && filter_var( $attributes['notification']['enabled'], FILTER_VALIDATE_BOOLEAN ) ) {
				?>
				<div class="notification">
					<div class="message">
					</div>

					<div class="timer"></div>
				</div>
				<?php
			}
			?>
		</div>
	</div>
</div>

<?php
wp_localize_script( 'cthf-blocks--business-hours--frontend-script', $block_id, $attributes );
wp_add_inline_script( 'cthf-blocks--business-hours--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cthfBusinessHours( "' . esc_html( $block_id ) . '" ) }) ' );