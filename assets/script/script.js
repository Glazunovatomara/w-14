

//Вам необходимо написать программу, которая проведёт анализ оценок студентов и выполнит несколько операций с использованием методов массивов.

//Шаги выполнения:

//Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
let grades = [];
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));
grades.push(Math.floor(Math.random()*100));

//console.log(grades)

const marks = document.getElementById('marks');
marks.textContent = grades.join(', ')

//Рассчитайте и выведите средний балл студентов, используя методы массивов.
let sum = grades.reduce(function(a,b) {
    return a+b;
},0);

const markcCalc = Math.floor(sum/grades.length);

const averageMark = document.getElementById('averageMark');
averageMark.textContent = markcCalc

//Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const gradesCopy = grades.map((el)=> el);
gradesCopy.sort(function(a,b) {
    return a-b;
})
const maxMark = document.getElementById('maxMark');
maxMark.textContent = gradesCopy[gradesCopy.length-1];
//Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.

const minMark = document.getElementById('minMark');
minMark.textContent = gradesCopy[0];

//Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const filteredGradesMax = grades.filter(el=>el >=60);
const positiveGrade = document.getElementById('positiveGrade');
positiveGrade.textContent = filteredGradesMax.length

//Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const filteredGradesMin = grades.filter(el=>el <=59);
const negativeGrade = document.getElementById('negativeGrade');
negativeGrade.textContent = filteredGradesMin.length

//Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
//Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//Если оценка ниже 20, преобразуйте её в "E"
const letterTransformed = grades.map(function (el) {
    if (el >=80) {
        return 'A'
    } else if (el >=60 && el <=79) {
        return 'B'
    } else if (el >= 40 && el <=59) {
        return 'C'
    } else if (el >=20 && el <=39) {
        return 'D'
    } else {
        return 'E'
    }
});

const letterGrades = document.getElementById('letterGrades');
letterGrades.textContent = letterTransformed.join(', ')
