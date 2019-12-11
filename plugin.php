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

 // Exit if accessed directly.
 if ( ! defined( 'ABSPATH' ) ) {
 	exit;
 }

////////////////////////////////////////////////////////////////////////////
// Setup Cron
////////////////////////////////////////////////////////////////////////////

add_action('wp', 'myplugin_schedule_cron');

function myplugin_schedule_cron() {
  if ( !wp_next_scheduled( 'myplugin_cron' ) )
    wp_schedule_event(time(), 'customTime', 'myplugin_cron');
}

////////////////////////////////////////////////////////////////////////////
// Cron Function
////////////////////////////////////////////////////////////////////////////

// create custom CRON hook for firing function
add_action('myplugin_cron', 'myplugin_cron_function');

function myplugin_cron_function() {

   // wp_mail('zacharyjsanders@gmail.com','Cron Worked', date('r'));//send me an email every 30s, which it does
 $url = 'https://jsonplaceholder.typicode.com/posts'; // testing url
 $data = file_get_contents($url); // put the contents of the file into a variable
 $file = __DIR__ . '/latest.json'; //tell server where to write file to and what to call it

 file_put_contents($file, $data); // write json to plugin root

 }

////////////////////////////////////////////////////////////////////////////
// Custom time interval for cron
////////////////////////////////////////////////////////////////////////////

add_filter('cron_schedules', 'myplugin_cron_add_intervals');

function myplugin_cron_add_intervals( $schedules ) {
  $schedules['customTime'] = array(
    'interval' => 30,
    'display' => __('Every 30sec')
  );
  return $schedules;
}

////////////////////////////////////////////////////////////////////////////
// INITITALZE BLOCK
////////////////////////////////////////////////////////////////////////////

require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

////////////////////////////////////////////////////////////////////////////
// Deactivate Cron
////////////////////////////////////////////////////////////////////////////

 register_deactivation_hook( __FILE__, 'myplugin_cron_deactivate' );

 function myplugin_cron_deactivate() {
    $timestamp = wp_next_scheduled( 'myplugin_cron' );
    wp_unschedule_event($timestamp, 'myplugin_cron' );

 }

?>
