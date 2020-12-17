const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    debugger
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!!'));
    } else {
        console.log(chalk.bgRed("Note title taken!"));
    }
};

const removeNote = (title) => {
    console.log('Removing ' + title + '...');
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notesToKeep.length < notes.length) {
        console.log(chalk.green.inverse('Note ' + title + ' removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.bgRed('No note found!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.cyan.inverse.bold('Your notes:'));
    notes.forEach((note) => {
        console.log('- ' + note.title);
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.yellow.inverse(note.title));
        console.log(note.body)
    } else {
        console.log(chalk.bgRed("Note not found!"));
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};