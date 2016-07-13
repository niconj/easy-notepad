export function EnNote() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/en_note/en-note.html',
    scope: {}, // isolated
    controller: EnNoteController
  };

  return directive;
}

class EnNoteController {
  constructor ($scope, SelectionService, NotesManager) {
    'ngInject';
    
    $scope.selection = SelectionService;
    $scope.readOnly = {
      title: true, 
      content: true
    };

    $scope.modified = () => NotesManager.saveNote(SelectionService.note);

  }
}
