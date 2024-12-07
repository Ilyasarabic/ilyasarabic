var ine = localStorage.getItem("lesson");

if (ine == "A111") {
    document.getElementById("ar").style.color = "yellow";
} else {
    document.getElementById("ar").style.color = "red";
}


fetch('words.json')
  .then(response => response.json()) // Преобразуем в объект
  .then(data => {
    // JSON загружен и готов к использованию
  })
  .catch(error => {
    console.error('Ошибка загрузки JSON:', error);
  });