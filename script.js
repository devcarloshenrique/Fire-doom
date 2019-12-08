
function arrayCores(){

	const palheta = {
		cor01: "#FCEAB3",
		cor07: "#FFEA8D", cor08: "#FFEE56", cor09: "#FFDB4C", cor10: "#FEC543",
		cor11: "#FFB035", cor12: "#FF9A1C", cor13: "#FF8A13", cor14: "#FC760B", cor15: "#FF6500",
		cor16: "#DA5508", cor17: "#B54E00", cor18: "#9E3D00", cor19: "#8E2800", cor20: "#783008",
		cor21: "#5A2304", cor22: "#411600", cor23: "#1A0B00", cor24: "#000000", cor24: "#000000",
		cor25: "#000000", cor26: "#000000", cor27: "#000000", cor28: "#000000", cor29: "#000000",
	}

	const array = []

	for( i in palheta ) {

		array.push( palheta[i] ) 

	}

	return array

}


function estruturaArray() {

	var colunas = 50;
	
	var linhas = arrayCores().length;

	// var intensidade = 1;

	var table = "<table>";

	for (let a = 1; a <= linhas; a++){

		table += "<tr class='linhas'>";

		for (let b = 1; b <= colunas; b++){

			table += 
				`<td class="colunas">
				
				</td>`;
					// ${intensidade == arrayCores().length  ? intensidade : intensidade - Math.floor(Math.random() * 4)}

		}

		table += "</tr>";

	}

	table += "</table>";
	
	document.getElementById("table").innerHTML = table;

}
	
	function inserirCores(colunas){
	
		var estilo = document.querySelectorAll('.colunas')

		var array = Array.from(estilo)

		var marcador = colunas

		var chave = arrayCores().length - 1 ;

		for (i in array){

			if ( i == marcador ){
				
				marcador += colunas

				chave -= 1

				array[i].style.backgroundColor = `${arrayCores()[
					
					chave - Math.floor(Math.random() * 3) >= 0 ? 
					chave - Math.floor(Math.random() * 3) :  0 

					]}`;


			} else {

				array[i].style.backgroundColor = `${arrayCores()[
					
					chave - Math.floor(Math.random() * 3) >= 0 ? 
					chave - Math.floor(Math.random() * 3)  : 0

					]}`;	

					console.log(chave)

			}

		}
	}
	
	
	estruturaArray()

	setInterval(() => inserirCores(50), 1);	
