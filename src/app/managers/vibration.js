export class Vibration {
    constructor() {
        /* using 20ms as default */
        let vibrate = () => navigator.vibrate(17);
        return vibrate;
    }
}
