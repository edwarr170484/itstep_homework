// Task3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст,
// и выводит этот текст с помощью document.write() в тегах <p></p>,
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
console.log("Task3");

class Style {
  constructor(styleName, styleValue) {
    this.name = styleName;
    this.value = styleValue;
  }
}
/**
 * Функция, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
 * добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
 * @param {*} styleList
 * @param {*} text
 * @return text
 */
function printParagraph(styleList, text) {

  let styleHtml = "";
  for (let style of styleList) {
    styleHtml += `${style.name}: ${style.value}; `;
  }
  document.write(`<p style="${styleHtml}">${text}</p>`);
}

let styleRomantic = [
  new Style("color", '#add8e6'),
  new Style("font-size", "large"),
  new Style("font-style", "italic"),
  new Style("font-weight", "100"),
  new Style("text-decoration", "none"),
];
printParagraph(styleRomantic, "There might be some romantic text here.");

let styleSoulful = [
  new Style("color", '#8608ee'),
  new Style("font-size", "small"),
  new Style("font-style", "oblique"),
  new Style("font-weight", "400"),
  new Style("text-decoration", "none"),
];
printParagraph(styleSoulful, "There might be some soulful text here.");

let styleHeroic = [
  new Style("color", '#994b38'),
  new Style("font-size", "large"),
  new Style("font-style", "normal"),
  new Style("font-weight", "800"),
  new Style("text-decoration", "underline"),
];
printParagraph(styleHeroic, "There might be some heroic text here.");

let stylePsychological = [
  new Style("color", '#6a8069'),
  new Style("font-size", "medium"),
  new Style("font-style", "normal"),
  new Style("font-weight", "400"),
  new Style("text-decoration", "underline"),
];
printParagraph(stylePsychological, "There might be some psychological text here.");
/*-------------------------------------------------------------------------------------*/

// Task4
// Создать массив аудиторий академии. Объект-аудитория состоит из
// названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту).

console.log("Task4");

class AcademyAuditorium {
  constructor(name, capacity, facultyName) {
    this.name = name;
    this.capacity = capacity;
    this.faculty = facultyName;
  }
}

let academyAuditoriumList = [
  new AcademyAuditorium("Восточная башня", 60, "Griffindor"),
  new AcademyAuditorium("Гостиная Грифиндора", 40, "Griffindor"),
  new AcademyAuditorium("Башня Когтеврана", 9, "Ravenclaw"),
  new AcademyAuditorium("Гостиная Пуффендуя", 19, "Hufflepuff"),
  new AcademyAuditorium("Гостиная Слизерина", 32, "Slytherin"),
];
// console.log(academyAuditoriumList);

/**
 * Вывод на экран всех аудиторий.
 * 
 * @param array academyAuditoriumList
 * @return void
 */
function displayAllAudiences(academyAuditoriumList) {
  console.log(`Все аудитории академии Чародейства и волшебства Хо́гвартс:`);
  for (audience of academyAuditoriumList) {
    console.log(`${audience.name}`);
  }
}

displayAllAudiences(academyAuditoriumList);
/*----------------------------------------------------------------------*/

/**
 * Вывод на экран аудиторий для указанного факультета.
 * 
 * @param string facultyName
 * @return void
 */
function displayAudienceByFacultyName(facultyName) {
  console.log(`Аудитории для факультета ${facultyName}:`);
  for (let audience of academyAuditoriumList) {
    if (audience.faculty === facultyName) {
      console.log(`${audience.name}`);
    }
  }
}

displayAudienceByFacultyName("Griffindor");
/*----------------------------------------------------------------------*/

class Group {
  constructor(name, studentCount, facultyName) {
    this.name = name;
    this.capacity = studentCount;
    this.faculty = facultyName;
  }
}

let groupList = [
  new Group("Грифиндорцы-младшие", 32, "Griffindor"),
  new Group("Когтевранцы-младшие", 1, "Ravenclaw"),
  new Group("Пуффендуйцы-младшие", 11, "Hufflepuff"),
  new Group("Слизеринцы-младшие", 24, "Slytherin"),
  new Group("Грифиндорцы-средние", 35, "Griffindor"),
  new Group("Когтевранцы-средние", 4, "Ravenclaw"),
  new Group("Пуффендуйцы-средние", 14, "Hufflepuff"),
  new Group("Слизеринцы-средние", 27, "Slytherin"),
  new Group("Грифиндорцы-старшие", 30, "Griffindor"),
  new Group("Когтевранцы-старшие", 1, "Ravenclaw"),
  new Group("Пуффендуйцы-старшие", 10, "Hufflepuff"),
  new Group("Слизеринцы-старшие", 39, "Slytherin"),
];
// console.log(groupList);

/**
 * Вывод на экран только тех аудиторий, которые подходят для переданной группы.
 * Объект-группа состоит из названия, количества студентов и названия факультета.
 * 
 * @param Group group
 * @return void
 */
function displayAudienceForGroup(group) {
  console.log(`Аудитории для группы ${group.name}:`);
  for (let audience of academyAuditoriumList) {
    if (audience.faculty === group.faculty) {
      console.log(`${audience.name}`);
    }
  }
}

displayAudienceForGroup(groupList[0]);
/*----------------------------------------------------------------------*/

/**
 * Функция сортировки аудиторий по количеству мест.
 * 
 * @param array academyAuditoriumList
 * @return  array by capacity 
 */
function sortByCapacity(academyAuditoriumList) {
  console.log(`Сортировка аудиторий по количеству мест:`);

  academyAuditoriumList.sort((a, b) => {
    return a.capacity - b.capacity;
  });

  for (let audience of academyAuditoriumList) {
    console.log(`${audience.name} - ${audience.capacity}`);
  }
}
sortByCapacity(academyAuditoriumList);
/*----------------------------------------------------------------------*/

/**
 * Функция сортировки аудиторий по названию (по алфавиту).
 * 
 * @param array academyAuditoriumList
 * @return array sorted by name
 */
function sortByAcademyAuditoriumName(academyAuditoriumList) {
  console.log(`Сортировка аудиторий по названию:`);

  academyAuditoriumList.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  for (let audience of academyAuditoriumList) {
    console.log(`${audience.name}`);
  }
}
sortByAcademyAuditoriumName(academyAuditoriumList);
/*----------------------------------------------------------------------*/