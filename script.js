//your code here
document.addEventListener('DOMContentLoaded', function(){
	let table = document.getElementById('myTable');
	let allPrice = document.querySelectorAll('td[data-ns-test="price"]');
	let sum = 0;

	for(let i=0; i<allPrice.length; i++)
		{
		 
			sum += parseFloat(allPrice[i].innerText.replace('$', ''));
		
		}
		
	

	let newRows = table.insertRow(-1);
	let cell1 = newRows.insertCell(0);

	cell1.dataset.nsTest = "grandTotal";

	cell1.innerHTML = 'Total price = $'+ sum.toFixed(2);
});