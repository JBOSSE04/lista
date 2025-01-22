document.addEventListener('DOMContentLoaded', () => {
    const groceryForm = document.getElementById('grocery-form');
    const groceryInput = document.getElementById('grocery-input');
    const groceryList = document.getElementById('grocery-list');

    groceryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addGroceryItem(groceryInput.value);
        groceryInput.value = '';
    });
});

function addGroceryItem(itemName) {
    const groceryList = document.getElementById('grocery-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${itemName}
        <span>
            <button class="edit-btn" onclick="editItem(this)">✔️</button>
            <button class="delete-btn" onclick="deleteItem(this)">🗑️</button>
        </span>
    `;
    groceryList.appendChild(listItem);
    saveList(listItem);

}

function clearItems() {
    const groceryList = document.getElementById('grocery-list');
    groceryList.innerHTML = '';

}

document.getElementById('clear-btn').addEventListener('click', clearItems);

function deleteItem(button) {
    const item = button.parentElement.parentElement;
    item.remove();

}

function editItem(button) {
    const item = button.parentElement.parentElement;
    const itemName = item.firstChild.textContent.trim();
    const newItemName = prompt('Edita el elemento:', itemName);
    if (newItemName) {
        item.firstChild.textContent = newItemName;
    }
}

function saveList() {
    localStorage.setItem('groceryList', JSON.stringify(groceryList.innerHTML));
   
}
