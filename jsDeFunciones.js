var enviar = document.querySelector('.enviar'),
   tituloDeLista = document.getElementsByClassName('DeItems')[0],
   botonLimpiarTodo = document.getElementsByClassName('btn-clear')[0],
   listaItems = document.getElementsByClassName('items')[0],
   divTitulo = document.getElementsByClassName('divDeParrafoError'),
   btn_contenedor = document.getElementsByClassName('btn-contenedor')[0],
   arrayVacio = [],
   listado = [];

if (localStorage.length>0) {

    var listado = localStorage.getItem('items');

    listado = listado.split(',')
    botonLimpiarTodo.style.display='block';
};
buscarYpintar(listado);

var datos = enviar.addEventListener('click', evento);
function evento(){

var buscador = document.getElementById('buscador').value,
expresiones = /[a-z]+\s?/i;

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

  crearItem(buscador);
  localStorage.setItem('items', listado);
  ultimoArr(arrayVacio);
  }
}

function ultimoArr(ultimo){
  var newArr = ultimo[ultimo.length-1];
    newArr = newArr.split(',');
    buscarYpintar(newArr)
    return newArr
}

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

botonLimpiarTodo.addEventListener('click', borrarTodo);
function borrarTodo(){
      localStorage.clear()
      listaItems.innerHTM=''
      window.location.reload()
    }

listaItems.addEventListener('click', (e)=>{
  e.preventDefault();
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
 }
);