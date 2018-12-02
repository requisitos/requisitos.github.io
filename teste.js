const array = []
array.push("novo", "Casa", "vizinho")
console.log(array)
function percorre(array, busca){
    for(i=0; i<array.length; i++){
        if( array[i] == busca )
            return true;
        if (i == (array.length-1))
            return false;
    }
}
if(percorre(array, "vizinho")){
    console.log("Deu certo")
}else{
    console.log("Ocorreu um erro")
}
