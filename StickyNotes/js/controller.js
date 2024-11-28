document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("notes-container");

    function refreshNotes() {
        View.renderNotes(Model.notes);
        View.updateTime(Model.notes);
    }

//CAMBIAR VISTA
    document.getElementById("toggle-view").addEventListener("click", () => {
        container.classList.toggle("grid-view");
    });
//AÑADE NOTAS
    document.getElementById("add-note").addEventListener("click", () => {
        const title = prompt("Título de la nota:");
        const content = prompt("Contenido de la nota:");
        if (title && content) {
            Model.addNote(title, content);
            refreshNotes();
        }
    });

//BORRAMOS NOTAS
    container.addEventListener("click", event => {
        if (event.target.classList.contains("delete-note")) {
            const id = Number(event.target.closest(".note").getAttribute("data-id"));
            Model.deleteNote(id);
            refreshNotes();
        }
    });

//EDITAR NOTA
    container.addEventListener("input", event => {
        const noteElem = event.target.closest(".note");
        if (noteElem) {
            const id = Number(noteElem.getAttribute("data-id"));
            const newTitle = noteElem.querySelector("h3").textContent;
            const newContent = noteElem.querySelector("p").textContent;
            Model.updateNote(id, newTitle, newContent);
        }
    });

//MOVIMIENTO NOTA
    let dragged = null;
    container.addEventListener("dragstart", event => {
        dragged = event.target.closest(".note");
    });
    container.addEventListener("dragover", event => {
        event.preventDefault();
    });
    container.addEventListener("drop", event => {
        if (dragged) {
            const id = Number(dragged.getAttribute("data-id"));
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            Model.updatePosition(id, x, y);
            refreshNotes();
        }
    });

    //ACTUALIZA EL INEERVALO DE TIEMPO CADA MINUTO
    setInterval(() => View.updateTime(Model.notes), 60000);

    refreshNotes();
});
