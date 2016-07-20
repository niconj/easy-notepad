export class ThemeManager {
  constructor () {
    'ngInject';

    var light = 'light';
    var dark = 'dark';

    this.theme = dark;

    /* using a simple toggle for the moment because there are only two themes
    must apply another approach if there are more in the future */
    this.toggle = () => this.theme = this.theme === dark? light : dark;

    this.backgroundColor = () => this.theme;

    this.componentColor = () => this.theme === dark? light : dark;
    
  }
}
