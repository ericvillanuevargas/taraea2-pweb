//div donde se almacenaran los parrafos.
let Historial = document.getElementById('Historial')
//arreglo que almacenrá los textos.
let textos = []; 

function calcular(v){
    //El string traido desde el HTML se evalúa y da un resultado guardado en data.
    data = v + " = " + eval(v);
    textos.push(data);
    if(textos != null){
        //limpiamos el almacen (para evitar redundancias) y lo igualamos a textos.
         localStorage.clear();
         localStorage.setItem('historia', JSON.stringify(textos));
    };
    Mostrar();
    return eval(v)
}
function Mostrar(){
    //Extraemos todo los textos del almacen
    textos = JSON.parse(localStorage.getItem('historia'));
        //Si el historial esta lleno lo reiniciamos
        if (Historial.childElementCount > 0){
            Historial.innerHTML="Historial";

        }
        //Si en el almacen no hay nada transformamos a -textos- en un arreglo para evitar problemas en el metodo calcular
        if(textos != null){
        textos.forEach(element => {
            parrafo = document.createElement('p');
            parrafo.innerText = element;
            Historial.appendChild(parrafo)
        });
        }
        else{
            textos = []; 
        }
}

function borrar(b){
    //agarra el string actual del tablero y le corta un digito
    return b.slice(0, b.length-1)
}

function limpiar(){
    //Limpia el almacen y muestra todo de vuelta.
    localStorage.clear();
    Mostrar();
}

//Cuando cargamos la pagina se muestra todo.
window.onload = function() {
    Mostrar();
};