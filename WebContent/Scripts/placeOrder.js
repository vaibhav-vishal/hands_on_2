
var food = [ {
	"name" : "Chocolate Brownie",
	"price" : 150
}, {
	"name" : "ButterScoth",
	"price" : 100
}, {
	"name" : "ChocoLava Cake",
	"price" : 220
}, {
	"name" : "Mango Smoothie",
	"price" : 120
}, {
	"name" : "Peabolt Crusher",
	"price" : 180
} ];

function init() {
	drawTable(food);
}

function drawTable(data) {
	for (var i = 0; i < data.length; i++) {
		drawRow(data[i]);
	}
}

function drawRow(rowData) {
	var row = $("<tr />")
	$("#customers").append(row);
	row.append($("<td><input type='checkbox' name='offer'></td>"));
	row.append($("<td>" + rowData.name + "</td>"));
	row.append($("<td>" + rowData.price + "</td>"));
}

function confirmName(name) {
	var person = prompt("is your name correct? ", name);
	document.getElementById('customerName').value = person;
}

function summaryDisplay() {
	var summary = document.getElementById('customerName').value + "\n";

	var e = document.getElementById("location");
	var strUser = e.options[e.selectedIndex].text;
	summary += "Location : " + strUser + "\n";

	if (document.getElementById('r1').checked) {
		summary += "Payment Mode : " + document.getElementById('r1').value
				+ "\n";
	} else if (document.getElementById('r2').checked) {
		summary += "Payment Mode : " + document.getElementById('r2').value
				+ "\n";
	} else if (document.getElementById('r3').checked) {
		summary += "Payment Mode : " + document.getElementById('r3').value
				+ "\n";
	}
	summary += "Offers selected: ";
	var x = document.getElementsByName("offer");
	var i;
	for (i = 0; i < x.length; i++) {
		if (x[i].type == "checkbox") {
			if (x[i].checked == true) {
				summary += " " + x[i].value;
			}
		}
	}

	confirm(summary);
}