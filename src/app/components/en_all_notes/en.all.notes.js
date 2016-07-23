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
      $location.path('note');
    }

    $scope.delete = note => {
      NotesManager.deleteNote(note);
    }

    function init() {
        $scope.notes = NotesManager;
        $scope.componentColor = ThemeManager.componentColor;
    }

  }
}
