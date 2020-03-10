function showhide() {
   var verification =document.getElementsByTagName('article');

if(verification[0]==null){

var article = document.createElement('article');
var article_text= document.createTextNode('L\'important n\'est pas la chute, mais l\'atterrissage');
document.body.appendChild(article);
article.appendChild(article_text);




}
else{
  document.body.removeChild(verification[0]);
}

}
