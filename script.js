function getQuote (){
    var landscapes = document.getElementById("landscapeFamily").value;
    var attractions= document.getElementById("attractionFamily").value;
    var feedback = document.getElementById("feedback").value;
   

    console.log(landscapes);
    console.log(attractions);
    console.log(feedback);

    //putting what i write into the output box into the "quote" box
    document.getElementById("output").innerHTML=landscapes;
    //taking what i write into the output box and setting it equal to what the font is
    document.getElementById("output").style.fontFamily=attractions;

    
    if (boxColor=="lavender" && font=="Brush Script MT" ){
       feedback="Great combo!"
    } 

    if (boxColor=="lightgreen"){
        feedback="Looking Fresh!"
    }

    else if (boxColor=="lightblue" || boxColor=="gold" || boxColor=="lightpink"){
        feedback="Nice design"
    }

    document.getElementById("feedback").innerHTML=feedback
}
function showTemp(){
    var size= document.getElementById("size").value;
    document.getElementById("feedback").innerHTML= size +" °F"
}

showTemp();



