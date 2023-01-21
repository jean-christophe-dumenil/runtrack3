function jsonValueKey(jsonString, key) {
  var jsonObject = JSON.parse(jsonString);
  return jsonObject[key];
}

var jsonString = '{"name": "La Plateforme_","address": "8 rue d\'hozier","city": "Marseille","nb_staff": "11","creation":"2019"}';
console.log(jsonValueKey(jsonString, "city")); // affiche "Marseille"
