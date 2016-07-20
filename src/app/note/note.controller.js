export class NoteController {
    constructor ($scope, 
        SelectionService, 
        NotesManager, 
        $location, 
        $log, 
        ThemeManager) {
        'ngInject';

        init();

        $scope.modified = () => NotesManager.saveNote(SelectionService.note);

        $scope.back = () => {
            SelectionService.note = null;
            $location.path('/');
        }

        function init() {
            $scope.componentColor = ThemeManager.componentColor;
            $scope.selection = SelectionService;
            $scope.readOnly = {
                title: true, 
                content: true
            };
            if(!SelectionService.note) return $location.path('/');
            if(NotesManager.isEmpty(SelectionService.note)) { // probably a new one
                $scope.readOnly.title = false;
                $scope.readOnly.content = false;
            }
        }

    }
}
