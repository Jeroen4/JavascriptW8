/*Jeroen Faasse,
  Applicatie Onwikkeling niv 4, Da Vinci college Gorinchem
*/
const PRICEFRIS = 2.00;	
const PRICEBIER = 2.50;		//Prijsweergave van de soorten drankjes.
const PRICEWIJN = 4.00;
const PRICESNACK8 = 5.00;
const PRICESNACK16 = 9.20;

var fris = 0;	
var bier = 0;				
var wijn = 0;				//Alle soorten drankjes beginnen met een aantal van 0;
var schaal8 = 0;
var schaal16 = 0;

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
	else if (input == "snack"){
                var newSchaal8 = parseInt(prompt("kies hoeveel schalen van 8 u wilt."));
                schaal8 = schaal8 + newSchaal8;
                var newSchaal16 = parseInt(prompt("kies hoeveel schalen van 16 u wilt."));
                schaal16 = schaal16 + newSchaal16;
                console.log(schaal8, "x" , PRICESNACK8); 
                console.log(schaal16, "x" , PRICESNACK16);
            }
    
}




var frisPrice = fris*PRICEFRIS;
var bierPrice = bier*PRICEBIER; 
var wijnPrice = wijn*PRICEWIJN;
var snackPrice8 = schaal8*PRICESNACK8;
var snackPrice16 = schaal16*PRICESNACK16;
var totalPrice = frisPrice+bierPrice+wijnPrice+snackPrice8+snackPrice16;		//hier word het totaal bedrag uitgerekent.

/*Prijsweergave en berekening */
document.write("U heeft"," ", fris," ", "fris.", " ","€", frisPrice);
document.write("<br><br>");		
document.write("U heeft"," ", bier," ", "bier.", " ","€", bierPrice);
document.write("<br><br>");					//"<br><br>" staat voor een dubble ENTER.
document.write("U heeft"," ", wijn," ", "wijn.", " ","€", wijnPrice);
document.write("<br><br>");		
document.write("U heeft"," ",schaal8," ", "schalen van 8 bitterballen.", " ", "€", snackPrice8);
document.write("<br><br>");		
document.write("U heeft"," ",schaal16," ", "schalen van 16 bitterballen."," ", "€", snackPrice16);
document.write("<br><br>");	
document.write("<br><br>", "De totale prijs is €", totalPrice);