// Menu lateral
var btn = document.getElementById("btn-config"); 
var menuLateral = document.getElementById("menu-lateral");
var contentMenu = document.getElementById("box-content-menu");

btn.onclick = function (e) {
    e.preventDefault();
    menuLateral.classList.toggle('toggleMenu');
    btn.classList.toggle('btn-menu-black');
};

contentMenu.onclick = function () {
    menuLateral.classList.remove('toggleMenu');
    btn.classList.remove('btn-menu-black');
};

// Tema padrão caso não tenha um tema selecionado
if(sessionStorage.getItem('tema') == null){
    sessionStorage.setItem('tema', 'tema01');
    selectTheme();
} else{
    selectTheme();
}

// Escolher tema
var theme01 = document.getElementById("theme-01"); 
theme01.onclick = function (){
    sessionStorage.setItem('tema', 'tema01');
    selectTheme();
}

var theme02 = document.getElementById("theme-02"); 
theme02.onclick = function (){
    sessionStorage.setItem('tema', 'tema02');
    selectTheme();
}

var theme03 = document.getElementById("theme-03"); 
theme03.onclick = function (){
    sessionStorage.setItem('tema', 'tema03');
    selectTheme();
}

var theme04 = document.getElementById("theme-04"); 
theme04.onclick = function (){
    sessionStorage.setItem('tema', 'tema04');
    selectTheme();
}


//Themes
function selectTheme(){
    var tema = sessionStorage.getItem('tema');

    var bodyBackground = document.getElementById("body-background");
    var date = document.getElementById("time");
    var callendar = document.getElementById("callendar");

    if(tema == "tema01"){
        bodyBackground.style.backgroundImage = 'url("./assets/img/theme-01.jpeg")';
        
        date.style.fontSize = "5rem";
        date.style.color = "#fff";
        date.style.fontFamily = "Monoton, cursive";
        date.style.textShadow = "none";

        callendar.style.fontSize = "1rem ";
        callendar.style.color = "#fff";
        callendar.style.fontFamily = "Poppins, sans-serif";
        callendar.style.textShadow = "none";
    }

    else if(tema == "tema02"){
        bodyBackground.style.backgroundImage = 'url("./assets/img/theme-02.jpeg")';

        date.style.fontSize = "6rem";
        date.style.color = "#28B91C";
        date.style.fontFamily = "Wallpoet, cursive";
        date.style.textShadow = "0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0,0,0,0.9)";

        callendar.style.fontSize = "1rem ";
        callendar.style.color = "#28B91C";
        callendar.style.fontFamily = "Wallpoet, cursive";
        callendar.style.textShadow = "none";
    }

    else if(tema == "tema03"){
        bodyBackground.style.backgroundImage = 'url("./assets/img/theme-03.jpeg")';

        date.style.fontSize = "6rem";
        date.style.color = "#fff";
        date.style.fontFamily = "Orbitron, sans-serif";
        date.style.textShadow = "0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0,0,0,0.9)";

        callendar.style.fontSize = "1rem ";
        callendar.style.color = "#fff";
        callendar.style.fontFamily = "Poppins, sans-serif";
        callendar.style.textShadow = "none";
    }

    else if(tema == "tema04"){
        bodyBackground.style.backgroundImage = 'url("./assets/img/theme-04.png")';

        date.style.fontSize = "8rem";
        date.style.color = "#fff";
        date.style.fontFamily = "VT323, monospace";
        date.style.textShadow = "0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)";

        callendar.style.fontSize = "2rem ";
        callendar.style.color = "#fff";
        callendar.style.fontFamily = "VT323, monospace";
        callendar.style.textShadow = "none";

    }
}
