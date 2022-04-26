//hacer que si menten 2 productos iguales salga el numero X2
//cuadno meta un valor ya existente me pregunte que si estoy seguro de querer amunetar al X2
//cuando le undan el boton de eliminar solo un item (o/y todos) salga un promt preguntando si está seguro
// localStorage.forEach(aquiDeberiaIrElEvento(o posicion, al que le hice click) obtener la key mediante la posicion.)

var enviar = document.querySelector('.enviar');
var datos = enviar.addEventListener('click', evento);
var tituloDeLista = document.getElementsByClassName('DeItems')[0];
var botonLimpiarTodo = document.getElementsByClassName('btn-clear')[0];
var listaItems = document.getElementsByClassName('items');
var divTitulo = document.getElementsByClassName('divDeParrafoError');
var btn_contenedor = document.getElementsByClassName('btn-contenedor')[0];
var items = [];

function evento(){
  var buscador = document.getElementById('buscador').value;
  var largo = localStorage.length;

  expresiones = /[a-z]+\s?/i; //el mas es para reperit lo de al lado lo mismo que {1,} que significa una vez o mas con el {} podemos poner limite mor

  if(buscador === "" || buscador.length < 3 || buscador.length > 22 || !expresiones.test(buscador)){
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
} else if (localStorage.length >= 0){
  //funcion para crear objeto con valor de input y poder manipular mas facil en el local.

  

  var crearItem = (item)=>{

  var fnDeArrayObjetos = {
    item : item
  }
  if(items.indexOf(item)===-1) {
    if(confirm('principe ya existe el item, lo quiere meter de nuevo?')===true){
    items.push(fnDeArrayObjetos)
    miremos
    }else{
      miremos
    }
  }
  return items;
}

//ciclo for, que va a cumplir funcion ayax de actualizar cada vez se se de click
//en aceptar para imprimir a lo que alla en ese objeto.


//agregar botones y los itmes creados.

    var crearParrafoDeItem = document.createElement('p'),
        crearDivDeContenedorParrafoAndBotones = document.createElement('div'),
        divDeBotones = document.createElement('div'),
        botonEliminar = document.createElement('button'),
        botonEditar = document.createElement('button');

        crearDivDeContenedorParrafoAndBotones.classList.add('crearDivDeContenedorParrafoAndBotones')
        crearParrafoDeItem.classList.add('parrafoCreado')
        divDeBotones.classList.add('divDeBotones')
        botonEliminar.classList.add('botonEliminar')
        botonEditar.classList.add('botonEditar');
    
    divDeBotones.appendChild(botonEditar)
    divDeBotones.appendChild(botonEliminar)
    crearParrafoDeItem.innerHTML=crearItem(buscador)
    crearDivDeContenedorParrafoAndBotones.appendChild(crearParrafoDeItem)
    crearDivDeContenedorParrafoAndBotones.appendChild(divDeBotones)
    listaItems[0].appendChild(crearDivDeContenedorParrafoAndBotones);

    
    
    tituloDeLista.style.display='block';
    botonLimpiarTodo.style.display='block';

    

    var botonEditarSeleccionado = document.querySelector('.botonEditar');
    botonEditarSeleccionado.addEventListener('click', eventoEditar);

    function eventoEditar(e){
      var seleccionador = getEventTarget(e).parentElement.parentElement;
      var seleccionadorHijoUno = seleccionador.firstElementChild;
      console.log(seleccionadorHijoUno)
    }

//evento seleccionador con el event Event.target...
  function getEventTarget(e) {
    e = e || window.event;
      return e.target || e.srcElement;
    }
  }

}

//limpar todo
 eliminarYrefrescar=()=>{ localStorage.clear() };
 botonLimpiarTodo.addEventListener('click', eliminarYrefrescar());

//Evento eliminar key especifica.


