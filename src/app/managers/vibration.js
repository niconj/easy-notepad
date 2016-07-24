export class Vibration {
    constructor() {
        /* using 25ms as default */
        let vibrate = () => navigator.vibrate(25);
        return vibrate;
    }
}