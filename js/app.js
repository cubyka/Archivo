$( document ).ready(function() { //Las buenas practicas nos recomiendan que al usar Jquery crear una funcion document.ready y meter todo nuestro codigo dentro de ella.
    //Parpadeo de titulo
    //llamamos a la funcion parpadear que ejecuta el parpadeo del titulo
    parpadear();
    function parpadear(){ //generamos una funcion que cambie el color del titulo y llamamos a la funcion regresa.
      $(".main-titulo").animate({
        color: "white",
      },"slow", regresa);
    }
    function regresa(){ //Regresa el titulo al color original y llamamos nuevamente a la funcion parapdear para hacer un ciclo interminable.
      $(".main-titulo").animate({
        color: "yellow",
      },"slow", parpadear);
    };

    // incialización de Juego
    $(".btn-inicio").click(function (){
      for (var f = 0; f < 5; f++) { //nuestra matriz sera de 7 filas y 5 cloumnas. Por lo que hacemos un ciclo for para que nos repita el proceso de abajo 7 veces
        for (var i = 0; i <= 7; i++) { //aqui generamos 5 numeros aleatorios y los imprimimos en cada columna
          num = Math.floor((Math.random() * 4) + 1);
          $(".col-"+i).append("<img src='image/"+num+".png'>");
        }
      }
      $(this).text("Reiniciar"); //Cambiamos el contenido del boton
      $(this).attr("class", "btn-reinicio");
      analisisTablero();
      console.log(res1);
    });

    // Reinicio de juego
    $(".btn-reinicio").click(function (){
      location.reload();
    });

    //Analisis de dulces
    function analisisTablero (){
      res1 = $("[class^='col-']").children("img").attr("src");
    }
});
