import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NoteController } from './note/note.controller';

//directives
import { EnStatusBar } from '../app/components/en_status_bar/en.status.bar';
import { EnAllNotes } from '../app/components/en_all_notes/en.all.notes';
import { ThemeBackground } from '../app/components/theme_background/theme.background';

//services
import { SelectionService } from '../app/shared/selection.service';
import { NotesManager } from '../app/shared/notes.manager';
import { ThemeManager } from '../app/shared/theme.manager';

// .component('nameToUse', importedName)

angular.module('easynotepad', ['ngAnimate', 'ngTouch', 'ngAria', 'ngResource', 'ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)

  // services
  .service('SelectionService', SelectionService)
  .service('NotesManager', NotesManager)
  .service('ThemeManager', ThemeManager)

  // controllers
  .controller('MainController', MainController)
  .controller('NoteController', NoteController)

  // directives
  .directive('enStatusBar', EnStatusBar)
  .directive('enAllNotes', EnAllNotes)
  .directive('themeBackground', ThemeBackground)

  // resources
