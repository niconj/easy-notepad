export function ThemeBackground(ThemeManager, $log) {
    'ngInject';

    let directive = {
        restrict: 'A',
        link: (scope, element) => {
            var bothClasses = 'dark-bg light-bg';
            scope.$watch(ThemeManager.backgroundColor, (newValue) => {
                $log.log('Background changed', newValue)
                let newClass = newValue + '-bg';
                element.removeClass(bothClasses);
                element.addClass(newClass);
          });
        }
    };

    return directive;
}
