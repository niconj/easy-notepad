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

        /* refactor to directive */
        $scope.displayButtons = () => $window.innerHeight > 300;

        $scope.modified = () => {
            /* should add an application values service for these */
            let note = SelectionService.note.title;
            /* fix for android maxlength */
            SelectionService.note.title = note? SelectionService.note.title.slice(0, 19) : note;
            NotesManager.saveNote(SelectionService.note);
        }

        $scope.back = () => {
            SelectionService.note = null;
            $location.path('/');
        }

        $scope.share = () => {
            /* todo: create Share service */
            $log.log('Sharing: ', SelectionService.note);
            if(!$window.plugins || !$window.plugins.socialsharing) return;
            let note = SelectionService.note;
            let social = $window.plugins.socialsharing;
            /* social.share(content, title, files, url, uitext) */
            social.share(note.content, note.title, null, null, 'Choose an app to share your note');
        }

        function init() {
            if(!SelectionService.note) return $location.path('/');
            $scope.componentColor = ThemeManager.componentColor;
            $scope.selection = SelectionService;
            $scope.config = {
                readOnly: true
            }
        }

    }
}
