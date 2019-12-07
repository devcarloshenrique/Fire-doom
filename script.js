

function estruturaArray() {

	var colunas = 10;
	
	var linhas = 37;

	var id =  (colunas * linhas)

	var intensidade = 0;

	var table = "<table border='1' cellpadding='10'>";

	for (let a = 1; a <= linhas; a++ , intensidade++){

		table += "<tr>";

		for (let b = 1; b <= colunas; b++){

			table += 
				`<td>
				
					${intensidade == 36  ? intensidade : intensidade - Math.floor(Math.random() * 4)}
				
				</td>`;

		}
		table += "</tr>";

	}

	table += "</table>";


	 document.getElementById("table").innerHTML = table;

	
}

	
	estruturaArray();

	setInterval(() => estruturaArray() , 100);	