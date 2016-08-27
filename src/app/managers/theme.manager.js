export class Theme {
  constructor ($window, $log) {
    'ngInject';

    var ls = $window.localStorage;
    var light = 'light';
    var dark = 'dark';

    this.theme = savedTheme() || light;

    /* using a simple toggle for the moment because there are only two themes
    must apply another approach if there are more in the future */
    this.toggle = () => {
        let newTheme = this.theme === dark? light : dark;
        ls.setItem('theme', newTheme);
        return this.theme = newTheme;
    }

    this.setThemeColor = color => {
        ls.setItem('theme', color);
        return this.theme = color;
    }

    this.backgroundColor = () => this.theme;

    this.componentColor = () => this.theme === dark? light : dark;

    function savedTheme() {
        let savedTheme = ls.getItem('theme');
        $log.info(savedTheme ? 'Saved theme was ' + savedTheme : 'No saved theme');
        return savedTheme;
    }

  }
}
