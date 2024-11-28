const View = {
    renderNotes(notes) {
        const container = document.getElementById("notes-container");
        container.innerHTML = "";
        notes.forEach(note => {
            const noteElem = document.createElement("div");
            noteElem.className = "note";
            noteElem.style.transform = `translate(${note.position.x}px, ${note.position.y}px)`;
            noteElem.setAttribute("data-id", note.id);
            noteElem.innerHTML = `
                <button class="delete-note">x</button>
                <h3 contenteditable="true">${note.title}</h3>
                <p contenteditable="true">${note.content}</p>
                <div class="time-elapsed"></div>
            `;
            container.appendChild(noteElem);
        });
    },
    updateTime(notes) {
        notes.forEach(note => {
            const noteElem = document.querySelector(`.note[data-id='${note.id}'] .time-elapsed`);
            const minutesElapsed = Math.floor((Date.now() - new Date(note.createdAt)) / 60000);
            noteElem.textContent = `${minutesElapsed} mins ago`;
        });
    }
};
