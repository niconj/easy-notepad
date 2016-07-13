import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

//directives
import { EnStatusBar } from '../app/components/en_status_bar/en.status.bar';
import { EnAllNotes } from '../app/components/en_all_notes/en.all.notes';
import { EnNote } from '../app/components/en_note/en.note';

//services
import { SelectionService } from '../app/shared/selection.service';
import { NotesManager } from '../app/shared/notes.manager';

// .component('nameToUse', importedName)

angular.module('easynotepad', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)

  // services
  .service('SelectionService', SelectionService)
  .service('NotesManager', NotesManager)

  // controllers
  .controller('MainController', MainController)

  // directives
  .directive('enStatusBar', EnStatusBar)
  .directive('enAllNotes', EnAllNotes)
  .directive('enNote', EnNote)

  // resources
