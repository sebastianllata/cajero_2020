var montotal = [];
var fondobank = [{
    montoinicialsoles: 1000,
    montoinicialdolar: 800
}];
//ocultar y mostrar pagiinas 
function ocultarretiro() {
    document.getElementById("retiro").style.display ="none";
}
function ocultarretirosoles() {
    document.getElementById("retirosoles").style.display ="none";
}
function ocualtarretirodolares() {
    document.getElementById("retirodolares").style.display ="none";
}
function mostrarrretiro() {
    document.getElementById("retiro").style.display ="block";
}
function mostrarrretirosoles() {
    document.getElementById("retirosoles").style.display ="block";
}
function mostrarrretirodolares() {
    document.getElementById("retirodolares").style.display ="block";
}
function retisol() {
    var caja = document.getElementById("retirosoles");

    if(caja.style.display =="none"){
        ocultarretiro();
        mostrarrretirosoles();
    }else{
        mostrarrretiro();
        ocultarretirosoles();
    }
}

function retidol() {
    var caja = document.getElementById("retirodolares");

    if (caja.style.display == "none") {
        ocultarretiro();
        mostrarrretirodolares();
    }else{
        mostrarrretiro();
        ocualtarretirodolares();
    }
      
}
//retiro
function ocultarotrascnt() {
    document.getElementById("otrascantidades").style.display ="none";
}
function mostrarotrascant() {
    document.getElementById("otrascantidades").style.display ="block";
}

function imprimvalor(p) {
    var monto = p.value;
    console.log(p);
    if(p.name == "sol" ){
        var objeto = {
            tipo:"sol",
            monto:monto
            };
        montotal.push(objeto);//agregar al array
        document.getElementById("spam").value = "S/."+montotal[0].monto;
        retiotrascantidadessoles();
    }
    else{
        var objeto = {
            tipo:"dolar",
            monto:monto
            };
        montotal.push(objeto);
        document.getElementById("spam").value = "$/."+montotal[0].monto;
        retiotrascantidadesdolar();
    }
}
function corregir() {
    montotal=[];//limpia el array
    //console.log(montotal);
    document.getElementById("spam").value = montotal;
    retiotrascantidadesdolar();
}
function retiotrascantidadesdolar() {
    var caja = document.getElementById("otrascantidades");
    if (caja.style.display == "none") {
        ocualtarretirodolares();
        mostrarotrascant();
    } else {
        ocultarotrascnt();
        mostrarrretirodolares();
        
    }
    
}
function retiotrascantidadessoles() {
    var caja = document.getElementById("otrascantidades");
    if (caja.style.display == "none") {
        ocultarretirosoles();
        mostrarotrascant();
    } else {
        ocultarotrascnt();
        mostrarrretirosoles();
    }
}
function confirmar() {
    //console.log(montotal);
    //console.log(fondobank);
    if (montotal[0].tipo == "sol") {
        fondobank[0].montoinicialsoles = fondobank[0].montoinicialsoles-montotal[0].monto;
        document.getElementById("saldo").value = fondobank[0].montoinicialsoles;    
    }
    else {
        fondobank[0].montoinicialdolar = fondobank[0].montoinicialdolar-montotal[0].monto;
        document.getElementById("saldo").value = fondobank[0].montoinicialdolar;
    }
    ultimatrans();

}
//
function ocultarultitransac() {
    document.getElementById("ultimatrasaccion").style.display ="none";
}
function mostrarultitransac() {
    document.getElementById("ultimatrasaccion").style.display ="block";
}
function ultimatrans() {
    var caja = document.getElementById("ultimatrasaccion");
    if (caja.style.display == "none") {
        ocultarotrascnt();
        mostrarultitransac();
    } else {
        ocultarultitransac();
        mostrarotrascant();
    }
}
//
function liampiar() {
    montotal=[];
}
function mostrarprinconsultas() {
    document.getElementById("princonsultas").style.display ="block";
}
function ocultarprinconsultas() {
    document.getElementById("princonsultas").style.display ="none";
}
function sonsul() {
    var caja = document.getElementById("princonsultas");
    if (caja.style.display == "none") {
        mostrarprinconsultas();
        ocultarultitransac();
    } else {
        mostrarultitransac();
        ocultarprinconsultas();
    }
}


