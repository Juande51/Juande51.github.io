$(document).ready(function(){
    //alert("Hola");

    $("#mil").keyup(function () {
   var value = $(this).val();
   var resultado1 = value * 1000;
   $("#resul1").val(resultado1);
   });

   $("#quinientos").keyup(function () {
   var value = $(this).val();
   var resultado2 = value * 500;
   $("#resul2").val(resultado2);
   });

   $("#docientos").keyup(function () {
   var value = $(this).val();
   var resultado3 = value * 200;
   $("#resul3").val(resultado3);
   });

   $("#cien").keyup(function () {
   var value = $(this).val();
   var resultado4 = value * 100;
   $("#resul4").val(resultado4);
   });

   $("#cincuenta").keyup(function () {
   var value = $(this).val();
   var resultado5 = value * 50;
   $("#resul5").val(resultado5);
   });

   $("#veinte").keyup(function () {
   var value = $(this).val();
   var resultado6 = value * 20;
   $("#resul6").val(resultado6);
   });


   $("button").click(function(){
       //alert("hola");
       var total=parseFloat($("#resul1").val()) + parseFloat($("#resul2").val())+parseFloat($("#resul3").val())+parseFloat($("#resul4").val())+parseFloat($("#resul5").val())+parseFloat($("#resul6").val());
       $("#total").val(total);
   })
   

 });