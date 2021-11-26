// add, del, read, list commands at file system manipulation

const fs = require('fs')

// Add new note to File
const addNote = function (title, body) {
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

// Read a specific Note
const readNote = function (title) {
    const notes = loadNotes()
    const note = notes.filter(note => { return note.title == title })

    note.forEach(note => {
        console.log('--title: "' + note.title + '" --body: ' + note.body)
        return
    })
}

// Remove a specific Note
const delNote = function (title) {
    const notes = loadNotes()
    notesKeep = notes.filter(n => { return n.title !== title })

    saveNotes(notesKeep)

    if (notesKeep.length != 0) {
        console.log('El elemento "' + title + '" fue eliminado')
    } else {
        console.log('El elemento "' + title + '" no fue encontrado!')
    }
}

// list all notes at screen
const listNotes = function () {
    const notes = loadNotes()

    notes.forEach(function (note) {
        console.log('--title: "' + note.title + '" --body: "' + note.body + '"')
    })
}

// Save to File
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load from File
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    addNote: addNote,
    readNote: readNote,
    delNote: delNote,
    listNotes: listNotes
}