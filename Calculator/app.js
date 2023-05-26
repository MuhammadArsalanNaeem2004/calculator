function valueGet(num){
    document.getElementById("screen").value += num;
}

function clearAll(){
    document.getElementById("screen").value = "";
}

function calculation(){
    var calculatedValue = document.getElementById("screen").value;
    var result = eval(calculatedValue);
    document.getElementById("screen").value = result
}
