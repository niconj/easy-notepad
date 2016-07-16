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
  constructor ($scope, NotesManager, SelectionService, $location) {
    'ngInject';
    
    function init() {
        $scope.notes = NotesManager.getSavedNotes();
    }

    $scope.createNote = () => {
      NotesManager.newNote();
      $location.path('note');
    }

    $scope.select = note => {
      SelectionService.note = note;
      $location.path('note');
    }

    $scope.delete = note => {
      NotesManager.deleteNote(note);
      $scope.notes = NotesManager.getSavedNotes(); //maybe send to a service and update constantly
    }

    

    init();

  }
}
