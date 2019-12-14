<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

 ////////////////////////////////////////////////////////////////////////////
 // Enqueue Gutenberg block assets for both frontend + backend.
 ////////////////////////////////////////////////////////////////////////////
function en_reviews_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'en_reviews-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'en_reviews-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'en_reviews-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'en_reviews-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	//initaize swiper js in footer
	function initialize_swiper() {
	    wp_enqueue_script( 'my_custom_script',
			plugin_dir_url( __FILE__ ) . '../frontend.js');
	}
	add_action('wp_footer', 'initialize_swiper');


 ////////////////////////////////////////////////////////////////////////////
 // Register Gutenberg blocks server-side.
 ////////////////////////////////////////////////////////////////////////////

	// register review slider block
	register_block_type(
		'cgb/block-en-reviews', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'en_reviews-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'en_reviews-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'en_reviews-cgb-block-editor-css',
			// Enable our render_dynamic_block fucntion
			'render_callback' => 'render_dynamic_block',
		)
	);
	// register review list block
	register_block_type(
		'cgb/block-en-reviews-list', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'en_reviews-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'en_reviews-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'en_reviews-cgb-block-editor-css',
			// Enable our render_dynamic_block fucntion
			'render_callback' => 'render_dynamic_list_block',
		)
	);

	////////////////////////////////////////////////////////////////////////////
	// Dynamic block functions
	////////////////////////////////////////////////////////////////////////////

	//dynamic review slider block
	function render_dynamic_block($attributes) {

		//grab json from plugin root
		$jsonreviews = plugin_dir_path( __DIR__ ) . './latest.json';
		$reviews2var = file_get_contents($jsonreviews);
		$reviews = json_decode($reviews2var, true);

		?>
		<!-- Slider main container -->
		<div class="swiper-container">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<?php
				 $counter = 1;
				 foreach ($reviews['reviews'] as $review) :

					 if ($counter > 5)  {
						 //do nothing
					 } else {
						 ?>
<!-- put in conditional that checks for "starRating"=  "FIVE", -->
			        <div class="swiper-slide">

								<?php	$counter++;	?>

			            <h3><?php echo $review['comment']; ?></h3>
			            <p><?php echo $review['reviewer']['displayName']; ?></p>

			        </div>
						<?php }

					endforeach; ?>

			</div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-pagination"></div>
		</div>

	<?php }

	//dynamic review list block
	function render_dynamic_list_block($attributes) {
		//grab json from plugin root
		$jsonreviews = plugin_dir_path( __DIR__ ) . './latest.json';
		$reviews2var = file_get_contents($jsonreviews);
		$reviews = json_decode($reviews2var, true);

		?>

		<div class="list-wrapper">
			<?php
			 $counter = 1;
			 foreach ($reviews['reviews'] as $review) :

				 if ($counter > 10)  {
					 //do nothing
				 } else {
			?>
<!-- put in conditional that checks for "starRating"=  "FIVE", -->
						<div class="">

							<?php $counter++;?>

								<h3><?php echo $review['comment'];?></h3>
								<p><?php echo $review['reviewer']['displayName']; ?></p>

						</div>
					<?php }

				endforeach; ?>

		</div>


	<?php } ?>
<?php } ?>


<?php
// Hook: Block assets.
add_action( 'init', 'en_reviews_cgb_block_assets' );
