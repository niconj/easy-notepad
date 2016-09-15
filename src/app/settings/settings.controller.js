export class SettingsController {
    constructor ($location, Theme, Language) {
        'ngInject';

        let st = this;

        init();

        st.goHome = () => {
            $location.path('/');
        };

        st.setThemeColor = () => Theme.setThemeColor(st.themeColor);
        st.setLang = () => Language.setLang(st.lang);

        function init() {
            st.themeColor = Theme.theme;
            st.lang = Language.currentLang;
            st.getText = Language.getText;
            st.componentColor = Theme.componentColor;
        }

    }
}
