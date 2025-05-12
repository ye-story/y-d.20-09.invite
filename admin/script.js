const names = [
  { id: "0", names: "Общее" },
  { id: "1", names: "Мама" },
  { id: "2", names: "Татьяна, Александр, Сергей и Андрей" },
  { id: "3", names: "Светлана и Вячеслав" },
  { id: "4", names: "Светлана и Владимир" },
  { id: "5", names: "Артур" },
  { id: "6", names: "Галина и Олег" },
  { id: "7", names: "Андрей и Ирина" },
  { id: "8", names: "Людмила и Игорь" },
  { id: "9", names: "Татьяна, Дмитрий и Наталья" },
  { id: "10", names: "Евгений и Дарья" },
  { id: "11", names: "Лилия и Александр" },
  { id: "12", names: "Наталья и Андрей" },
  { id: "13", names: "Мария и Евгений" },
  { id: "14", names: "Александр и Виктория" },
  { id: "15", names: "Мария" },
  { id: "16", names: "Анна" },
  { id: "17", names: "Сергей и Анастасия" },
  { id: "18", names: "Игорь и Анастасия" },
  { id: "19", names: "Александр и Валерия" },
  { id: "20", names: "Алеся и Алексей" },
  { id: "21", names: "Виктория и Игорь" },
  { id: "22", names: "Дмитрий и Анна" },
  { id: "23", names: "Алеся и Илья" },
  { id: "24", names: "Марина и Валерий" },
  { id: "25", names: "Дмитрий и Ольга" },
  { id: "26", names: "Валентина и Александр" },
  { id: "27", names: "Евгений и Александра" },
  { id: "28", names: "мама и папа" },
  { id: "29", names: "Nijolė и Kęstutis" },
  { id: "30", names: "Danuta и Ryšard" },
  { id: "31", names: "Diana и Tadas" },
  { id: "32", names: "Kristina" },
  { id: "33", names: "Андрей, Марина, Владислав и Эдгар" },
  { id: "34", names: "Виталий" },
  { id: "35", names: "Darius и Oksana" },
  { id: "36", names: "Kristijonas и Daiva" },
  { id: "37", names: "Evelina" },
  { id: "38", names: "Elvinas" },
  { id: "39", names: "Irena" },
  { id: "40", names: "Aurelija" },
  { id: "41", names: "Laura" },
  { id: "42", names: "Marjuš" },
  { id: "43", names: "Оксана" },
  { id: "44", names: "Юлия" },
  { id: "45", names: "Иван и Маргарита" }
];


const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});
