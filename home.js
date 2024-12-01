var level = "";

function onBookClick(lvl) {

    level += lvl;

    document.getElementById("books").style.visibility = "collapse";
    document.getElementById("moduls").style.visibility = "visible";
    document.getElementById("back").style.visibility = "visible";
}

function onModulClick(modul) {

    level += modul;

    document.getElementById("books").style.visibility = "collapse";
    document.getElementById("moduls").style.visibility = "collapse";
    document.getElementById("lessons").style.visibility = "visible";
    document.getElementById("back").style.visibility = "visible";
}

function onLessonClick() {

    if (level == "A11") {
        document.getElementById("l1").onclick = window.location.href = "lessons/l1.html";
    } else {
        alert("Урок находится в разработке и скоро будет доступен.");
    }
}

function back() {

    document.getElementById("back").style.visibility = "collapse";
    document.getElementById("moduls").style.visibility = "collapse";
    document.getElementById("lessons").style.visibility = "collapse";
    document.getElementById("books").style.visibility = "visible";

    level = null;
}