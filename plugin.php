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

// the CRON hook for firing function
add_action('myplugin_cron', 'myplugin_cron_function');
// add_action('wp_head', 'myplugin_cron_function'); //test on page load

// the actual function
function myplugin_cron_function() {
    // see if fires via email notification
    // wp_mail('zacharyjsanders@gmail.com','Cron Worked', date('r'));
    $url = 'https://jsonplaceholder.typicode.com/users'; // testing url
    $data = file_get_contents($url); // put the contents of the file into a variable


    file_put_contents('test.json', json_encode($data)); // write json to test.js
}

////////////////////////////////////////////////////////////////////////////
// CUSTOM TIME INTERVAL FOR CRON
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
// Deactivate Cron
////////////////////////////////////////////////////////////////////////////

 register_deactivation_hook( __FILE__, 'myplugin_cron_deactivate' );

 function myplugin_cron_deactivate() {
    $timestamp = wp_next_scheduled( 'myplugin_cron' );
    wp_unschedule_event($timestamp, 'myplugin_cron' );
 }




?>
