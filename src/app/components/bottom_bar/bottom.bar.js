export function BottomBar() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/bottom_bar/bottom-bar.html',
    scope: {}, // isolated
    controller: BottomBarController, 
    controllerAs: 'bottom', 
    bindToController: true
  };

  return directive;
}

class BottomBarController {
  constructor (ThemeManager, NotesManager, $location, Search) {
    'ngInject';

    this.componentColor = ThemeManager.componentColor;
    this.invertColors = ThemeManager.toggle;
    this.createNote = () => {
      Search.queryString = null;
      Search.isSearching = false;
      NotesManager.newNote();
      $location.path('note');
    }

  }
}
