const nombre = "mario";
const apellido = "saldaña";

//const nombre_completo = nombre + " " + apellido;
const nombre_completo = `
${nombre} 
${apellido}`;
console.log(nombre_completo);
function getSaludo(nombre){
    return "hola"+ nombre
}
console.log(`Este es un texto ${getSaludo(nombre)}`)