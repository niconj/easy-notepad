export function ThemeBackground(Theme, $log) {
    'ngInject';

    let directive = {
        restrict: 'A',
        link: (scope, element) => {
            var bothClasses = 'dark-bg light-bg';
            scope.$watch(Theme.backgroundColor, (newValue) => {
                $log.log(`Background changed to ${newValue}`)
                let newClass = `${newValue}-bg`;
                element.removeClass(bothClasses);
                element.addClass(newClass);
          });
        }
    };

    return directive;
}
