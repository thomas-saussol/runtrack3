function jsonValueKey(json,key) {
console.log('coucou');

var jsonValueKey = '{"name":"La Plateforme_","address":"8 rue d/hozier","city":"Marseille","nb_staff":"11","creation":"2019"}';
var key = "name";

var personne = JSON.parse(jsonValueKey);

for ($i = 1; $i <= 5; $i++)
{
console.log(personne[key]);
}

return personne[key];

}
