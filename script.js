const names = [
  { file: "0", names: "Общее", id: "xkjaql" },
  { file: "1", names: "Мама", id: "plmnbv" },
  { file: "2", names: "Татьяна, Александр, Сергей и Андрей", id: "wzxytf" },
  { file: "3", names: "Светлана и Вячеслав", id: "ghjklp" },
  { file: "4", names: "Светлана и Владимир", id: "mnbvcx" },
  { file: "5", names: "Артур", id: "qwerty" },
  { file: "6", names: "Галина и Олег", id: "asdfgh" },
  { file: "7", names: "Андрей и Ирина", id: "zxcvbn" },
  { file: "8", names: "Людмила и Игорь", id: "poiuyt" },
  { file: "9", names: "Татьяна, Дмитрий и Наталья", id: "lkjhgf" },
  { file: "10", names: "Евгений и Дарья", id: "mnbvcс" },
  { file: "11", names: "Лилия и Александр", id: "qazwsx" },
  { file: "12", names: "Наталья и Андрей", id: "edcrfv" },
  { file: "13", names: "Мария и Евгений", id: "tgbyhn" },
  { file: "14", names: "Александр и Виктория", id: "ujmikp" },
  { file: "15", names: "Мария", id: "okmijn" },
  { file: "16", names: "Анна", id: "plokij" },
  { file: "17", names: "Сергей и Анастасия", id: "uhbygv" },
  { file: "18", names: "Игорь и Анастасия", id: "tfcrdx" },
  { file: "19", names: "Александр и Валерия", id: "eszrdx" },
  { file: "20", names: "Алеся и Алексей", id: "qscftv" },
  { file: "21", names: "Виктория и Игорь", id: "wdxsza" },
  { file: "22", names: "Дмитрий и Анна", id: "rfvtgb" },
  { file: "23", names: "Алеся и Илья", id: "yhnmki" },
  { file: "24", names: "Марина и Валерий", id: "edwsqa" },
  { file: "25", names: "Дмитрий и Ольга", id: "qazxsw" },
  { file: "26", names: "Валентина и Александр", id: "cdewsx" },
  { file: "27", names: "Евгений и Александра", id: "vfrtgb" },
  { file: "28", names: "мама и папа", id: "bgtfcd" },
  { file: "29", names: "Nijolė и Kęstutis", id: "nhyujm" },
  { file: "30", names: "Danuta и Ryšard", id: "mkiolp" },
  { file: "31", names: "Diana и Tadas", id: "ujmyhn" },
  { file: "32", names: "Kristina", id: "tgbzhn" },
  { file: "33", names: "Андрей, Марина, Владислав и Эдгар", id: "rfvedc" },
  { file: "34", names: "Виталий", id: "wsxqaz" },
  { file: "35", names: "Darius и Oksana", id: "okmpln" },
  { file: "36", names: "Kristijonas и Daiva", id: "ijnuhy" },
  { file: "37", names: "Evelina", id: "tgbnhy" },
  { file: "38", names: "Elvinas", id: "mjuhyg" },
  { file: "39", names: "Irena", id: "qasxed" },
  { file: "40", names: "Aurelija", id: "plmkoi" },
  { file: "41", names: "Laura", id: "ijnbhu" },
  { file: "42", names: "Marjuš", id: "ygvftb" },
  { file: "43", names: "Оксана", id: "rfvgyh" },
  { file: "44", names: "Юлия", id: "ujmiko" },
  { file: "45", names: "Иван и Маргарита", id: "plmnji" }
];

const main = document.querySelector('main');

const img1 = document.getElementById('img1');

const imgWrappers = [...document.querySelectorAll('.img-wrapper')];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

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
