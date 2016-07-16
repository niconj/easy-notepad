export class NoteController {
  constructor ($scope, 
    SelectionService, 
    NotesManager, 
    $location) {
    'ngInject';
    
    $scope.selection = SelectionService;
    $scope.readOnly = {
      title: true, 
      content: true
    };

    function init() {
      if(!SelectionService.note) return $location.path('/');
      if(NotesManager.isEmpty(SelectionService.note)) { // probably a new one
        $scope.readOnly.title = false;
        $scope.readOnly.content = false;
      }
    }

    $scope.modified = () => NotesManager.saveNote(SelectionService.note);

    $scope.back = () => {
      SelectionService.note = null;
      $location.path('/');
    }

    init();

  }
}
