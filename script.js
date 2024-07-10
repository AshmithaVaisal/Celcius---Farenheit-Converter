
function convert(){

    const celciusVal = Number(document.getElementById("input-box").value)
    const FarenVal = (celciusVal * 9/5) + 32;
    const result = document.getElementById("result")
    result.innerHTML = FarenVal +" " + "F" 

}
