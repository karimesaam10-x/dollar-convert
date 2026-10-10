function convertValue(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if(dollar == ""){
        result.innerHTML="Enter Data";
    }else if (isNaN(dollar)){
        result.innerHTML="Enter Number Not Text";
    }else if (dollar < 0){
        result.innerHTML ="Enter Positive Num";
    }else if (dollar == 0){
         result.innerHTML ="Enter Num Rather than zero";
    }else{
        result.innerHTML = dollar * 50 + " Egyption Pound";
    }

    return false;
}