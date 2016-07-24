export class NoteController {
    constructor ($scope, 
        Selection, 
        NotesManager, 
        $location,  
        Theme, 
        Language, 
        $window, 
        $log) {
        'ngInject';

        init();

        /* refactor to directive */
        $scope.displayButtons = () => $window.innerHeight > 300;

        $scope.modified = () => {
            /* should add an application values service for these */
            let note = Selection.note.title;
            /* fix for android maxlength */
            Selection.note.title = note? Selection.note.title.slice(0, 19) : note;
            NotesManager.saveNote(Selection.note);
        }

        $scope.back = () => {
            Selection.releaseNote();
            $location.path('/');
        }

        $scope.share = () => {
            /* todo: create Share service */
            $log.log('Sharing: ', Selection.note);
            if(!$window.plugins || !$window.plugins.socialsharing) return;
            let note = Selection.note;
            let social = $window.plugins.socialsharing;
            /* social.share(content, title, files, url, uitext) */
            social.share(note.content, note.title, null, null, 'Choose an app to share your note');
        }

        function init() {
            if(!Selection.note) return $location.path('/');
            $scope.componentColor = Theme.componentColor;
            $scope.text = Language.getText;
            $scope.selection = Selection;
            $scope.config = {
                readOnly: false
            }
        }

    }
}
