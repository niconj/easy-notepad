export class NotesManager {
  constructor ($window, SelectionService) {
    'ngInject';

    var ls = $window.localStorage;

    var reorder = notes => notes.forEach((note, index) => note.id = index);

    this.getSavedNotes = () => angular.fromJson(ls.getItem('notes')) || [];

    this.saveNote = note => {
        let notes = this.getSavedNotes();
        notes[note.id] = note;
        ls.setItem('notes', angular.toJson(notes));
    }

    this.deleteNote = note => {
        let notes = this.getSavedNotes();
        notes.splice(note.id, 1);
        reorder(notes); // for conflicts
        ls.setItem('notes', angular.toJson(notes));
    }

    this.newNote = () => {
        SelectionService.note = {
            id: this.getSavedNotes().length, 
            title: '', 
            content: ''
        }
    }
    
  }
}
