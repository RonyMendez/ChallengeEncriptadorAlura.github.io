const mensajee = document.querySelector(".mensaje");
const mensajed = document.querySelector(".screen");
let handleCopyClick = document.querySelector(".screen");
console.table(matrizCodigo);

function btnencriptar(){
    const textodesencriptado = encriptar(mensajee.value);
    mensajed.value = textodesencriptado;
    mensajee.value = "";
    mensajed.style.backgroundImage = "none";
}
function btndesencriptar(){
    const textoencriptado = desencriptar(mensajee.value);
    mensajed.value = textoencriptado;
    mensajee.value = "";
    mensajed.style.backgroundImage = "none";
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada

}

function encriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptada

}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada

}

function copy(){
   
    navigator.clipboard.writeText(mensajed.value)
    .then(() => {
    mensajee.value = mensajed.value;
    mensajed.value = "";
    
    /* Resuelto - texto copiado al portapapeles con éxito */
    },() => {
    console.error('Error al copiar');
    /* Rechazado - fallo al copiar el texto al portapapeles */
    });
}