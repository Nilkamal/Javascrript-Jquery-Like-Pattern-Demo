
function HtmlGreet(){
    var firstName = $("#firstName");
    var lastName =  $("#lastName");
    var language =  $("#language");
    
    var obj = G$(firstName.val(), lastName.val(), language.val());
    console.log(obj.HTMLGreeting('#greet', true));
    

}
