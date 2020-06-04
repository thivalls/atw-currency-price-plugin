$(document).ready(function () {
  $.ajax({
    url: "https://economia.awesomeapi.com.br/json/all/USD-BRL,EUR-BRL",
    success: function (response) {
      // GET VALUES
      var Euro = response.EUR;
      var Dolar = response.USD;

      var dolarIcon = $('#atw-currency-price-dolar-icon');
      var dolarValue = $('#atw-currency-price-dolar-value');

      var euroIcon = $('#atw-currency-price-euro-icon');
      var euroValue = $('#atw-currency-price-euro-value');

      dolarIcon.addClass(Number(Dolar.varBid) >= 0 ? 'varBidPositive' : 'varBidNegative');

      euroIcon.addClass(Number(Euro.varBid) >= 0 ? 'varBidPositive' : 'varBidNegative');

      dolarIcon.addClass('fas');
      dolarIcon.addClass(Number(Dolar.varBid) >= 0 ? 'fa-caret-square-up' : 'fa-caret-square-down');

      euroIcon.addClass('fas');
      euroIcon.addClass(Number(Euro.varBid) >= 0 ? 'fa-caret-square-up' : 'fa-caret-square-down');

      var dolarApiValue = Number(Dolar.bid);
      var dolarApiValueFixed = dolarApiValue.toFixed(3);
      var dolarApiValueComma = dolarApiValueFixed.replace('.', ',');

      var euroApiValue = Number(Euro.bid);
      var euroApiValueFixed = euroApiValue.toFixed(3);
      var euroApiValueComma = euroApiValueFixed.replace('.', ',');

      dolarValue.text(dolarApiValueComma);
      euroValue.text(euroApiValueComma);
    },
    error: function () {
      var atwShortcodeElement = $('.atw-currency-price');
      atwShortcodeElement.remove();
    }
  });
});
