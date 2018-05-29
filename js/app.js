$( document ).ready(function() { //Las buenas practicas nos recomiendan que al usar Jquery crear una funcion document.ready y meter todo nuestro codigo dentro de ella.
  // ...... Variables Globales ......
  scoreTotal = 0;
  // ...... Parpadeo de titulo ......
  //llamamos a la funcion parpadear que ejecuta el parpadeo del titulo
  parpadear()
  function parpadear(){ //generamos una funcion que cambie el color del titulo y llamamos a la funcion regresa.
    $(".main-titulo").animate({
      color: "white",
    },"slow", regresa)
  }
  function regresa(){ //Regresa el titulo al color original y llamamos nuevamente a la funcion parapdear para hacer un ciclo interminable.
    $(".main-titulo").animate({
      color: "yellow",
    },"slow", parpadear)
  }
  // ...... Final parpadeo de titulo ......

  //...... incialización de Juego al presionar boton ......
  $(".btn-reinicio").click(function (){
    valorBoton = $(this).text(); //Verificamos el tipo de boton
    if (valorBoton == "Iniciar") { // Si el boton es iniciar incifar juego
      for (var f = 0; f < 7; f++) { //nuestra matriz sera de 7 filas y 7 cloumnas. Por lo que hacemos un ciclo for para que nos repita el proceso de abajo 7 veces
        for (var i = 0; i <= 7; i++) { //aqui generamos 5 numeros aleatorios y los imprimimos en cada columna
          num = Math.floor((Math.random() * 4) + 1);
          $(".col-"+i).append("<img class= 'elemento' src='image/"+num+".png'>")
        }
      }
      $(this).text("Reiniciar") //Cambiamos el contenido del boton
      
      at = false //el ciclo do-while ejeucta el codigo al menos una vez.
      do {
        analisaTablero() //analisimos el tablero hasta que no existan coincidencias
      } while (at == true)

    } else if (valorBoton == "Reiniciar") { //Si el boton es reiniciar recargamos la pagina
        location.reload()
    }
  })
  // ...... final de incializacion de juego ......

  // ...... Analisis de dulces ......
  function analisisColumnas (){ //haremos una funcion que recorra, por columna y en grupos de tres, las imagenes. En caso de ser iguales cambiara su clase.
    ac = false
    for (var c = 1; c <= 7; c++) {
      for (var f = 1; f <= 7; f++) {
        imagen1 = $(".col-"+c).children("img:nth-last-child("+f+")").attr("src")
        imagen2 = $(".col-"+c).children("img:nth-last-child("+(f+1)+")").attr("src")
        imagen3 = $(".col-"+c).children("img:nth-last-child("+(f+2)+")").attr("src")
        if (imagen1 == imagen2 && imagen2 == imagen3) {
          $(".col-"+c).children("img:nth-last-child("+f+")").attr("class", "elemento igual")
          $(".col-"+c).children("img:nth-last-child("+(f+1)+")").attr("class", "elemento igual")
          $(".col-"+c).children("img:nth-last-child("+(f+2)+")").attr("class", "elemento igual")
          ac = true
        }
      }
    }
    return ac
  }
  function analisisFilas (){ //haremos una funcion que recorra, por filas y en grupos de tres, las imagenes. En caso de ser iguales cambiara su clase.
    af = false
    for (var f = 1; f <= 7; f++) {
      for (var c = 1; c <= 7; c++) {
        imagen1 = $(".col-"+f).children("img:nth-last-child("+c+")").attr("src")
        imagen2 = $(".col-"+(f+1)).children("img:nth-last-child("+c+")").attr("src")
        imagen3 = $(".col-"+(f+2)).children("img:nth-last-child("+c+")").attr("src")
        if (imagen1 == imagen2 && imagen2 == imagen3) {
          $(".col-"+f).children("img:nth-last-child("+c+")").attr("class", "elemento igual")
          $(".col-"+(f+1)).children("img:nth-last-child("+c+")").attr("class", "elemento igual")
          $(".col-"+(f+2)).children("img:nth-last-child("+c+")").attr("class", "elemento igual")
          af = true
        }
      }
    }
    return af
  }
  // ------ Funcion para analisar el tablero ------
  function analisaTablero () {
    rac = analisisColumnas()
    raf = analisisFilas()
    if (rac == true || raf == true) {
      eliminarDulces()
    } else {
      at = false
      return at
    };
  }
  // ------ Funcion para eliminar dulces ------
  function eliminarDulces (){
      $(".igual").hide("pulsate",1000, function () { //sintaxis jqueryUI .hide( effect [, options ] [, duration ] [, complete ] )
        // Es necesario conocer el numero de elementos para sumar puntaje por lo que...
        var score = $(".igual").length
        //una vez obtendio el valor removemos del dom los elementos, pues estan escondidos, pero aun siguen en el DOM
        $("img").remove(".igual")
        scoreTotal = scoreTotal + score
        $("#score-text").html(score) //Cambiamos puntuacion en el DOM
        at = true
        return at
      })
  }




})
