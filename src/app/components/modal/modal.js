export function Modal() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/modal/modal.html',
        scope: {},
        controller: ModalController
    };

    return directive;
}

class ModalController {
    constructor ($scope, ModalHelper, $log, Theme, Language) {
        'ngInject';

        $scope.modal = ModalHelper;

        $scope.componentColor = Theme.componentColor;

        /* maybe refactor to the service */
        $scope.backgroundColor = () => Theme.backgroundColor() + '-bg';

        $scope.accept = () => {
            ModalHelper.config.acceptCallback();
            ModalHelper.hide();
        };
        
        $scope.getText = Language.getText;

    }
}
