function getQuote (){
    var boxColor = document.getElementById("color").value;
    var font= document.getElementById("fontFamily").value;
    var text = document.getElementById("quote").value;
    var size= document.getElementById("size").value;
    var feedback = document.getElementById("feedback").value;
   

    console.log(boxColor);
    console.log(font);
    console.log(text);
    console.log(size);
    console.log(feedback);

    //putting what i write into the output box into the "quote" box
    document.getElementById("output").innerHTML=text;
    //taking what i write into the output box and setting it equal to what the font is
    document.getElementById("output").style.fontFamily=font;
    //setting what I choose as my boc color to change the outputBox color not just the output which is the text
    document.getElementById("outputBox").style.backgroundColor=boxColor;
    document.getElementById("outputBox").style.fontSize=size+ "px";
    
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