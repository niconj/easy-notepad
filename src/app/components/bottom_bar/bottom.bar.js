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
  constructor (Theme, NotesManager, $location, Search) {
    'ngInject';

    this.componentColor = Theme.componentColor;

    
    this.invertColors = Theme.toggle;
    
    this.createNote = () => {
      Search.stopSearch();
      NotesManager.newNote();
      $location.path('note');
    }

  }
}
