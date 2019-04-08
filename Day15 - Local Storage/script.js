const addItems = document.querySelector('form.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
    event.preventDefault();
    const text = this.querySelector('[name="item"]').value;
    const item = { 
        text, 
        done: false 
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.items = JSON.stringify(items);
    this.reset();
}

function populateList(items = [], itemsList) {
    itemsList.innerHTML = items.map((item, i) => {
        return `
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${item.done ? 'checked' : ''} />
                <label for="item${i}">${item.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(event) {
    const input = event.target;
    const index = input.dataset.index;
    items[index].done = input.checked;
    localStorage.items = JSON.stringify(items);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('change', toggleDone);

populateList(items, itemsList);