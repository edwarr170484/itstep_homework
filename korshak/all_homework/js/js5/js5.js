const styles = [
    { name: 'color', value: 'blue' },
    { name: 'font-size', value: '20px' },
    { name: 'text-align', value: 'center' },
    { name: 'text-decoration', value: 'underline' }
];

function applyStylesAndDisplayText(stylesArray, text) {
 
    let styleString = stylesArray.map(style => `${style.name}: ${style.value};`).join(' ');

    document.write(`<p style="${styleString}">${text}</p>`);
}

applyStylesAndDisplayText(styles, "Приветик)!");










const classrooms = [
    { name: 'Аудитория 101', seats: 15, faculty: 'Факультет информатики' },
    { name: 'Аудитория 102', seats: 20, faculty: 'Факультет математики' },
    { name: 'Аудитория 103', seats: 12, faculty: 'Факультет физики' },
    { name: 'Аудитория 104', seats: 18, faculty: 'Факультет химии' },
    { name: 'Аудитория 105', seats: 10, faculty: 'Факультет биологии' }
];

// 1. Вывод на экран всех аудиторий
function displayAllClassrooms() {
    console.log("Все аудитории:");
    classrooms.forEach(classroom => {
        console.log(`Название: ${classroom.name}, Мест: ${classroom.seats}, Факультет: ${classroom.faculty}`);
    });
}

// 2. Вывод на экран аудиторий для указанного факультета
function displayClassroomsByFaculty(faculty) {
    console.log(`Аудитории для факультета "${faculty}":`);
    const filteredClassrooms = classrooms.filter(classroom => classroom.faculty === faculty);
    if (filteredClassrooms.length === 0) {
        console.log("Нет аудиторий для данного факультета.");
    } else {
        filteredClassrooms.forEach(classroom => {
            console.log(`Название: ${classroom.name}, Мест: ${classroom.seats}`);
        });
    }
}

// 3. Вывод на экран только тех аудиторий, которые подходят для переданной группы
function displaySuitableClassrooms(group) {
    console.log(`Аудитории для группы "${group.name}":`);
    const suitableClassrooms = classrooms.filter(classroom => classroom.seats >= group.students && classroom.faculty === group.faculty);
    if (suitableClassrooms.length === 0) {
        console.log("Нет подходящих аудиторий для данной группы.");
    } else {
        suitableClassrooms.forEach(classroom => {
            console.log(`Название: ${classroom.name}, Мест: ${classroom.seats}`);
        });
    }
}

// 4. Функция сортировки аудиторий по количеству мест
function sortClassroomsBySeats() {
    classrooms.sort((a, b) => a.seats - b.seats);
    console.log("Аудитории отсортированы по количеству мест:");
    displayAllClassrooms();
}

// 5. Функция сортировки аудиторий по названию (по алфавиту)
function sortClassroomsByName() {
    classrooms.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Аудитории отсортированы по названию:");
    displayAllClassrooms();
}

displayAllClassrooms();
displayClassroomsByFaculty('Факультет математики');

const group = { name: 'Группа 1', students: 12, faculty: 'Факультет физики' };
displaySuitableClassrooms(group);

sortClassroomsBySeats();
sortClassroomsByName();