// Espera a que el contenido del DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene referencias a los elementos del formulario, entrada de texto y lista
    const groceryForm = document.getElementById('grocery-form');
    const groceryInput = document.getElementById('grocery-input');
    const groceryList = document.getElementById('grocery-list');

    // Agrega un evento para manejar la sumisión del formulario
    groceryForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
        addGroceryItem(groceryInput.value); // Llama a la función para añadir un nuevo ítem con el valor de la entrada
        groceryInput.value = ''; // Limpia el campo de entrada
    });
});

// Función para añadir un ítem a la lista de compras
function addGroceryItem(itemName) {
    const groceryList = document.getElementById('grocery-list'); // Obtiene la lista de compras
    const listItem = document.createElement('li'); // Crea un nuevo elemento de lista (li)

    // Establece el contenido HTML del nuevo ítem de lista
    listItem.innerHTML = `
        ${itemName} <!-- Nombre del ítem -->
        <span>
            <button class="edit-btn" onclick="editItem(this)">✔️</button> <!-- Botón para editar -->
            <button class="delete-btn" onclick="deleteItem(this)">🗑️</button> <!-- Botón para eliminar -->
        </span>
    `;
    
    groceryList.appendChild(listItem); // Añade el nuevo ítem a la lista de compras
    saveList(); // Llama a la función para guardar la lista (se debe implementar correctamente)
}

// Función para limpiar todos los ítems de la lista
function clearItems() {
    const groceryList = document.getElementById('grocery-list'); // Obtiene la lista de compras
    groceryList.innerHTML = ''; // Limpia el contenido de la lista
}

// Agrega un evento al botón de limpiar para ejecutar clearItems
document.getElementById('clear-btn').addEventListener('click', clearItems);

// Función para eliminar un ítem de la lista
function deleteItem(button) {
    const item = button.parentElement.parentElement; // Obtiene el ítem de lista que contiene el botón
    item.remove(); // Elimina el ítem de la lista
}

// Función para editar un ítem de la lista
function editItem(button) {
    const item = button.parentElement.parentElement; // Obtiene el ítem de lista que contiene el botón
    const itemName = item.firstChild.textContent.trim(); // Obtiene el texto del ítem
    const newItemName = prompt('Edita el elemento:', itemName); // Muestra un cuadro de diálogo para editar el ítem
    if (newItemName) { // Si el usuario proporciona un nuevo nombre
        item.firstChild.textContent = newItemName; // Actualiza el texto del ítem
    }
}

// Función para guardar la lista en el almacenamiento local
function saveList() {
    // Guarda el contenido HTML de la lista de compras en el almacenamiento local
    localStorage.setItem('groceryList', JSON.stringify(groceryList.innerHTML));
}   