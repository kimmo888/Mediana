let lista1 = [];

let mediana =0;


//& fin de la function el botón para agregar datos al array-------

//% ----se reutiliza esta function de promedio para ver los dos valores de la media
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(//en ves de for se utiliza un método utilizando una function anónima
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
//%--------------------------------------------------------------

function esPar(numerito) {
    if (numerito % 2 === 0) {
    return true;
    } else {
    return false;
    }
    console.log('esPra');
}//divide para ver si es par o no el arreglo

function Mediana(){

    const mitadLista1 = parseInt(lista1.length / 2);// es para sacar la mitad de los elementos del array o valores dados para poder sacar la media

    lista1.sort(function(a,b){
        return a-b;
    });

    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2,]);
        mediana = promedioElemento1y2;
        console.log("par");
    } else {
        mediana = lista1[mitadLista1];
    }// function que hace la media comprobando los datos centrales del array

    const resultadoMediana = document.getElementById("mediana");
    resultadoMediana.innerText = "La mediana de los valores ingresados es: " + mediana;
}

//---------------------------------------------------------------------
//& esta function es para el botón poder ingresar los datos al array
function pushArray(){
    const datosArray = document.getElementById("InputArray").value;

    const convertirValor = parseInt(datosArray);
    lista1.push(convertirValor);
    console.log(lista1);
    document.getElementById("InputArray").value = ""; //para que los valores de los inputs se borren
    document.getElementById("table").innerHTML += '<tbody><td>'+ convertirValor ;
}
function submitForm(event){
    event.preventDefault();
}