export class NotesManager {
  constructor ($window, Selection) {
    'ngInject';

    var ls = $window.localStorage;

    var reorder = notes => notes.forEach((note, index) => note.id = index);

    this.numberOfUntitledNotes = () => this.getNotes().filter(nt => !nt.title).length;

    this.getNotes = () => angular.fromJson(ls.getItem('notes')) || [];

    /* initiating with all notes */
    this.filteredNotes = this.getNotes();

    this.saveNote = note => {
        let notes = this.getNotes();
        notes[note.id] = note;
        ls.setItem('notes', angular.toJson(notes));
        this.filteredNotes = notes;
    }

    this.deleteNote = note => {
        let notes = this.getNotes();
        notes.splice(note.id, 1);
        reorder(notes); // for conflicts
        ls.setItem('notes', angular.toJson(notes));
        this.filteredNotes = notes;
    }

    this.newNote = () => {
        Selection.note = {
            id: this.getNotes().length, 
            title: '', 
            content: ''
        }
    }

    this.isEmpty = note => !note.title && !note.content;
    
  }
}
