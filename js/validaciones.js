const inputNacimiento = document.querySelector('#birth')

inputNacimiento.addEventListener("blur", (evento) => {
  validarNacimiento(evento.target);
})

function validarNacimiento(input){
  const fechaCliente = new Date(input.value)
  mayorEdad(fechaCliente);

}

function mayorEdad(fecha){
  const fechaActual = new Date();
  const diferenciasFechas = new Date(
    fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(), 
    fecha.getUTCDate()
    );
  console.log(diferenciasFechas <= fechaActual )
}
