//Abrir robapaginas

var fondo = document.getElementById('robaPaginasFondoNoVisible');
var intervalo = setInterval(crearVelo,2000);


function crearVelo(e){
	fondo.setAttribute('id','robaPaginasFondo');
}

//cerrar robapaginas

var botonCierre = document.querySelector('.cierre');
botonCierre.addEventListener('click', cerrarRoba);

function cerrarRoba(e){
	fondo.setAttribute('id','robaPaginasFondoNoVisible');
	clearInterval(intervalo);
}

