let i = 0;

function ejecutar() {
    if (i < 1000) {
        document.getElementById("output").innerHTML +=
            "I Love U Baby ❤️<br>";

        i++;

        setTimeout(ejecutar, 10);
    } else {
        document.getElementById("output").innerHTML +=
            "<br>❤️ 1000 veces completadas ❤️";
    }
}

ejecutar();