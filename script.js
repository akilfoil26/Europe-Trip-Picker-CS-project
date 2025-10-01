function showCountry (landscapes, attractions, size){
 
    var feedback; 

    console.log(landscapes);
    console.log(attractions);
    console.log(size);
    
    if (landscapes=="Land" && attractions=="Architecture" && (size>=50 && size<=70)){
       feedback="Germany & Ireland & Britain & the Netherlands"
    }
    else if (landscapes=="Land" && attractions=="Architecture" && (size>70 && size<=90)){
       feedback="Spain & Portugal & France & Belgium & Austria"
    }
    else if (landscapes=="Land" && attractions=="Historical Landmarks" && (size>=65 && size<=75)){
       feedback="Germany"  
     }
   else if (landscapes=="Land" && attractions=="Nature features" && (size>=50 && size<=70)){
       feedback="Ireland & the Netherlands & Britain & Ireland"
    }
     else if (landscapes=="Land" && attractions=="Nature features" && (size>70 && size<=90)){
       feedback="Spain & Portugal"
    }
    else if (landscapes=="Water" && attractions=="Architecture" && (size>=50 && size<=70)){
       feedback="Ireland & Britain"
     }
     else if (landscapes=="Water" && attractions=="Architecture" && (size>70 && size<=90)){
       feedback="France & Italy & Portugal & Spain"
     }
   else if (landscapes=="Water" && attractions=="Historical Landmarks" && (size>=60 && size<=63)){
       feedback="Isle of Man" 
    }
    else if (landscapes=="Water" && attractions=="Historical Landmarks" && (size>=70 && size<=90)){
       feedback="Italy" 
    }
     
   else if (landscapes=="Water" && attractions=="Nature features" && (size>=50 && size<=70)){
       feedback="Isle of Man & Ireland & Britain & the Netherlands"

    } 
     else if (landscapes=="Water" && attractions=="Nature features" && (size>70 && size<=90)){
       feedback="Spain & Portugal & Monacco"
     } else{
        feedback = "Your country is..."
    }


    console.log(feedback);
    return feedback;
}
// showCountry()



function showTemp(){
    var size= document.getElementById("size").value;
    document.getElementById("feedback").innerHTML= size +" °F"
}

showTemp();




function getResults(){
     document.getElementById("result").innerHTML= showCountry(document.getElementById("landscapeFamily").value, document.getElementById("attractionFamily").value, Number(document.getElementById("size").value));
}


