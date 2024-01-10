//your code here
document.addEventListener('DOMContentLoaded', function(){
	let table = document.getElementById('myTable');
	let allPrice = document.querySelectorAll('td[data-ns-test="price"]');
	let sum = 0;
	allPrice.forEach(function(element){
		let price = parseFloat(element.textContent.replace('$',''));

		if(!Number.isNaN(price))
		{
			sum+=price;
		}
	});
	

	let newRows = table.insertRow(-1);
	let cell1 = newRows.insertCell(0);

	cell1.dataset.nsTest = "grandTotal";

	cell1.innerHTML = 'Total price = '+ sum.toFixed(2);
});