// Preguntas y opciones
let Questions = [
    ["¿Cuándo trabajas en grupo, qué papel sueles asumir?","Líder","Creativo/a","Analítico/a","Colaborador/a"],
    ["¿Qué disfrutas más?","Liderar y dirigir proyectos","Diseñar o inventar cosas","Resolver problemas lógicos","Trabajar con otras personas"],
    ["¿Qué frase te representa mejor?","Prefiero decidir rápido y actuar","Siempre pienso fuera de la caja","Me fijo en cada detalle","Lo importante es que todos estén bien"],
    ["En tu tiempo libre, prefieres...","Liderar actividades con amigos","Hacer manualidades, arte o música","Leer o resolver acertijos","Salir a compartir experiencias"],
    ["Tu punto fuerte es...","Tomar decisiones rápidas","Ser imaginativo/a","Fijarme en cada detalle","Colaborar con los demás"],
    ["Si tuvieras que elegir un rol en un proyecto escolar...","El que coordina y lidera","El que aporta ideas diferentes","El que revisa y corrige","El que apoya a todos"],
    ["Lo que menos te gusta es...","Que otros decidan por mí","No tener espacio para imaginar","El desorden o la falta de lógica","El conflicto y la falta de trabajo en equipo"],
    ["Si fueras un superhéroe, tu poder sería...","Liderar y motivar a todos","Crear cosas nuevas con la imaginación","Calcular y resolver problemas al instante","Apoyar a las personas"]
];

// Variables para puntaje
let currQuestion = 0;
let scoreLider = 0;
let scoreCreativo = 0;
let scoreAnalitico = 0;
let scoreColaborador = 0;

// Mostrar primera pregunta
loadQues();

function loadQues() {
    let quesDiv = document.getElementById("ques");
    let optDiv = document.getElementById("opt");
    quesDiv.innerHTML = Questions[currQuestion][0]; // pregunta
    optDiv.innerHTML = "";

    // Crear botones para las opciones, cada uno en su propio div para mejor espaciado
    for (let i = 1; i <= 4; i++) {
        let radio = "<div style='margin: 12px 0;'><input type='radio' name='answer' value='"+i+"'> "+Questions[currQuestion][i]+"</div>";
        optDiv.innerHTML += radio;
    }
}

function checkAns() {
    let options = document.getElementsByName("answer");
    let selected = -1;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selected = i;
        }
    }

    if (selected == -1) {
        alert("Por favor, selecciona una opción.");
        return;
    }

    // Sumar puntaje según la opción seleccionada
    if (selected == 0) scoreLider++;
    else if (selected == 1) scoreCreativo++;
    else if (selected == 2) scoreAnalitico++;
    else if (selected == 3) scoreColaborador++;

    // Pasar a la siguiente pregunta o mostrar resultado
    currQuestion++;
    if (currQuestion < Questions.length) {
        loadQues();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("ques").remove();
    document.getElementById("opt").remove();
    document.getElementById("btn").remove();

    let scoreDiv = document.getElementById("score");
    let maxScore = Math.max(scoreLider, scoreCreativo, scoreAnalitico, scoreColaborador);
    let perfil = "";

    if (maxScore == scoreLider) perfil = "Líder";
    else if (maxScore == scoreCreativo) perfil = "Creativo/a";
    else if (maxScore == scoreAnalitico) perfil = "Analítico/a";
    else if (maxScore == scoreColaborador) perfil = "Colaborador/a";

    scoreDiv.innerHTML = "<h2>Tu perfil es: " + perfil + "</h2>";
    scoreDiv.innerHTML += "<p>Puntajes:<br>Líder: "+scoreLider+"<br>Creativo/a: "+scoreCreativo+
                          "<br>Analítico/a: "+scoreAnalitico+"<br>Colaborador/a: "+scoreColaborador+"</p>";

    // Show the table when the test is finished
    document.getElementById('resultTable').style.display = 'table';
}