
/*function ingresarnumero(n){
    var caja = document.pag1.cajita1.value;

    if (caja == "0" && n != "."){
        cajao = caja.replace("0","")
        document.pag1.cajita1.value = cajao + n;
    }
    else{
        document.pag1.cajita1.value = caja + n;
    }

}*///funciona bien pero puede fallar/ recomendable getelement
//var caja = document.getElementById("contra");
/*function ingresarnumero(n) {
     var caja = document.getElementById("contra").value;
    if (caja == "0" && n != "."){
        cajao = caja.replace("0","")
        if (caja.length<=4) {
            document.getElementById("contra").value = cajao + n;
        }else{
            alert("nos puede ingresar mas de cuatro digitos");
        }
        
    }
    else{
        document.getElementById("contra").value = caja + n;
        
    }
}*/
 
function ingresarnumero(n){
    
    var s = document.getElementById("contra").value;
    document.getElementById("contra").value = s+n;
    if (document.getElementById("contra").value.length >= 5){
        document.getElementById("contra").value="";
        document.getElementById("mensaje").innerHTML = "Error";
    }
}
  

function vericlav(){
    var contra = document.pag1.cajita1.value;
    if(contra == "1234"){

        document.getElementById("mensaje").innerHTML = "Bienvenido";
        window.location ="principal.html";
    }
    else{
        
        document.getElementById("mensaje").innerHTML = "Vuelva a ingresar contraseña";
        document.getElementById("contra").value = "";
        
    }
}

function borrar(){
    document.getElementById("contra").value="";
    
    
}
/*function ret(){
    var frame = document.getElementById("pag");
    frame.setAttribute("src","retiro.html");
}*/
/*function ingresaspam() {
   var s = document.getElementById("spam").value;
        document.getElementById("spam").value = s+n; 
}
function ingresarnumero(n){
    var a =document.getElementById("contra").value;   
    if (document.getElementById("contra") == "contra") {
        ingresarnumeros(n);
    } else {
        ingresaspam(n);
    }
}*/   
function ingresarnumeros(n){
    
    var s = document.getElementById("spam").value;
    document.getElementById("spam").value = s+n;
    
}

