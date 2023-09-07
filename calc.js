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

   $("#diez").keyup(function (){
    var value=$(this).val();
    var resultado7=value * 10;
    $("#resul7").val(resultado7);
   });

   $("#cinco").keyup(function (){
    var value=$(this).val();
    var resultado8=value * 5;
    $("#resul8").val(resultado8);
   });

   $("#dos").keyup(function (){
    var value=$(this).val();
    var resultado9=value * 2;
    $("#resul9").val(resultado9);
   });

   $("#uno").keyup(function (){
    var value=$(this).val();
    var resultado10=value * 1;
    $("#resul10").val(resultado10);
   });

   $("#ccentavo").keyup(function (){
    var value=$(this).val();
    var resultado11=value * .5;
    $("#resul11").val(resultado11);
   });


   $("button").click(function(){
       //alert("hola");
       var total=parseFloat($("#resul1").val()) + parseFloat($("#resul2").val())+parseFloat($("#resul3").val())+parseFloat($("#resul4").val())+parseFloat($("#resul5").val())+parseFloat($("#resul6").val())+parseFloat($("#resul7").val())+parseFloat($("#resul8").val())+parseFloat($("#resul9").val())+parseFloat($("#resul10").val())+parseFloat($("#resul11").val());
       $("#total").val(total);
   })
   

 });