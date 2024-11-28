const Model = {
    notes: [],
    loadNotes() {
        const storedNotes = localStorage.getItem("notes");
        this.notes = storedNotes ? JSON.parse(storedNotes) : [];
    },
    saveNotes() {
        localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    addNote(title, content) {
        const newNote = {
            id: Date.now(),
            title,
            content,
            createdAt: new Date().toISOString(),
            position: { x: 0, y: 0 },
        };
        this.notes.push(newNote);
        this.saveNotes();
        return newNote;
    },
    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
    },
    updateNote(id, newTitle, newContent) {
        const note = this.notes.find(note => note.id === id);
        if (note) {
            note.title = newTitle;
            note.content = newContent;
            this.saveNotes();
        }
    },
    updatePosition(id, x, y) {
        const note = this.notes.find(note => note.id === id);
        if (note) {
            note.position = { x, y };
            this.saveNotes();
        }
    }
};

Model.loadNotes();
