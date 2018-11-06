/*Jeroen Faasse,
  Applicatie Onwikkeling niv 4, Da Vinci college Gorinchem
*/
const PRICEFRIS = 2.00;	
const PRICEBIER = 2.50;		//Prijsweergave van de soorten drankjes.
const PRICEWIJN = 4.00;
const PRICESNACK = 5.00;

var fris = 0;	
var bier = 0;				
var wijn = 0;				//Alle soorten drankjes beginnen met een aantal van 0;
var snack = 0;
var snackschaal = 0;

var input;

while (input != ("stop")){

// hier worden de vragen gesteld en de antwoorden gelogd, de antwoorden worden opgeslagen in de VARIABELEN
	input = prompt("wat wilt u bestellen?");
	if (input == "fris") {
		var newFris = parseInt(prompt("hoeveel fris wilt u bestellen?"));
		fris = fris + newFris;
		console.log(fris , "x" , PRICEFRIS);
	}
	else if (input == "bier"){
		var newBier = parseInt(prompt("hoeveel bier wilt u bestellen?"));
        bier = bier + newBier;
		console.log(bier , "x" , PRICEBIER);
	}
	else if (input == "wijn"){
		var newWijn = parseInt(prompt("hoeveel wijn wilt u bestellen?"));
		wijn = wijn + newWijn;
		console.log(wijn , "x" , PRICEWIJN);
	}
	if (input == "snack"){
		var newSnack = parseInt(prompt("Hoeveel wilt u toevoegen?", "8 of 16"));
		snack = snack + newSnack;
		var newSnackschaal = parseInt(prompt("hoeveel bitterbal schalen van " + snack + " " + "wilt u bestellen?" ));
		snackschaal = snackschaal + newSnackschaal;
		console.log(snackschaal*snack, "x" , PRICESNACK);
	}
}


var frisPrice = fris*PRICEFRIS;
var bierPrice = bier*PRICEBIER; 
var wijnPrice = wijn*PRICEWIJN;
var snackPrice = snackschaal*PRICESNACK
var totalPrice = frisPrice+bierPrice+wijnPrice+snackPrice;		//hier word het totaal bedrag uitgerekent.

/*Prijsweergave en berekening */
document.write("U heeft"," ", fris," ", "fris.", " ","€", frisPrice);
document.write("<br><br>");		
document.write("U heeft"," ", bier," ", "bier.", " ","€", bierPrice);
document.write("<br><br>");					//"<br><br>" staat voor een dubble ENTER.
document.write("U heeft"," ", wijn," ", "wijn.", " ","€", wijnPrice);
document.write("<br><br>");		
document.write("U heeft"," ", snack," ", "snacks.", " ","€", snackPrice);
document.write("<br><br>", "De totale prijs is €", totalPrice);