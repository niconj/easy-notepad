export function EnStatusBar() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/en_status_bar/en-status-bar.html',
    scope: {}, // isolated
    controller: EnStatusBarController,
    controllerAs: 'sb'
  };

  return directive;
}

class EnStatusBarController {
  constructor () {
    'ngInject';
    
    // stuff

  }
}
