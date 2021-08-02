function hambur(){
    var menu = document.getElementById("menu_flotante");
    if (menu.style.display == "none"){
        menu.style.display = "flex";
    }
    else{
        menu.style.display = "none";
    }

}