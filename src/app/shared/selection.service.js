export class SelectionService {
  constructor () {
    'ngInject';

    this.note = null;

    this.releaseNote = () => this.note = null;

    this.isSelectedNoteEmpty = () => !this.note.title || !this.note.content;
    
  }
}
