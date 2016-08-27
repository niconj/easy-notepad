export function Modal() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/modal/modal.html',
        scope: {},
        controller: ModalController,
        link: modalLink
    };

    return directive;
}

class ModalController {
    constructor ($scope, ModalHelper, $log, Theme, Language) {
        'ngInject';

        $scope.modal = ModalHelper;

        $scope.componentColor = Theme.componentColor;

        /* should refactor to the service? */
        $scope.backgroundColor = () => Theme.backgroundColor() + '-bg';

        $scope.accept = () => {
            ModalHelper.config.acceptCallback();
            ModalHelper.hide();
        };
        
        $scope.getText = Language.getText;

    }
}

function modalLink(scope, element) {
    /* used to avoid closing the modal when clicking inside the element boundaries */
    var target = angular.element(element[0].querySelector('.modal-content'));
    target.on('click touchend', event => event.stopPropagation());
}
