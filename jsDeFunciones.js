//hacer que si menten 2 productos iguales salga el numero X2
//cuadno meta un valor ya existente me pregunte que si estoy seguro de querer amunetar al X2
//cuando le undan el boton de eliminar solo un item (o/y todos) salga un promt preguntando si está seguro
// localStorage.forEach(aquiDeberiaIrElEvento(o posicion, al que le hice click) obtener la key mediante la posicion.)

var enviar = document.querySelector('.enviar');
var tituloDeLista = document.getElementsByClassName('DeItems')[0];
var botonLimpiarTodo = document.getElementsByClassName('btn-clear')[0];
var listaItems = document.getElementsByClassName('items')[0];
var divTitulo = document.getElementsByClassName('divDeParrafoError');
var btn_contenedor = document.getElementsByClassName('btn-contenedor')[0];


//validacion si exiten objetos en el local
//creo listado vacio para meter ahi datos del local, tmabien creo un condicional por si hay datos guardados en el localStorage se los meta a el array vacia 'litado'

var arrayVacio = []; //array vacio para no repetir datos.
var listado = [];

if (localStorage.length>0) {
    var listado = localStorage.getItem('items');
    listado = listado.split(',')
    botonLimpiarTodo.style.display='block';
};


//aqui para escribir lo que ya existe en el local:
buscarYpintar(listado);

var datos = enviar.addEventListener('click', evento);
function evento(){

  var buscador = document.getElementById('buscador').value;


  expresiones = /[a-z]+\s?/i; //el mas es para reperit lo de al lado lo mismo que {1,} que significa una vez o mas con el {} podemos poner limite mor

  if(buscador === "" || buscador.length < 3 || buscador.length > 22 || !expresiones.test(buscador)){
    var creadorDeError = document.createElement('P');
    creadorDeError.innerHTML='Hola, puedes meter un dato correto principe(o princesa)?';
    creadorDeError.classList.add('ErrorP')
    divTitulo[0].appendChild(creadorDeError); 
    
    setTimeout(function(){
      var divTitulo = document.getElementsByClassName('divDeParrafoError')[0];
      var ErrorP = document.getElementsByClassName('ErrorP')[0];

      divTitulo.removeChild(ErrorP)
    }, 4555)
} else if (localStorage.length >= 0){
  //funcion para crear objeto con valor de input y poder manipular mas facil en el local.
  crearItem(buscador);

  localStorage.setItem('items', listado);
  
  console.log(arrayVacio)

  ultimoArr(arrayVacio);

  }
}

function ultimoArr(ultimo){
  var newArr = ultimo[ultimo.length-1];
  newArr = newArr.split(',');
  buscarYpintar(newArr)
  return newArr
}


//funcion donde el parametro va hacer el array que queramos pintar en pantalla
function buscarYpintar(arrayParaCorrerYpintar){
  arrayParaCorrerYpintar.forEach(x=>(
  listaItems.innerHTML+=
  `<div class='crearDivDeContenedorParrafoAndBotones'>
    <p class='parrafoCreado'>${x}</p>
    <div class='divDeBotones'>
      <button class='botonEliminar'></button>
      <button class='botonEditar'></button>
    </div>
  </div>`
    )
  )
};

//funcion para validar y meter datos a los array que luego van a pintar
  function crearItem(item) {

    
    if(listado.indexOf(item)===-1) {

        listado.push(item)
        arrayVacio.push(item)
        botonLimpiarTodo.style.display='block';    
      } else {

        if(confirm('principe ya existe el item, lo quiere meter de nuevo?')===true) {
        listado.push(item)
        arrayVacio.push(item)
        botonLimpiarTodo.style.display='block';
        }

      }

    return listado, arrayVacio;
}


// //limpiar todos los items:

botonLimpiarTodo.addEventListener('click', borrarTodo);
function borrarTodo(){
    localStorage.clear()
    listaItems.innerHTM=''
    window.location.reload()
    }

//editar y/o eliminar elemento especifico:
listaItems.addEventListener('click', (e)=>{
  e.preventDefault();
  //importante!!! aqui en el "e"(evento al que se le hace click) entro a el path hasta
  //encontrar el nodo donde sale el dato metido.
  let claseDondePresiono = e.target.className;

  if(claseDondePresiono==='botonEliminar'){
    let datoDeParrafoCreado = e.path[2].firstElementChild.firstChild.data;
    

    eliminarDB(datoDeParrafoCreado);
    ultimoArr(listado);

    function eliminarDB(itemParaBorrar){

      let encontrar = listado.indexOf(itemParaBorrar);//obtenemos el sitio done esta lo que buscamos en el array.
      listado.splice(encontrar, 1)
      localStorage.setItem('items', listado)
      return listado;        
      };

  }
    else if (claseDondePresiono==='botonEditar'){
    console.log('editar')
    }

  //este sirve para ver a que le he dado clik (elemento hijo, entrando por el path)
  //conclucion click al padre divDeParrafos y botones para luego entrar a hijo uno (donde está el texto) y tomar su valor.
      //console.log(e.path[2].firstElementChild.firstChild.data)
  //este para ver la calse del elemento al que le di click
      //console.log(e.target.className)

    }
  );
