import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NoteController } from './note/note.controller';

//directives
import { AllNotes } from '../app/components/all_notes/all.notes';
import { ThemeBackground } from '../app/components/theme_background/theme.background';
import { OutsideClick } from '../app/components/outside_click/outside.click';
import { SearchBar } from '../app/components/search_bar/search.bar';
import { BottomBar } from '../app/components/bottom_bar/bottom.bar';
import { Vibrate } from '../app/components/vibrate/vibrate';
import { Modal } from '../app/components/modal/modal';

//services
import { Selection } from '../app/managers/selection.manager';
import { NotesManager } from '../app/managers/notes.manager';
import { Theme } from '../app/managers/theme.manager';
import { Search } from '../app/managers/search.manager';
import { Language } from '../app/managers/language.manager';
import { Vibration } from '../app/managers/vibration';
import { ModalHelper } from '../app/managers/modal.helper';

// .component('nameToUse', importedName)

angular.module('easynotepad', ['ngAnimate', 'ngTouch', 'ngAria', 'ngResource', 'ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)

  // services
  .service('Selection', Selection)
  .service('NotesManager', NotesManager)
  .service('Theme', Theme)
  .service('Search', Search)
  .service('Language', Language)
  .service('Vibration', Vibration)
  .service('ModalHelper', ModalHelper)

  // controllers
  .controller('MainController', MainController)
  .controller('NoteController', NoteController)

  // directives
  .directive('allNotes', AllNotes)
  .directive('themeBackground', ThemeBackground)
  .directive('outsideClick', OutsideClick)
  .directive('searchBar', SearchBar)
  .directive('bottomBar', BottomBar)
  .directive('vibrate', Vibrate)
  .directive('modal', Modal)

  // resources
