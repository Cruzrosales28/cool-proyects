//  var UserMoney = document.getElementById("Money").value
//  var UserSpends = document.getElementById("Spends").value
//  var UserProyections = document.getElementById("Profits").value



//function thisWorks() {
//  alert("Sigue intentandolo Vas por el Buen Camino")
// }

function addFields() {
    // Generate a dynamic number of inputs
    var number = document.getElementById("member").value;
    var places = document.getElementById("member").value;
    // Get the element where the inputs will be added to
    var container = document.getElementById("container");
    // Remove every children it had before
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Cliente " + (i + 1)));
        container.appendChild(document.createTextNode(" Lugar " + (i + 1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        container.appendChild(input);

        var place = document.createElement("place");
        place.type = "place"
        place.name = "cliente" + i;
        container.appendChild(place);
        // Append a line break 
        container.appendChild(document.createElement("br"));

    }
}

function addFilesPlaces() {
    // Generar un numero dinamico de entradas de datos 
    var number = document.getElementById("member").value;
    var places = document.getElementById("member").value;
    // Obten El Elemento Donde Las Entradas Seran Recibidas 
    var container = document.getElementById("container");
    // Remove every children it had before
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Cliente " + (i + 1)));
        container.appendChild(document.createTextNode(" Lugar " + (i + 1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        container.appendChild(input);

        var place = document.createElement("place");
        place.type = "place"
        place.name = "cliente" + i;
        container.appendChild(place);
        // Append a line break 
        container.appendChild(document.createElement("br"));

    }
}