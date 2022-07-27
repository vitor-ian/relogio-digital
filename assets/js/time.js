function relogio(){
    var data = new Date();

    // Horas
    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    if(hor<10){
        hor = "0" + hor;
    }
    if(min<10){
        min = "0" + min;
    }
    if(seg<10){
        seg = "0" + seg;
    }

    // Data
    var dia = data.getDay();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    if(dia<10){
        dia = "0" + dia;
    }

    if(mes<10){
        mes = "0" + mes;
    }

    // Formatação
    var total_horas = "";
    var callendar = "";

    if (document.getElementById("ampm").checked){
        let ampm = hor >= 12 ? 'PM' : 'AM';
        hor = hor % 12;
        hor = hor ? hor : 12;

        if(hor<10){
            hor = "0" + hor;
        }

        total_horas = hor + " : " + min + " : " + seg + " " + ampm;
        callendar = mes + " / " + dia + " / " + ano;
    } else if (document.getElementById("default").checked){
        total_horas = hor + " : " + min + " : " + seg;
        callendar = dia + " / " + mes + " / " + ano;
    }

    document.getElementById("time").value = total_horas;
    document.getElementById("callendar").value = callendar;
}

var tempo = setInterval(relogio, 1000);