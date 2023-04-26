const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#enviarCorreo").click(function () {
  alert("El correo fue enviado correctamente...");
});

//  "INGREDIENTES" y "PREPARACIÓN" a color rojo
var ingredientesRed = $("#ingredientes");
ingredientesRed.dblclick(function () {
  ingredientesRed.toggleClass("dblClickRed");
});

var preparacionRed = $("#preparacion").first();
preparacionRed.dblclick(function () {
  preparacionRed.toggleClass("dblClickRed");
});

$(".card-title").click(function () {
  $(".card-text").toggle(function () {});
});
