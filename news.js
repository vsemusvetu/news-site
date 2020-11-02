$(document).ready(function(){
	getRate();
});
function getRate(){
	$.get(
		"http://data.fixer.io/api/latest",
		{'access_key': '0d11774c458a9101863e432f9513e660'},
		function(response){
			var euro = response.rates.RUB.toFixed(2);
			    usd = response.rates.USD;
			    usdrub = (euro/usd).toFixed(2);
			$('.exchangeEUR').text(euro);
			$('.exchangeUSD').text(usdrub);
		});
};

let bar = document.querySelector('.menu_bar');
let menu = document.querySelector('.menu_container');
let close = document.querySelector('.menu_container');

bar.addEventListener('click', function (e) {
	e.preventDefault();
	menu.classList.add('menu_container_open');
});

close.addEventListener('click', function (e) {
	e.preventDefault();
	menu.classList.remove('menu_container_open');
});
