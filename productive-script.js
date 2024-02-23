const myArray = [{
    name: '',
    time: ''
}];

function getInputItem () {
    const inputElement = document.querySelector('.JS-input-bar');
    const dueDateElement = document.querySelector('.js-calendar');
    let item = inputElement.value;
    let dueDate = dueDateElement.value;

    myArray.push({
        name: item,
        time: dueDate
    });

    renderTodoList();
}

function renderTodoList () {
    let todoListHtml = '';

    for (let i = 0; i < myArray.length; i++) {
        const toDoObject = myArray[i];
        const name = toDoObject.name;
        const time = toDoObject.time;
        const html1 = `<div class="items-box"><p class='items'>${name} <br> <strong>${time}</strong></p><button class="remove-button" onclick="removeItem(${i})">Remove</button></div>`;
        todoListHtml += html1;
    }

    document.querySelector('.items-to-do').innerHTML = todoListHtml;
}

function removeItem(index) {
    myArray.splice(index, 1);
    renderTodoList();
}
