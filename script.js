function showCountry (landscapes, attractions, size){ //defines a function named "showCountry" that takes three parameters: landscapes, attractions, size
 
    var feedback; //variable named feedback to store resulting recommendation

    console.log(landscapes); //logs the value of the landscapes parameter to the console
    console.log(attractions); //logs the value of the attractions parameter to the console
    console.log(size); //logs the value of the size parameter to the console
    
    if (landscapes=="Land" && attractions=="Architecture" && (size>=50 && size<=70)){ // Checks if landscapes are 'Land', attractions are 'Architecture', and size is between 50 and 70
       feedback="Germany & Ireland & Britain & the Netherlands" // Assigns a string of countries to 'feedback' if the condition is true
    }
    else if (landscapes=="Land" && attractions=="Architecture" && (size>70 && size<=90)){ // Checks if landscapes are 'Land', attractions are 'Architecture', and size is between 70 and 90
       feedback="Spain & Portugal & France & Belgium & Austria" // Assigns a string of countries to 'feedback' if the condition is true
    }
    else if (landscapes=="Land" && attractions=="Historical Landmarks" && (size>=65 && size<=75)){ // Checks if landscapes are 'Land', attractions are 'Historical Landmarks', and size is between 65 and 75
       feedback="Germany"  // Assigns 'Germany' to 'feedback' if the condition is true
     }
   else if (landscapes=="Land" && attractions=="Nature features" && (size>=50 && size<=70)){ // Checks if landscapes are 'Land', attractions are 'Nature features', and size is between 50 and 70
       feedback="Ireland & the Netherlands & Britain & Ireland" // Assigns a string of countries to 'feedback' if the condition is true
    }
     else if (landscapes=="Land" && attractions=="Nature features" && (size>70 && size<=90)){ // Checks if landscapes are 'Land', attractions are 'Nature features', and size is between 70 and 90
       feedback="Spain & Portugal" // Assigns 'Spain & Portugal' to 'feedback' if the condition is true
    }
    else if (landscapes=="Water" && attractions=="Architecture" && (size>=50 && size<=70)){ // Checks if landscapes are 'Water', attractions are 'Architecture', and size is between 50 and 70 
       feedback="Ireland & Britain" // Assigns 'Ireland & Britain' to 'feedback' if the condition is true
     }
     else if (landscapes=="Water" && attractions=="Architecture" && (size>70 && size<=90)){ // Checks if landscapes are "Water", attractions are "Architecture", and size is between 71 and 90
       feedback="France & Italy & Portugal & Spain" // Assigns 'France & Italy & Portugal & Spain' to 'feedback' if the condition is true
     }
   else if (landscapes=="Water" && attractions=="Historical Landmarks" && (size>=60 && size<=63)){ // Checks if landscapes are "Water", attractions are "Historical Landmarks", and size is between 60 and 63
        feedback="Isle of Man" // Assigns "Isle of Man" to 'feedback' if the condition is true
       
    }
    else if (landscapes=="Water" && attractions=="Historical Landmarks" && (size>=70 && size<=90)){ // Checks if landscapes are "Water", attractions are "Historical Landmarks", and size is between 70 and 90
       feedback="Italy" // Assigns "Italy" to 'feedback' if the condition is true
    }
     
   else if (landscapes=="Water" && attractions=="Nature features" && (size>=50 && size<=70)){ // Checks if landscapes are "Water", attractions are "Nature features", and size is between 50 and 70
       feedback="Isle of Man & Ireland & Britain & the Netherlands" // Assigns "Isle of Man & Ireland & Britain & the Netherlands" to 'feedback' if the condition is true

    } 
     else if (landscapes=="Water" && attractions=="Nature features" && (size>70 && size<=90)){ // Checks if landscapes are "Water", attractions are "Nature features", and size is between 71 and 90
       feedback="Spain & Portugal & Monacco" // Assigns "Spain & Portugal & Monacco" of countries to 'feedback' if the condition is true
     } else{
        feedback = "Your country is..." // Assigns a default message to 'feedback'
    }


    console.log(feedback);// Prints the current value of the 'feedback' variable to the console
    return feedback; // Returns the final value of the 'feedback' variable
}
// showCountry()



function showTemp(){ //defined function called showTemp
    var size= document.getElementById("size").value; // Declares a variable 'size' and assigns it the value of an HTML element with id "size".
    document.getElementById("feedback").innerHTML= size +" °F" // Updates the inner HTML of an element with id "feedback" to display the 'size' value followed by " °F".
}

showTemp();// Calls the showTemp function to display temperature




function getResults(){
     document.getElementById("result").innerHTML= showCountry(document.getElementById("landscapeFamily").value, document.getElementById("attractionFamily").value, Number(document.getElementById("size").value));
}
