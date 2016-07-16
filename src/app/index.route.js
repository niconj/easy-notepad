export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/note', {
      templateUrl: 'app/note/note.html',
      controller: 'NoteController',
      controllerAs: 'note'
    })
    .otherwise({
      redirectTo: '/'
    });
}
