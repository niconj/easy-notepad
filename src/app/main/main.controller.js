export class MainController {
  constructor ($scope, 
    SelectionService) {
    'ngInject';

    $scope.selection = SelectionService;
    
  }
}
