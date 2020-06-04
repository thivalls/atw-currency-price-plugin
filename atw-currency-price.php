<?php
/*
Plugin Name: ATW - Dolar
Author: Agência Trinity
Version: 1.0.0
*/

if (!defined('ABSPATH')) {
  exit;
}

require_once plugin_dir_path(__FILE__) . 'includes/shortcode.php';

function atw_currency_price_plugin()
{
?>
<script src="https://kit.fontawesome.com/0b731d9241.js" crossorigin="anonymous"></script>
<?php

}
add_action('wp_footer', 'atw_currency_price_plugin');

function atw_currency_price_load_style()
{
  wp_register_script(
    'atw-currency-price-script',
    plugin_dir_url(__FILE__) . 'includes/script.js',
    array('jquery')
  );
  wp_enqueue_script('atw-currency-price-script');
  wp_enqueue_style('atw-currency-price-style', plugin_dir_url(__FILE__) . 'includes/style.css');
}

add_action('wp_enqueue_scripts', 'atw_currency_price_load_style');