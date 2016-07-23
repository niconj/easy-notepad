export function runBlock ($log) {
    'ngInject';
    $log.log('Added _includes function to String');
    String.prototype._includes = function(str) {
        let re = new RegExp(str, 'ig');
        return re.test(this);
    }
}
