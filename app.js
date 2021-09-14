function cargarCalendario(pagina) {
    var ajax = new XMLHttpRequest() 
    ajax.open("get", pagina, true); 
    ajax.onreadystatechange = function () { 
        if (ajax.readyState == 4) {
        
            document.getElementById("contenido").innerHTML = ajax.responseText;
            select = document.getElementById('anio');
            for (let index = 1975; index <=2021; index++) {
                option = document.createElement('option');
                option.value = index;
                option.innerHTML=index;
                select.appendChild(option);
              
            }
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8"); 
    ajax.send(); 
}
function cargar2(pagina) {
    var ajax = new XMLHttpRequest() 
    ajax.open("get", pagina, true); 
    ajax.onreadystatechange = function () { 
        if (ajax.readyState == 4) {
            document.getElementById("resultado").innerHTML = ajax.responseText;
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8"); 
    ajax.send(); 
}
function calendario(){
    let mes = document.getElementById('mes').value;
    let anio = document.getElementById('anio').value;
    let url = 'calendario.php?mes='+mes+'&anio='+anio;
    var ajax = new XMLHttpRequest() 
    ajax.open("get", url, true); 
    ajax.onreadystatechange = function () { 
        if (ajax.readyState == 4) {
            document.getElementById("resultado").innerHTML = ajax.responseText;
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8"); 
    ajax.send(); 
} 

function ordenar(pagina){
    var ajax = new XMLHttpRequest() 
    ajax.open("get", pagina, true); 
    ajax.onreadystatechange = function () { 
        if (ajax.readyState == 4) {
            document.getElementById("resultado").innerHTML = ajax.responseText;
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8"); 
    ajax.send(); 
}