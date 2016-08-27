export function OutsideClick($log, $timeout, ModalHelper) {
    'ngInject';

    /* using for basic modal closing for the moment */
    let directive = {
        restrict: 'A',
        /* timeout has to be called to update the respective scope status without interfering with the digest cycle */
        link: (scope, element) => element.on('click touchend', () => $timeout(ModalHelper.hide))
    };

    return directive;
}
