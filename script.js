//your code here
document.addEventListener('DOMContentLoaded', function(){
	let table = document.getElementById('myTable');
	let allPrice = document.querySelectorAll('td[data-ns-test="prices"]');
	let sum = 0;
	allPrice.forEach(function(element){
		sum+=parseFloat(element.textContent.replace('$',''));
	});

	let newRows = table.insertRow(-1);
	let cell1 = newRows.insertCell(0);

	cell1.dataset.nsTest = "grandTotal";

	cell1.innerHTML = 'Total price = '+ sum;
});