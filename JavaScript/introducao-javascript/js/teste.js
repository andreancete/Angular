var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    console.log(paciente.querySelector("td.info-nome").textContent);
}