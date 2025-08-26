// 3

class Styles {
  constructor(styleName, styleValue) {
    this.name = styleName;
    this.value = styleValue;
  }
}

const stylesArray = [
  new Styles('color', 'red'),
  new Styles('font-size', '48px'),
  new Styles('text-align', 'center'),
  new Styles('text-decoration', 'line-through'),
  new Styles('font-weight', 700),
];

function writeHTML(array) {
  let result = '';
  for(let i = 0; i < array.length; i++) {
    // console.log(`<p style="${array[i].name}: ${array[i].value};"></p>`);
    result += `${array[i].name}: ${array[i].value}; `;
  }
  document.write(`<p style="${result}">Hello!</p>`);
}

writeHTML(stylesArray);


// 4

class Auditoria {
  constructor(name, count, faculty) {
    this.name = name;
    this.count = count;
    this.faculty = faculty;
  }
}

const auditoriasArray = [
  new Auditoria('Laboratoria', 16, 'Chemical'),
  new Auditoria('Palata #6', 20, 'Biological'),
  new Auditoria('Nuclear Reactor', 5, 'Physical'),
  new Auditoria('Archeology', 12, 'Historian'),
];

function academicalClasses(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(`- ${array[i].name} for ${array[i].count} people, ${array[i].faculty} faculty`);
  }
}

function auditory(faculty) {
  auditoriasArray.forEach((auditoriasArray) => {
    if (auditoriasArray.faculty == faculty) {
      console.log(auditoriasArray.name);
    }
  });
}

function auditoryForGroups(name, count, faculty) {
  let isForYou = false;
  auditoriasArray.forEach((auditoriasArray) => {
    if (auditoriasArray.name == name && auditoriasArray.faculty == faculty && auditoriasArray.count >= count) {
      isForYou = true;
      console.log(auditoriasArray.name);
    }
  });
  if(!isForYou) {
    console.log('No auditories for ypur groups!!');
  }
}

academicalClasses(auditoriasArray);
auditory('Chemical');
auditoryForGroups('Nuclear Reactor', 3, 'Physical');
auditoryForGroups('Palata #6', 21, 'Biological');
auditoryForGroups('Game City', 4, 'Biological');

function sortCount(array) {
  array.sort((a, b) => a.count - b.count);
}
sortCount(auditoriasArray);
console.log(auditoriasArray);


// сортировка по алфавиту пока не доходит

