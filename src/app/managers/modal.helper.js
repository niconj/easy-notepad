export class ModalHelper {
    constructor() {

        var emptyConfig = {
            text: 'Empty config test', 
            isShowing: false, 
            acceptCallback: null
        };

        // initial config
        this.config = emptyConfig;

        this.show = config => this.config = config;

        this.hide = () => this.config.isShowing = false;
        
    }
}