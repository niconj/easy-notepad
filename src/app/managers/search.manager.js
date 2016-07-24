export class Search {
  constructor (NotesManager) {
    'ngInject';

    this.isSearching = false;

    this.queryString = null;

    this.toggleSearch = () => this.isSearching = !this.isSearching;

    this.stopSearch = () => {
        this.isSearching = false;
        this.queryString = null;
    }

    this.performSearch = query => {
        let notes = NotesManager.getNotes();
        /* ugly hotfix, TODO: refator */
        if(query === 1) return notes; 
        /* returning filtered notes or if the query string is empty return them all */
        let filtered = notes.filter(note => note.title._includes(query) || note.content._includes(query));
        return filtered;
    }
    
  }
}
