$( document ).ready(function() { //Las buenas practicas nos recomiendan que al usar Jquery crear una funcion document.ready y meter todo nuestro codigo dentro de ella.
    //Parpadeo de titulo
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

    // incialización de Juego al presionar boton
    $(".btn-reinicio").click(function (){
      valorBoton = $(this).text(); //Verificamos el tipo de boton
      if (valorBoton == "Iniciar") { // Si el boton es iniciar incifar juego
        for (var f = 0; f < 5; f++) { //nuestra matriz sera de 7 filas y 5 cloumnas. Por lo que hacemos un ciclo for para que nos repita el proceso de abajo 7 veces
          for (var i = 0; i <= 7; i++) { //aqui generamos 5 numeros aleatorios y los imprimimos en cada columna
            num = Math.floor((Math.random() * 4) + 1);
            $(".col-"+i).append("<img src='image/"+num+".png'>")
          }
        }
        $(this).text("Reiniciar"); //Cambiamos el contenido del boton
        analisisColumnas()
        console.log(imagenes)
      } else if (valorBoton == "Reiniciar") { //Si el boton es reiniciar recargamos la pagina
          location.reload()
      }
    })
    //Analisis de dulces
    var imagenes =[]
    function analisisColumnas (){
      for (var i = 0; i <= 5; i++) {
        imagenes.push = $("[class^='col-']").children("img:nth-last-child("+i+")").attr("src")
      }

      // imagen1 = $("[class^='col-']").children("img:nth-last-child(1)").attr("src")
      // imagen2 = $("[class^='col-']").children("img:nth-last-child(2)").attr("src")
      // imagen3 = $("[class^='col-']").children("img:nth-last-child(3)").attr("src")
    }

})
