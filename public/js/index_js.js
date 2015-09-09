$(document).ready(function() {
    $('#panel1').collapse({'toggle': false});

    $('#panel2').collapse({'toggle': false});
    $('#panel3').collapse({'toggle': false});
    $('#linkpanelnum1').attr('href', '#');
    $('#linkpanelnum2').attr('href', '#');
    $.material.init();
    inicializarEdades();


});
function inicializarEdades() {
  var edad = document.getElementById("seleccionar-edad");
  var i = 0
  for(i = 0; i<=100; i++) {
      edad.innerHTML = edad.innerHTML + '<option value="edad' + i + '">'+ i + '</option> ';

  }
  edad.innerHTML = edad.innerHTML + '<option value="edadmas100">101+</option> ';
}
function onPanel(yo) {
    var yourSelect = document.getElementById( "seleccionar-ciudad" );
    if (yourSelect.options[ yourSelect.selectedIndex ].value == "Seleccione") {
        alert("No ha seleccionado la ciudad");
        //$('.abrirConCiudad').collapse('show');
        $('.abrirConCiudad').collapse('hide');
        $('#linkpanelnum1').attr('href', '#');
        $('#linkpanelnum2').attr('href', '#');
    }
    else{
        $('#linkpanelnum1').attr('href', '#panel1');
        $('#linkpanelnum2').attr('href', '#panel2');

    }
  }
  function cambioSelect(yo){
    if (yo.options[ yo.selectedIndex ].value == "Seleccione") {
      $('.abrirConCiudad').collapse('hide');
    }
  }
