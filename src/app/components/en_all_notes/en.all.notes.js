export function EnAllNotes() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/en_all_notes/en-all-notes.html',
    scope: {}, // isolated
    controller: EnAllNotesController
  };

  return directive;
}

class EnAllNotesController {
  constructor ($scope, NotesManager, SelectionService, $location, ThemeManager, Search) {
    'ngInject';

    init();

    $scope.search = Search;

    $scope.select = note => {
      SelectionService.note = note;
      /* make a clean function */
      Search.queryString = null;
      Search.isSearching = false;
      $location.path('note');
    }

    $scope.delete = note => {
      NotesManager.deleteNote(note);
      if(Search.isSearching) NotesManager.filteredNotes = Search.performSearch(Search.queryString);
    }

    function init() {
      /* sent this to NotesManager using resetNotes() or something */
      NotesManager.filteredNotes = Search.performSearch();
      $scope.notes = NotesManager;
      $scope.componentColor = ThemeManager.componentColor;
    }

  }
}
