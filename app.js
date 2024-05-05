function btnclick(e){
    document.querySelector("#inp").value+=e
}

function clearAll(){
    document.querySelector("#inp").value = "0"
}
function eq(){
    var getvalue = document.getElementById('inp')
    getvalue.value=eval(getvalue.value)
}