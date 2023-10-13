$(document).ready(function(){
    //alert("Hola");
    /*localStorage.clear();*/

    /*$("#resul1").val(0);*/

   $("#mil").keyup(function () {
   	var value = $(this).val();
   	var resultado1 = value * 1000;
   	$("#resul1").val(resultado1);
   	/*Almacenar datos*/
   	var Rmil=$("#resul1").val() ?? 0,Rmil2=$("#mil").val() ?? 0;
  	localStorage.setItem('Mil',Rmil);
  	localStorage.setItem('Cantidad1',Rmil2);
  	
   });
   	/*Recuperar datos*/
		var rm=localStorage.getItem('Mil'),rm2=localStorage.getItem('Cantidad1');
		$("#mil").val(rm2);
		$("#resul1").val(rm);
   
  $("#quinientos").keyup(function () {
   	var value = $(this).val();
   	var resultado2 = value * 500;
   	$("#resul2").val(resultado2);
   	/*Almacenar datos*/
   	var RQ=$("#resul2").val() ?? 0,RQ2=$("#quinientos").val() ?? 0;
   	localStorage.setItem('Quin',RQ);
   	localStorage.setItem('Cantidad2',RQ2);
   });
  	/*Recuperar datos*/
  	var RQT=localStorage.getItem('Quin'),RQT2=localStorage.getItem('Cantidad2');
  	$("#quinientos").val(RQT2);
  	$("#resul2").val(RQT);

   $("#docientos").keyup(function () {
   	var value = $(this).val();
   	var resultado3 = value * 200;
  	$("#resul3").val(resultado3);
  	/*Almacenar datos*/
   	var RDO=$("#resul3").val() ?? 0,RDO2=$("#docientos").val() ?? 0;
   	localStorage.setItem('Dosc',RDO);
   	localStorage.setItem('Cantidad3',RDO2);
   });
   /*Recuperar datos*/
  	var RDT=localStorage.getItem('Dosc'),RDT2=localStorage.getItem('Cantidad3');
  	$("#docientos").val(RDT2);
  	$("#resul3").val(RDT);

   $("#cien").keyup(function () {
   	var value = $(this).val();
   	var resultado4 = value * 100;
   	$("#resul4").val(resultado4);
   	/*Almacenar datos*/
   	var RC=$("#resul4").val() ?? 0, RC2=$("#cien").val() ?? 0;
   	localStorage.setItem('CienR',RC);
   	localStorage.setItem('Cantidad4',RC2);
   });
   /*Recuperar datos*/
   var RCN=localStorage.getItem('CienR'),RCN2=localStorage.getItem('Cantidad4');
   $("#cien").val(RCN2);
   $("#resul4").val(RCN);

   $("#cincuenta").keyup(function () {
   	var value = $(this).val();
   	var resultado5 = value * 50;
   	$("#resul5").val(resultado5);
   	/*Almacenar datos*/
   	var RCTA=$("#resul5").val() ?? 0, RCTA2=$("#cincuenta").val() ?? 0;
   	localStorage.setItem('CiTa',RCTA);
   	localStorage.setItem('Cantidad5',RCTA2);
   });
   /*Recuperar datos*/
   	var CTA=localStorage.getItem('CiTa'),CTA2=localStorage.getItem('Cantidad5');
   	$("#cincuenta").val(CTA2);
   	$("#resul5").val(CTA);

   $("#veinte").keyup(function () {
   	var value = $(this).val();
   	var resultado6 = value * 20;
   	$("#resul6").val(resultado6);
   	/*Almacenar datos*/
   	var RV=$("#resul6").val() ?? 0, RV2=$("#veinte").val() ?? 0;
   	localStorage.setItem('Vte',RV);
   	localStorage.setItem('Cantidad6',RV2);
   });
   /*Recuperar datos*/
   	var RVT=localStorage.getItem('Vte'),RVT2=localStorage.getItem('Cantidad6');
   	$("#veinte").val(RVT2);
   	$("#resul6").val(RVT);

   $("#diez").keyup(function (){
    var value=$(this).val();
    var resultado7=value * 10;
    $("#resul7").val(resultado7);
    /*Almacenar datos*/
   	var RDI=$("#resul7").val() ?? 0, RDI2=$("#diez").val() ?? 0;
   	localStorage.setItem('DIZ',RDI);
   	localStorage.setItem('Cantidad7',RDI2);
   });
   /*Recuperar datos*/
   	var RDIZ=localStorage.getItem('DIZ'),RDIZ2=localStorage.getItem('Cantidad7');
   	$("#diez").val(RDIZ2);
   	$("#resul7").val(RDIZ);

   $("#cinco").keyup(function (){
    var value=$(this).val();
    var resultado8=value * 5;
    $("#resul8").val(resultado8);
    /*Almacenar datos*/
   	var RCC=$("#resul8").val() ?? 0, RCC2=$("#cinco").val() ?? 0;
   	localStorage.setItem('Cco',RCC);
   	localStorage.setItem('Cantidad8',RCC2);
   });
   /*Recuperar datos*/
   	var RCIC=localStorage.getItem('Cco'),RCIC2=localStorage.getItem('Cantidad8');
   	$("#cinco").val(RCIC2);
   	$("#resul8").val(RCIC);

   $("#dos").keyup(function (){
    var value=$(this).val();
    var resultado9=value * 2;
    $("#resul9").val(resultado9);
    /*Almacenar datos*/
   	var RD=$("#resul9").val() ?? 0, RD2=$("#dos").val() ?? 0;
   	localStorage.setItem('Do',RD);
   	localStorage.setItem('Cantidad9',RD2);
   });
   /*Recuperar datos*/
   	var RDS=localStorage.getItem('Do'),RDS2=localStorage.getItem('Cantidad9');
   	$("#dos").val(RDS2);
   	$("#resul9").val(RDS);

   $("#uno").keyup(function (){
    var value=$(this).val();
    var resultado10=value * 1;
    $("#resul10").val(resultado10);
    /*Almacenar datos*/
   	var RU=$("#resul10").val() ?? 0, RU2=$("#uno").val() ?? 0;
   	localStorage.setItem('Un',RU);
   	localStorage.setItem('Cantidad10',RU2);
   });
   /*Recuperar datos*/
   	var RUO=localStorage.getItem('Un'),RUO2=localStorage.getItem('Cantidad10');
   	$("#uno").val(RUO2);
   	$("#resul10").val(RUO);

   $("#ccentavo").keyup(function (){
    var value=$(this).val();
    var resultado11=value * .5;
    $("#resul11").val(resultado11);
    /*Almacenar datos*/
   	var RCV=$("#resul11").val() ?? 0, RCV2=$("#ccentavo").val() ?? 0;
   	localStorage.setItem('centavo',RCV);
   	localStorage.setItem('Cantidad11',RCV2);
   });
   /*Recuperar datos*/
   	var RCVO=localStorage.getItem('centavo'),RCVO2=localStorage.getItem('Cantidad11');
   	$("#ccentavo").val(RCVO2);
   	$("#resul11").val(RCVO);

   /*$("button").click(function(){
       //alert("hola");
       var total=parseFloat($("#resul1").val()) + parseFloat($("#resul2").val())+parseFloat($("#resul3").val())+parseFloat($("#resul4").val())+parseFloat($("#resul5").val())+parseFloat($("#resul6").val())+parseFloat($("#resul7").val())+parseFloat($("#resul8").val())+parseFloat($("#resul9").val())+parseFloat($("#resul10").val())+parseFloat($("#resul11").val());
       $("#total").val(total);
   });*/

   $("button").click(function(){
   	if ($("#resul1").val()===""){
   		$("#resul1").val(0);
   		return 0;
   	}else if($("#resul2").val()===""){
   		$("#resul2").val(0);
   		return 0;
   	}else if($("#resul3").val()===""){
   		$("#resul3").val(0);
   	}else if($("#resul4").val()===""){
   		$("#resul4").val(0);
   	}else if($("#resul5").val()===""){
   		$("#resul5").val(0);
   	}else if($("#resul6").val()===""){
   		$("#resul6").val(0);
   	}else if($("#resul7").val()===""){
   		$("#resul7").val(0);
   	}else if($("#resul8").val()===""){
   		$("#resul8").val(0);
   	}else if($("#resul9").val()===""){
   		$("#resul9").val(0);
   	}else if($("#resul10").val()===""){
   		$("#resul10").val(0);
   	}else if($("#resul11").val()===""){
   		$("#resul11").val(0);
   	}
   	else{
			var total=parseFloat($("#resul1").val()) + parseFloat($("#resul2").val())+parseFloat($("#resul3").val())+parseFloat($("#resul4").val())+parseFloat($("#resul5").val())+parseFloat($("#resul6").val())+parseFloat($("#resul7").val())+parseFloat($("#resul8").val())+parseFloat($("#resul9").val())+parseFloat($("#resul10").val())+parseFloat($("#resul11").val());
      $("#total").val(total);
   	}
   });
   
   /*localStorage.setItem('Nombre', 'Juan de Dios')
   localStorage.Apellido = 'Montoya Durán'
   let Nomp = localStorage.getItem('Nombre'),
    App  = localStorage.Apellido
   alert("Hola, mi nombre es: " + Nomp+ " " + App);*/
 });