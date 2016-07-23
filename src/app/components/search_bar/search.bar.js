export function SearchBar() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/search_bar/search-bar.html',
    scope: {}, // isolated
    controller: SearchBarController, 
    controllerAs: 'sc', 
    bindToController: true
  };

  return directive;
}

class SearchBarController {
  constructor (ThemeManager, Search, NotesManager, $log) {
    'ngInject';

    this.toggleSearch = () => {
      Search.toggleSearch();
      Search.queryString = null;
      /* custom parameter to filter all notes again [ugly hotfix, TODO: refactor] 
      using This because of the assignation that implies */
      if(!Search.isSearching) this.performSearch(1);
      $log.log(Search.isSearching? 'Enabled search' : 'Disabled search');
    }

    this.performSearch = query => NotesManager.filteredNotes = Search.performSearch(query);
    
    this.componentColor = ThemeManager.componentColor;
    
    this.search = Search;

  }
}
