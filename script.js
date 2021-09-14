
// Peticiones GET
function cargar(pagina) { //funcion de cargar 
    var ajax = new XMLHttpRequest() 
    ajax.open("get", pagina, true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            document.getElementById("cuerpo").innerHTML = ajax.responseText;
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
    ajax.send(); 
}


// Peticion GET con FETCH
function cargarFetch(abrir) {
    let cantidad = document.getElementById('cantidad').value;
	fetch(`${abrir}?cantidad=${cantidad}`, {
		method: 'get'
	}).then(function (response) {
		return response.text();
	}).then(function (text) {
		document.getElementById('cuerpo').innerHTML = text;
		
	}).catch(function (err) {
		alert('error');
	});

    
}


function introducirDatos(){
    let arrayTitulo = []
    let arrayAutor = []
    let arrayEditorial = []
    let arrayAnio = []
    let cant = document.getElementById('cantidad').value

    for (let i = 0; i < cant; i++) {
        arrayTitulo.push(document.getElementById(`titulo${i}`).value) 
        arrayAutor.push(document.getElementById(`autor${i}`).value) 
        arrayEditorial.push(document.getElementById(`editorial${i}`).value) 
        arrayAnio.push(document.getElementById(`anio${i}`).value) 
    }
    data = {
        titulos: arrayTitulo,
        autores: arrayAutor,
        editoriales: arrayEditorial,
        anios: arrayAnio,
        cant :cant
    };

    var ajax = new XMLHttpRequest() 
    ajax.open("post", "insertarMultiple.php", true); 
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            //  document.getElementById("cuerpo").innerHTML = ajax.responseText;
            let respuesta = ajax.responseText;
            if(respuesta !='error'){
                cargar('lista.php')
            }
        }
    }
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    ajax.send(JSON.stringify(data)); 
}



function actualizar(){
    let arrayTitulo = []
    let arrayAutor = []
    let arrayEditorial = []
    let arrayAnio = []
    let arrayId = []
    let cant = document.getElementById('cantEditar').value

    for (let i = 0; i < cant; i++) {
        arrayTitulo.push(document.getElementById(`titulo${i}`).value) 
        arrayAutor.push(document.getElementById(`autor${i}`).value) 
        arrayEditorial.push(document.getElementById(`ideditorial${i}`).value) 
        arrayAnio.push(document.getElementById(`anio${i}`).value) 
        arrayId.push(document.getElementById(`id${i}`).value) 

    }
    data = {
        titulos: arrayTitulo,
        autores: arrayAutor,
        editoriales: arrayEditorial,
        anios: arrayAnio,
        id: arrayId,
        cant :cant
    };

    var ajax = new XMLHttpRequest() 
    ajax.open("post", "editarMultiple.php", true); 
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            let respuesta = ajax.responseText;
            if(respuesta !='error'){
                cargar('lista.php')
            }
        }
    }
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    ajax.send(JSON.stringify(data)); 
}


function ordernar(opcion){
    cargar(`listarOrdenado.php?opcion=${opcion}`);
}