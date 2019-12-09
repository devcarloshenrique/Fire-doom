const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]

function estruturaArray(colunas , linhas) {

	var colunas = 20;
		
	var linhas = 37;

	var table = "<table boder='1'>";

	for (let a = 1; a <= linhas; a++){

		table += "<tr class='linhas'>";

		for (let b = 1; b <= colunas; b++){

			table += 
				`<td class="colunas">
				
				</td>`;
		}

		table += "</tr>";

	}

	table += "</table>";
	
	document.getElementById("table").innerHTML = table;

}

	function slide1(cores){

		var td = Array.from(document.querySelectorAll('.colunas'))

		var tr = Array.from(document.querySelectorAll('.linhas'))

		var chaveCores = tr.length - 1

		var chaveArray = td.length - 1

		var repetidor = 0

		var efeito = (chaveCores) => {
			
			chaveCores <= 3 ? chaveCores += Math.floor(Math.random() * 4) : chaveCores
			
			chaveCores >= 4 ? chaveCores -= Math.floor(Math.random() * 4) : chaveCores


			return chaveCores
		}

		setInterval(() => {

			let chavesAleatorias = efeito(chaveCores)

			td[chaveArray].style.backgroundColor = `rgb( ${ cores[chavesAleatorias].r }, ${ cores[chavesAleatorias].g }, ${ cores[chavesAleatorias].b } )`


			if(repetidor == 20) {

				chaveCores > 0 ? chaveCores-- : 0
				
				repetidor = 0
			
			} 

			repetidor++
			chaveArray > 0 ? chaveArray-- : 0

		}, 1)

	}

	setInterval(()=> {

		slide1(fireColorsPalette)		

	 },1)

	estruturaArray()

