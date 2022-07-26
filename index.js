const input = document.querySelector('input');
// const buttonAdd = document.querySelector('.add');
const buttonFinish = document.querySelector('.finish');
const div = document.querySelector('.error');
const divArray = document.querySelector('.array');
const divSum = document.querySelector('.sum');

let values = [];
let sum = 0;

// buttonAdd.addEventListener("click", putValues);

// function putValues() {
//     if ((input.value === '') || (!isFinite(input.value)) || (input.value === null )) {
//         buttonAdd.disabled = true;
//         div.textContent = 'Ввод завершён. Нажмите "Готово"';
//         values.pop();
//     } 
// }

input.addEventListener("change", getValues);

function getValues() {
    values.push(input.value);
    console.log(values);
    if ((input.value === '') || (!isFinite(input.value)) || (input.value === null )) {
        values.pop();
        div.textContent = 'Ввод завершён. Нажмите "Готово"';
        input.removeEventListener("change", getValues);
    }
}

buttonFinish.addEventListener("click", sumInput);

function sumInput() {
    // buttonAdd.disabled = true;

    divArray.textContent = `Отсортированный по возрастанию массив: [${values.sort()}]`;

    for (let i = 0; i < values.length; i++) {
        sum += Number(values[i]);
    }
    divSum.textContent = `Сумма элементов: ${sum}`;

    buttonFinish.disabled = true;
    div.textContent = 'Для повтора обновите страницу';
}