export class NoteController {
    constructor ($scope, 
        SelectionService, 
        NotesManager, 
        $location,  
        ThemeManager, 
        $window, 
        $log) {
        'ngInject';

        init();

        $scope.modified = () => {
            /* should add an application values service for these */
            SelectionService.note.title = SelectionService.note.title.slice(0, 19); // fix for android maxlength
            NotesManager.saveNote(SelectionService.note);
        }

        $scope.back = () => {
            SelectionService.note = null;
            $location.path('/');
        }

        $scope.share = () => {
            $log.log('Sharing: ', SelectionService.note);
            if(!$window.plugins || !$window.plugins.socialsharing) return;
            let note = SelectionService.note;
            let social = $window.plugins.socialsharing;
            social.share(note.content, note.title, null /*files*/, null /*url*/, 'Choose an app to share your note');
        }

        function init() {
            //if(!SelectionService.note) return $location.path('/');
            $scope.componentColor = ThemeManager.componentColor;
            $scope.selection = SelectionService;
            $scope.readOnly = false;
        }

    }
}
