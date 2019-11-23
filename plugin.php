<?php
/**
 * Plugin Name: Wit Google Reviews
 * Plugin URI:
 * Description: Pull in Google Reviews from the GMB API with this handy plugin
 * Author: Zac Sanders (Endurain)
 * Author URI: github.com/endurain
 * Version: 1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

 // Exit if accessed directly for security.
 if ( ! defined( 'ABSPATH' ) ) {
 	exit;
 }


////////////////////////////////////////////////////////////////////////////

// add our non-default cron schedule by tapping into ‘cron_schedules’ filter
 add_filter( 'cron_schedules', 'bl_add_cron_intervals' );

 // setup custom interval
 function bl_add_cron_intervals( $schedules ) {

    $schedules['60seconds'] = array( // Provide the programmatic name to be used in code
       'interval' => 60, // Intervals are listed in seconds
       'display'  => __('Every 60 Seconds') // Easy to read display name (WP-Control plugin for ex. )
    );
    return $schedules; // Do not forget to give back the list of schedules

 }

///////////////////////////////////////////////////////////////////////////

 // schedule our custom hook to run every 60s if it hasn't already been scheduled

 if( !wp_next_scheduled( 'bl_cron_hook' ) ) {
    wp_schedule_event( time(), '60seconds', 'bl_cron_hook');

 }
 // create our own custom hook. first parameter is the name of the hook, and the second is the name of our function to call
 add_action( 'bl_cron_hook', 'pull_reviews' );

 // $args = array(false);
 // function schedule_my_cron() {
 //
 //     wp_schedule_event(time(), '60seconds', 'bl_cron_hook', $args);
 // }
 //
 //
 // if(!wp_next_scheduled('bl_cron_hook', $args )) {
 //
 //     add_action('init', 'pull_reviews');
 //
 // }

///////////////////////////////////////////////////////////////////////////////
 function pull_reviews() {
  echo 'it works';

 }


/////////////////////////////////////////////////////////////////////////////

 // deactivation of cron job
 register_deactivation_hook( __FILE__, 'bl_deactivate' );

 function bl_deactivate() {
    $timestamp = wp_next_scheduled( 'bl_cron_hook' );
    wp_unschedule_event($timestamp, 'bl_cron_hook' );
 }


////////////////////////////////////////////////////////////////////////////
// add_action('wp_enqueue_scripts','pull_reviews');
//
// function pull_reviews() {
//     wp_enqueue_script( 'init.php', plugins_url( './init.php', __FILE__ ));
// }



?>
