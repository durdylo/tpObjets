let places = [{
    placeName: "Bibliotheque de Grognarde",
    placeType: "Bibliotheque",
    placeDescription: "C’est en 1988, sur l’emplacement d’une ancienne supérette, que cette bibliothèque a ouvert ses portes aux habitants des quartiers Est de Marseille. Située dans un secteur en pleine expansion, elle est très appréciée pour son équipe polyvalente et les nombreuses animations qu'elle propose.",
    placeAdress: "2 square Berthier 13011 Marseille",
    longitude: 5.43393359688718,
    latitude: 43.294254090464
  },
  {
    placeName: "Bibliotheque de l'Alcazar",
    placeType: "Bibliotheque",
    placeDescription: "Ouverte au public depuis le 30 mars 2004, la nouvelle bibliothèque s’implante sur l’ancien lieu mythique du music-hall et de la chanson française à Marseille.",
    placeAdress: "58 cours Belsunce 13001 Marseille",
    longitude: 5.37659100529593,
    latitude: 43.2989287782018
  },
  {
    placeName: "Cinema de le Chambord",
    placeType: "Cinéma",
    placeDescription: "Cinéma de quartier comprenant plusieurs salles avec une programmation variée et des projections en VOST.",
    placeAdress: "283 avenue du Prado 13008 Marseille",
    longitude: 5.39138648003393,
    latitude: 43.2732727149894
  },
  {
    placeName: "Cinéma les 3 palmes",
    placeType: "Cinéma",
    placeDescription: "Multiplexe avec projections numériques de films grand public et d'opéras, avec espace loisirs et confiserie.",
    placeAdress: "2 Rue Léon Bancal, 13011 Marseille",
    longitude: 5.4787297,
    latitude: 43.2893113
  },
  {
    placeName: "EuropaCorp La Joliette",
    placeType: "Cinéma",
    placeDescription: "Ce cinéma de plusieurs salles aménagé sur 4 niveaux est accessible aux personnes à mobilité réduite.",
    placeAdress: "54 Rue de Chanterac, 13002 Marseille",
    longitude: 5.3650499,
    latitude: 43.3082883
  },
  {
    placeName: "Le Patacrêpe",
    placeType: "Restaurant",
    placeDescription: "Carte de galettes, crêpes et burgers dans un grand espace sobre avec des plantes intérieures ou en terrasse.",
    placeAdress: "7 Montée Commandant de Robien, 13011 Marseille",
    longitude: 5.481047,
    latitude: 43.2899476
  }
];

function addPlace(placeName, placeType, placeDescription, placeAdress, longitude, latitude) {
  let newPlace = {
    placeName: placeName,
    placeType: placeType,
    placeDescription: placeDescription,
    placeAdress: placeAdress,
    longitude: longitude,
    latitude: latitude
  }
  places.push(newPlace);
}




function displayPlacesInHTML(tableObjects) {
  let newTable = document.createElement("table");
  newTable.id = "tablePlaces"
  newTable.classList.add = ("table");
  let sectionTable = document.getElementById("tableSection")
  sectionTable.appendChild(newTable);

  let newTableBody = document.createElement("tbody");
  newTable.appendChild(newTableBody)


  for (let i = 0; i < tableObjects.length; i++) {
    let currentElement = tableObjects[i];
    let newTableRow = document.createElement("tr")
    newTableBody.appendChild(newTableRow)


    let newTableName = document.createElement("th")
    newTableName.textContent = currentElement.placeName
    newTableName.scope = 'row'
    newTableRow.appendChild(newTableName)

    let newTableType = document.createElement("td")
    newTableType.textContent = currentElement.placeType
    newTableRow.appendChild(newTableType)

    let newTableDescription = document.createElement("td")
    newTableDescription.textContent = currentElement.placeDescription
    newTableRow.appendChild(newTableDescription)

    let newTableAdress = document.createElement("td")
    newTableAdress.textContent = currentElement.placeAdress
    newTableRow.appendChild(newTableAdress)

    let newTablelongitude = document.createElement("td")
    newTablelongitude.textContent = currentElement.longitude
    newTableRow.appendChild(newTablelongitude)

    let newTableLatitude = document.createElement("td")
    newTableLatitude.textContent = currentElement.latitude
    newTableRow.appendChild(newTableLatitude)
  }
}

displayPlacesInHTML(places)

let addingButton = document.getElementById("addingPlaceButton");


let nameInput = document.getElementById("name");
let typeInput = document.getElementById("type");
let adressInput = document.getElementById("adress");
let descriptionInput = document.getElementById("description");
let longitudeInput = document.getElementById("longitude");
let latitudeInput = document.getElementById("latitude");
let idTable = document.getElementById("tablePlaces")
let sectionTableID = document.getElementById("tableSection")



addingButton.addEventListener("click", function() {
  let name = nameInput.value;
  let type = typeInput.value;
  let adress = adressInput.value;
  let description = descriptionInput.value;
  let longitude1 = longitudeInput.value;
  let latitude1 = latitudeInput.value;

  sectionTableID.removeChild(idTable);
  addPlace(name, type, description, adress, longitude1, latitude1);
  displayPlacesInHTML(places)


});

var mymap = L.map('mapid').setView([43.2938004, 5.2404139], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11'
}).addTo(mymap);

function objectContent(placeName, placeType, placeDescription) {
  objectContent1 = placeName + " <br />" + placeType + "<br />" + placeDescription
  return objectContent1
}
for (let i = 0; i < places.length; i++) {
  let currentElement = places[i]
  let placeContent = objectContent(currentElement.placeName, currentElement.placeType, currentElement.placeDescription);
  L.marker([currentElement.latitude, currentElement.longitude]).addTo(mymap)
    .bindPopup(placeContent).openPopup();

}
