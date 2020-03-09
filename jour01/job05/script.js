function afficherjourssemaines()
{
  jours = new Array('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche');

var aujourdhui = new Date();

 for(i=0; i< 7; i++){
   console.log(jours[i]);
 }

}
afficherjourssemaines();
