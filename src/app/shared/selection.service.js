export class SelectionService {
  constructor () {
    'ngInject';

    this.note = null;

    this.releaseNote = () => this.note = null;
    
  }
}
