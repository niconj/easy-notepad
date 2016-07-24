export class Selection {
  constructor () {
    'ngInject';

    this.note = null;

    this.selectNote = note => this.note = note;

    this.releaseNote = () => this.note = null;

    this.isSelectedNoteEmpty = () => !this.note.title || !this.note.content;
    
  }
}
