export function AllNotes() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/all_notes/all-notes.html',
    scope: {}, // isolated
    controller: AllNotesController
  };

  return directive;
}

class AllNotesController {
  constructor ($scope, NotesManager, Selection, $location, Theme, Search) {
    'ngInject';

    init();

    $scope.search = Search;

    $scope.select = note => {
      Selection.selectNote(note);
      Search.stopSearch();
      $location.path('note');
    }

    $scope.delete = note => {
      NotesManager.deleteNote(note);
      if(Search.isSearching) NotesManager.filteredNotes = Search.performSearch(Search.queryString);
    }

    function init() {
      /* send this to NotesManager using resetNotes() or something */
      NotesManager.filteredNotes = Search.performSearch();
      $scope.notes = NotesManager;
      $scope.componentColor = Theme.componentColor;
    }

  }
}
