function showstudents()
{
    console.log("Button Pressed");
    var studentNames="Ann, Tim, Lisa";
    document.getElementById('students').innerHTML=studentNames;
}
function showSelection()
{
    var country= document.getElementById('drop').value;
    var capital= document.getElementById('drop');
    country=e.option[e.selectedIdex].text;
    console.log( "country=" +country);
    console.log( "capital=" +capital);
    document.getElementById('dropResult').innerHTML="The capital city of" + country + "is"+ capital;
}
function submitForm()
{
    console.log("Button Pressed");
    var elements = document.getElementById('personForm').elements;
    var firstname = elements.fname.value;
    var lastname = elements.lname.value;
    var city = elements.city.value;
    var height = elements.height.value;
    var info="Person info:<br>";
    info+="firstname: "+firstname+"<br>";
    info+="lastname: "+lastname+"<br>";
    info+="height: "+height+"<br>";
    info+="city: "+city+"<br>";
    
}