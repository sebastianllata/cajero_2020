
function ingresarnumero(n){
    var caja = document.pag1.cajita1.value;

    if (caja == "0" && n != "."){
        cajao = caja.replace("0","")
        document.pag1.cajita1.value = cajao + n;
    }
    else{
        document.pag1.cajita1.value = caja + n;
    }

}function vericlav(){
    var contra = document.pag1.cajita1.value;

    if(contra == "1234"){
        alert("contraseña correcta");
        alert("bienvenido");
    }
    else{
        alert("contraseña incorrecta");
        window.location ="index.html";
    }
}
/*function borrar(){
    
    var contra = document.pag1.cajita1.value;
        if(contra == "" || contra =="0" || contra.length == 1 && blocdell!=true){
            document.pag1.cajita1.value ="0";
        }
        else if(blocbel!=true){
            var res = contra.substrinig(0,contra.length-1);
            document.pag1.cajita1.value =  res;
        }
    
}*//*revisar mas trade no funciona */
