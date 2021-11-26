// My App command line

const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')
const { help } = require('yargs')

//console.log ('First run')

// Create Add command
yargs.command ({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title to Add',
            demandOption: true,
            type: 'String' 
        },
        body: {
            describe: 'Note body to Add',
            demandOption: true,
            type: 'String' 
        }        
    },
    handler(argv) {
        console.log('title:', argv.title)
        console.log('body :', argv.body)    
        console.log('Adding a new note!')    
        notes.addNote(argv.title, argv.body)  
        console.log('Note was added')           
    }
})

// Create delete command
yargs.command ({
    command: 'del',
    describe: 'Delete a found note',
    builder: {
        title: {
            describe: 'Note title to Delete',
            demandOption: true,
            type: 'String'
        }
    },    
    handler(argv) {
        console.log('Deleting a new note!')
        notes.delNote(argv.title)
    }
})

// Create read command
yargs.command ({
    command:'read',
    describe: 'Read a specific note',
    builder: {
        title: {
            describe: 'Note title to read',
            demandOption: true,
            type: 'String' 
        }
    },    
    handler(argv) {
        console.log('Read a specific note!')
        notes.readNote(argv.title)
    }
})

// Create list command
yargs.command ({
    command:'list',
    describe: 'Listing all notes',
    handler(argv) {
        console.log('Listing all notes!')
        notes.listNotes()
    }
})

yargs.parse() // To set above changes
