$(function(){
	$("#totalBtn").click(calculateTotal);
});

function calculateTotal() {
	var food = parseFloat(document.getElementById("foodTotal").value);
	var drink = parseFloat(document.getElementById("drinkTotal").value);
	var total;
	if (document.getElementById("drinkTotal").value === "" && document.getElementById("foodTotal").value === ""){
		total = 0;
	}
	else if (document.getElementById("foodTotal").value === ""){
		total = drink; 
	}
	else if (document.getElementById("drinkTotal").value === "")
	{
		total = food;
	}
	else {
		total = food + drink;
	}
	var answer = total.toFixed(2);
	document.getElementById("total").value = answer;
	
}