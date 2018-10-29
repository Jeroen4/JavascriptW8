var aantalFris = 0;
var aantalBier = 0;							
var aantalWijn = 0;
var invoer;

const FRISPRIJS =2.50;
const BIERPRIJS =3.50;															
const WIJNPRIJS =4.00;



while(invoer != "stop"){
	invoer = prompt("wat wilt u bestellen");
	if (invoer == "fris") {
		aantalFris = aantalFris + prompt("hoeveel fris wilt u bestellen?")
		console.log(aantalFris, FRISPRIJS)
	}
	else if(invoer == "bier"){
		aantalBier = prompt("hoeveel bier wilt u bestellen?")
		console.log(aantalBier, BIERPRIJS)
	}
	else if (invoer == "wijn"){
		aantalBier = prompt("hoeveel wijn wilt u bestellen?")
		console.log(aantalWijn, WIJNPRIJS)
	}
}


var priceFris = aantalFris*FRISPRIJS;
var priceBier = aantalBier*BIERPRIJS;											
var priceWijn = aantalWijn*WIJNPRIJS;
var totalPrice = priceFris+priceBier+priceWijn;


document.write( aantalFris ," ", "fris" ," ", "€" , aantalFris*FRISPRIJS); 
document.write("<br>", aantalBier ," ",  "bier" ," ", "€" , aantalBier*BIERPRIJS);
document.write("<br>", aantalWijn ," ",  "wijn" ," ", "€" , aantalWijn*WIJNPRIJS);

document.write("<br><br>Het totaalbedrag is"," ","€",totalPrice, ",-");	
