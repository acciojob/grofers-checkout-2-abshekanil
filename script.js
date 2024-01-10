//your code here
document.addEventListener('DOMContentLoaded', function(){
	let table = document.getElementById('myTable');
	let lastRow = document.createElement('tr');
	let allPrice = document.querySelectorAll('[data-ns-test=price]');
	let sum = 0;

	for(let i=0; i<allPrice.length; i++)
		{
		 
			sum += parseInt(allPrice[i].textContent);
		
		}
	var child = document.createElement('td');
	child.setAttribute('data-ns-test', 'grandTotal');
	child.textContent = sum;
	lastRow.appendChild(child);
	table.appendChild(lastRow);
		


	let newRows = table.insertRow(-1);
	let cell1 = newRows.insertCell(0);

	cell1.dataset.nsTest = "grandTotal";

	cell1.innerHTML = 'Total price = $'+ sum.toFixed(2);
});