export class NoteController {
    constructor (Selection, 
        NotesManager, 
        $location,  
        Theme, 
        Language, 
        $window, 
        $log) {
        'ngInject';

        let nc = this;

        init();

        /* todo: refactor to directive */
        nc.displayButtons = () => $window.innerHeight > 300;

        nc.modified = () => {
            /* fix for android maxlength 
            these values should be angular constants */
            let note = Selection.note;
            note.title = note? note.title.slice(0, 19) : note.title;
            NotesManager.saveNote(note);
        }

        nc.back = () => {
            Selection.releaseNote();
            $location.path('/');
        }

        nc.share = () => {
            /* todo: create Share service or a Cordova wrapper */
            $log.log('Sharing: ', Selection.note);
            if(!$window.plugins || !$window.plugins.socialsharing) return;
            let social = $window.plugins.socialsharing;
            let note = Selection.note;
            /* social.share(content, title, files, url, uitext) */
            social.share(note.content, note.title, null, null, 'Choose an app to share your note');
        }

        function init() {
            if(!Selection.note) return $location.path('/');
            nc.componentColor = Theme.componentColor;
            nc.getText = Language.getText;
            nc.note = Selection.note;

            nc.config = {
                readOnly: false, 
                toggle: function() {
                    this.readOnly = !this.readOnly;
                }
            }
        }

    }
}
