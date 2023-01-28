document.getElementById('boton').addEventListener('click',function() {
    console.log("El usuario buscó información adicional");
    document.getElementById('demo').innerHTML = "- Licencia de conducir y auto propio"
});

document.getElementById('boton').addEventListener('click',function() {
    
    document.getElementById('demo2').innerHTML = "- Disponibilidad inmediata"
});



document.getElementById('boton_ocultar').addEventListener('click',function() {
   document.getElementById('demo').style.display = 'none';
   console.log("El usuario ocultó la información adicional");
});

document.getElementById('boton_ocultar').addEventListener('click',function() {
    document.getElementById('demo2').style.display = 'none';
 });