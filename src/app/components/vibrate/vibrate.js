export function Vibrate(Vibration) {
    'ngInject';

    let directive = {
        restrict: 'A',
        link: (scope, element) => element.bind("click", Vibration)
    };

    return directive;
}
