$(document).ready(function(){
$("#button").click(function(){
    $.ajax({
        //L'URL de la requête
        url: "expression.txt",

        //La méthode d'envoi (type de requête)
        method: "GET",


    })
    //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
    /*On peut par exemple convertir cette réponse en chaine JSON et insérer
     * cette chaine dans un div id="res"*/
    .done(function(response){
        let data = (response);
        $("#phrase").append(data);
    })

	});

	});
