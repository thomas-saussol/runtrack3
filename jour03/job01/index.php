<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});
</script>
</head>
<body>

<p>le $ est un bon élément
monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la
classe pour cacher cet élément.</p>

<button id="hide">Cacher</button>
<button id="show">Montrer</button>

</body>
</html>
