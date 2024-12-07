var level = "";

function onBookClick(lvl) {

    level += lvl;

    document.getElementById("books").style.visibility = "collapse";
    document.getElementById("choice").style.visibility = "collapse";
    document.getElementById("moduls").style.visibility = "visible";
    document.getElementById("back").style.visibility = "visible";
}

function onModulClick(modul) {

    level += modul;

    document.getElementById("books").style.visibility = "collapse";
    document.getElementById("moduls").style.visibility = "collapse";
    document.getElementById("choice").style.visibility = "collapse";
    document.getElementById("lessons").style.visibility = "visible";
    document.getElementById("back").style.visibility = "visible";
}

function onLessonClick(lesson) {

    level += lesson

    document.getElementById("books").style.visibility = "collapse";
    document.getElementById("moduls").style.visibility = "collapse";
    document.getElementById("lessons").style.visibility = "collapse";
    document.getElementById("choice").style.visibility = "visible";
    document.getElementById("back").style.visibility = "visible";
}

function onChoiceClick() {
    
    document.getElementById("start-btn-cards").onclick = window.location.href = "lessons/cards/cards.html";
    document.getElementById("start-btn-write-ar").onclick = window.location.href = "lessons/cards/cards.html";
    document.getElementById("start-btn-tf").onclick = window.location.href = "lessons/cards/cards.html";
    document.getElementById("start-btn-test-pics-ar").onclick = window.location.href = "lessons/cards/cards.html";

    localStorage.setItem("lesson", level);
}



function back() {

    document.getElementById("back").style.visibility = "collapse";
    document.getElementById("moduls").style.visibility = "collapse";
    document.getElementById("lessons").style.visibility = "collapse";
    document.getElementById("choice").style.visibility = "collapse";
    document.getElementById("books").style.visibility = "visible";

    level = null;
}