//hacer que si menten 2 productos iguales salga el numero X2
//cuadno meta un valor ya existente me pregunte que si estoy seguro de querer amunetar al X2


var enviar = document.querySelector('.enviar');
var datos = enviar.addEventListener('click', evento);
var tituloDeLista = document.getElementsByClassName('DeItems')[0];
var botonLimpiarTodo = document.getElementsByClassName('btn-clear')[0];
var listaItems = document.getElementsByClassName('items');
var divTitulo = document.getElementsByClassName('divDeParrafoError');
var btn_contenedor = document.getElementsByClassName('btn-contenedor')[0];

function evento(){
  var buscador = document.getElementById('buscador').value;
  var largo = localStorage.length;

  expresiones = /^[A-Z]+$/i;

  if(buscador === "" || buscador.length < 3 || buscador.length > 15 || !expresiones.test(buscador)){
     var creadorDeError = document.createElement('P');
     creadorDeError.innerHTML='Hola, puedes meter un dato correto principe(o princesa)?';
    creadorDeError.classList.add('ErrorP')
    divTitulo[0].appendChild(creadorDeError);
    var ErrorP = document.getElementsByClassName('ErrorP') 
    
    setTimeout(function(){
      var divTitulo = document.getElementsByClassName('divDeParrafoError')[0];
      var ErrorP = document.getElementsByClassName('ErrorP')[0];

      divTitulo.removeChild(ErrorP)
    }, 4555)
} else if (localStorage.length >= 0) {
    for(i=largo; i <= largo; i++){
    localStorage.setItem(i, buscador);
    var elementosDelLocalStorage = localStorage.getItem(i)
    }
    
    console.log(elementosDelLocalStorage)
    var crearParrafoDeItem = document.createElement('p'),
        botonEliminar = document.createElement('button'),
        divDeBotones = document.createElement('div'),
        botonEditar = document.createElement('button');

        crearParrafoDeItem.classList.add('parrafoCreado')
        divDeBotones.classList.add('divDeBotones')
        botonEliminar.classList.add('botonEliminar')
        botonEditar.classList.add('botonEditar');
    
    crearParrafoDeItem.innerHTML=elementosDelLocalStorage;
    listaItems[0].appendChild(crearParrafoDeItem)
    divDeBotones.appendChild(botonEditar)
    divDeBotones.appendChild(botonEliminar)
    crearParrafoDeItem.appendChild(divDeBotones);

    
    
    tituloDeLista.style.display='block';
    botonLimpiarTodo.style.display='block';


    

}
  
}

//limpar todo
 eliminarYrefrescar=()=>{ localStorage.clear() };
 botonLimpiarTodo.addEventListener('click', eliminarYrefrescar());

//agregar botones en los itmes creados.


