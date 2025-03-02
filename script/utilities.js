function getValueById(id){
    const task = document.getElementById(id).innerText;
    const value = parseInt(task);
    return value;
}

function setValueById(id,value){
    document.getElementById(id).innerText = value;
}