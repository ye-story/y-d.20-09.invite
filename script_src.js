const names = [

  { file: "1", names: "Мама", id: "28eOLXxI" },
  { file: "2", names: "Татьяна, Александр, Сергей и Андрей", id: "jXseD8tI" },
  { file: "3", names: "Светлана и Вячеслав", id: "gsA8qp47" },
  { file: "4", names: "Светлана и Владимир", id: "itgBKuSS" },
  { file: "5", names: "Артур", id: "zSF8cgIC" },
  { file: "6", names: "Галина и Олег", id: "9jOQxjMV" },
  { file: "7", names: "Андрей и Ирина", id: "6kQWSCMK" },
  { file: "8", names: "Людмила и Игорь", id: "xTwzK5XR" },
  { file: "9", names: "Татьяна, Дмитрий и Наталья", id: "5PDSj0hy" },
  { file: "10", names: "Евгений и Дарья", id: "ADoJwZze" },
  { file: "11", names: "Лилия и Александр", id: "xeSGXyVE" },
  { file: "12", names: "Наталья и Андрей", id: "Q6ara9fc" },
  { file: "13", names: "Мария и Евгений", id: "FgyzeV8E" },
  { file: "14", names: "Александр и Виктория", id: "2pbvHjdt" },
  { file: "15", names: "Мария", id: "96nhAEn4" },
  { file: "16", names: "Анна", id: "E6QYJmZZ" },
  { file: "17", names: "Сергей и Анастасия", id: "NmaFQmOc" },
  { file: "18", names: "Игорь и Анастасия", id: "O2Qrf4tY" },
  { file: "19", names: "Александр и Валерия", id: "gibFfrC5" },
  { file: "20", names: "Алеся и Алексей", id: "mNCzJi0R" },
  { file: "21", names: "Виктория и Игорь", id: "YQUyEWXL" },
  { file: "22", names: "Дмитрий и Анна", id: "zlkuzeM3" },
  { file: "23", names: "Алеся и Илья", id: "rVaImh2s" },
  { file: "24", names: "Марина и Валерий", id: "sGChXZbc" },
  { file: "25", names: "Дмитрий и Ольга", id: "ZmTIbnXH" },
  { file: "26", names: "Валентина и Александр", id: "sJJsUF01" },
  { file: "27", names: "Евгений и Александра", id: "UEw6NIlG" },
  { file: "28", names: "мама и папа", id: "Jlg634Je" },
  { file: "29", names: "Nijolė и Kęstutis", id: "LB8onIqT" },
  { file: "30", names: "Danuta и Ryšard", id: "Y9E0L8Qm" },
  { file: "31", names: "Diana и Tadas", id: "TTPy19Cp" },
  { file: "32", names: "Kristina", id: "N1T5WH3W" },
  { file: "33", names: "Андрей, Марина, Владислав и Эдгар", id: "lajA3ylD" },
  { file: "34", names: "Виталий", id: "wsxqaz" },
  { file: "35", names: "Darius и Oksana", id: "uo5qTEfo" },
  { file: "36", names: "Kristijonas и Daiva", id: "O5wOYgPz" },
  { file: "37", names: "Evelina", id: "i1sGMOJ3" },
  { file: "38", names: "Elvinas", id: "mXCMl9pT" },
  { file: "39", names: "Irena", id: "AE8asvQW" },
  { file: "40", names: "Aurelija", id: "d9oHIxOl" },
  { file: "41", names: "Laura", id: "FneDWMAN" },
  { file: "42", names: "Marjuš", id: "g6HwealR" },
  { file: "43", names: "Оксана", id: "K52m33Rx" },
  { file: "44", names: "Юлия", id: "8XeDGYXe" },
  { file: "45", names: "Иван и Маргарита", id: "IDjf3bcn" }
];

const main = document.querySelector('main');

const img1 = document.getElementById('img1');

const imgWrappers = [...document.querySelectorAll('.img-wrapper')];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id)

const baseImgPath = './img/guests/';
const nameItem = names.find(item => item.id == id);

if (nameItem) { 
 img1.src = baseImgPath + `${nameItem.file}.webp`; 
}
else {
  img1.src = './img/1.webp';
}

const imgs = [...document.querySelectorAll('.img-wrapper img')];

imgWrappers.forEach((imgWrapper) => {
  if (!imgWrapper.querySelector('img').src.includes('img')) {
    imgWrapper.style.display = 'none';
  }
});
