<?php

if (!defined('ABSPATH')) {
  exit;
}

// [bartag foo="foo-value"]
function atw_dolar_shortcode_register($atts)
{
  ob_start();
?>

<div class="atw-currency-price">
  <div class="atw-currency-price-names">
    <p>Dólar</p>
    <p>Euro</p>
  </div>
  <div class="atw-currency-price-values">
    <div>
      <i id="atw-currency-price-dolar-icon"></i>
      <span id="atw-currency-price-dolar-value"></span>
    </div>
    <div>
      <i id="atw-currency-price-euro-icon"></i>
      <span id="atw-currency-price-euro-value"></span>
    </div>
  </div>
</div>

<?php
  $output = ob_get_contents();

  ob_end_clean();

  return $output;
}
add_shortcode('atw-currency-price', 'atw_dolar_shortcode_register');